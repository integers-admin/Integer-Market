"use client";
import { Suspense } from "react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

// ── Error Component ───────────────────────────────────────────────

function FieldError({ msg }) {
  if (!msg) return null;

  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2 text-xs text-red-500 font-semibold flex items-center gap-1.5"
      role="alert"
    >
      <AlertCircle size={13} />
      {msg}
    </motion.p>
  );
}

// ── Main Component ───────────────────────────────────────────────

// export default function ResetPassword() {
function ResetPasswordContent() {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showCf, setShowCf] = useState(false);
  const [touchedCf, setTouchedCf] = useState(false);

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  const searchParams = useSearchParams();

  // ── VALIDATION ───────────────────────────────────────────────

  const isPwValid = pw.length >= 8;
  const isMatch = pw === confirm && confirm.length > 0;

  const canSubmit = isPwValid && isMatch;
  const confInvalid = touchedCf && confirm.length > 0 && !isMatch;

  // ── SUBMIT ────────────────────────────────────────────────────

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouchedCf(true);

    if (!canSubmit) return;

    const token = searchParams.get("token");

    if (!token) {
      setServerError("Invalid or missing reset link.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setServerError("");

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    console.log("token: ", token);
    console.log("pw: ", pw);

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/reset-password`,
        {
          token,
          new_password: pw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data.success) {
        setStatus("success");
      } else {
        setServerError(
          response.data.detail || "Something went wrong. Please try again.",
        );
        setStatus("error");
      }
    } catch (err) {
      setServerError(
        err.response?.data?.detail || err.message || "Network error",
      );
      setStatus("error");
    }
  };

  const inputBase =
    "w-full h-[50px] border rounded-xl bg-white pl-11 pr-11 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors";

  // ── SUCCESS SCREEN ───────────────────────────────────────────

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md text-center"
        >
          {/* <IntegerMarketLogo /> */}

          <CheckCircle size={50} className="text-emerald-500 mx-auto mb-4" />

          <h2 className="text-2xl font-bold">Password Updated</h2>
          <p className="text-slate-500 mt-2">
            You can now sign in with your new password.
          </p>

          <Link
            href="/login"
            className="mt-6 inline-flex items-center gap-2 text-[#d4734f] font-bold"
          >
            <ArrowLeft size={16} /> Back to login
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── FORM UI ───────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* <IntegerMarketLogo /> */}

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-1">Reset Password</h2>
          <p className="text-sm text-slate-500 mb-6">
            Password must be at least 8 characters
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* PASSWORD */}
            <div>
              <label className="text-sm font-semibold">New Password</label>

              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 text-slate-400" />

                <input
                  type={showPw ? "text" : "password"}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Enter password"
                  className={inputBase}
                />

                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-3"
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {pw.length > 0 && !isPwValid && (
                <FieldError msg="Password must be at least 8 characters" />
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm font-semibold">Confirm Password</label>

              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 text-slate-400" />

                <input
                  type={showCf ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  onBlur={() => setTouchedCf(true)}
                  placeholder="Re-enter password"
                  className={inputBase}
                />

                <button
                  type="button"
                  onClick={() => setShowCf(!showCf)}
                  className="absolute right-3 top-3"
                >
                  {showCf ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <FieldError msg={confInvalid ? "Passwords do not match" : ""} />

              {isMatch && (
                <p className="text-green-600 text-xs mt-2 flex items-center gap-1">
                  <CheckCircle size={14} /> Passwords match
                </p>
              )}
            </div>

            {/* SERVER ERROR */}
            <AnimatePresence>
              {status === "error" && serverError && (
                <motion.div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                  {serverError}
                </motion.div>
              )}
            </AnimatePresence>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={!canSubmit || status === "loading"}
              className="w-full h-[50px] bg-[#e0805f] text-white font-bold rounded-xl disabled:opacity-50"
            >
              {status === "loading" ? "Updating..." : "Reset Password"}
            </button>
          </form>
        </div>

        <div className="text-center mt-5">
          <Link
            href="/login"
            className="text-[#d4734f] font-bold inline-flex items-center gap-1"
          >
            <ArrowLeft size={14} /> Back to login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
