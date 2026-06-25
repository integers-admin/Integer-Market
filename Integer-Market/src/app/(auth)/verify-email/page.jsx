"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState,Suspense } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import axios from "axios";

// export default function VerifyEmail() {
function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("loading"); // loading | success | expired | invalid
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [btnLabel, setBtnLabel] = useState("");
  const [btnHref, setBtnHref] = useState("/login");

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("invalid");
        setHeading("Invalid verification link");
        setBody("This verification link is invalid or has already been used.");
        setBtnLabel("Sign up again");
        setBtnHref("/signup");
        return;
      }

      try {
        const response = await axios.get(
          `${BASE_URL}/verify-email?token=${token}`,
        );

        if (response?.data?.success === true) {
          setStatus("success");
          setHeading("Email Verified");
          setBody(
            "Your email has been successfully verified. You can now login to your account.",
          );
          setBtnLabel("Go to Login");
          setBtnHref("/login");
        } else if (response?.data?.success === false) {
          setStatus("expired");
          setHeading("Link Expired");
          setBody(
            response?.data?.detail ||
              "Your email verification link has expired. Please sign up again to get a new link.",
          );
          setBtnLabel("Sign up again");
          setBtnHref("/signup");
        } else {
          setStatus("invalid");
          setHeading("Verification Failed");
          setBody(
            response?.data?.detail ||
              "This verification link is invalid or has already been used.",
          );
          setBtnLabel("Sign up again");
          setBtnHref("/signup");
        }
      } catch (err) {
        setStatus("invalid");
        setHeading("Something went wrong");
        setBody(
          err.response?.data?.detail ||
            "We couldn't process your verification. Please try again.",
        );
        setBtnLabel("Sign up again");
        setBtnHref("/signup");
      }
    };

    verifyEmail();
  }, [token]);

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center border border-slate-100"
      >
        {status === "loading" ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <Loader2 size={48} className="text-[#e27c60] animate-spin" />
            <p className="text-slate-500 text-sm font-medium">
              Verifying your email…
            </p>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex justify-center mb-5"
            >
              {isSuccess ? (
                <CheckCircle size={64} className="text-emerald-500" />
              ) : (
                <XCircle size={64} className="text-red-500" />
              )}
            </motion.div>

            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {heading}
            </h2>

            <p className="text-slate-500 mb-8 leading-relaxed text-[15px]">
              {body}
            </p>

            <Link
              href={btnHref}
              className="block w-full py-3 rounded-xl font-semibold text-white text-sm bg-[#e27c60] hover:bg-[#dc5833]"
            >
              {btnLabel}
            </Link>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
