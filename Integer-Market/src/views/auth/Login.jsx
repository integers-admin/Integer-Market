"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle,
  Shield,
  BarChart2,
  Globe,
} from "lucide-react";
import Logo from "../../components/ui/Logo";
import { useAuth } from "../../context/AuthContext";

import { toast } from "react-toastify";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const features = [
  { icon: BarChart2, text: "100+ market research reports" },
  { icon: Shield, text: "Verified data sources" },
  { icon: Globe, text: "Coverage across 85+ countries" },
  { icon: CheckCircle, text: "Instant PDF download on purchase" },
];

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
      role="alert"
    >
      {msg}
    </motion.p>
  );
}

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [showPass, setShowPass] = useState(false);
  const [serverError, setServerError] = useState("");
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const searchParams = useSearchParams();

const redirect = searchParams.get("redirect");

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const touch = (k) => () => setTouched((p) => ({ ...p, [k]: true }));

  const errors = {
    email: !form.email
      ? "Email is required"
      : !EMAIL_RE.test(form.email)
        ? "Enter a valid email address"
        : "",
    password: !form.password
      ? "Password is required"
      : form.password.length < 8
        ? "Password must be at least 8 characters"
        : "",
  };

  const isValid = !errors.email && !errors.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!isValid) return;
    setServerError("");
    try {
      let login_data = {
        email: form.email,
        password: form.password,
      };

      const success = await login(login_data);
      // console.log("login success:", success);
      if (success) {
        router.push(redirect || "/");
      }
    } catch {
      setServerError("Unable to sign in. Please try again.");
    }
  };

  useEffect(() => {
    let auth = localStorage.getItem("1r#efp@G6*6dIBELf^8j");
    if (auth) {
      router.push("/");
    }
  }, []);

  const inputBase =
    "w-full px-4 py-3 bg-white border rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none transition-colors";
  const inputClass = (field) =>
    `${inputBase} ${touched[field] && errors[field] ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-primary"}`;

  return (
    <div className="min-h-screen flex">
      {/* Left panel - brand */}
      <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-primary to-primary-dark flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4"
          aria-hidden="true"
        />
        
        {/* <Link href="/" aria-label="Integer Market home">
          <Logo light className="h-9 w-auto" />
        </Link> */}

        <div className="h-10 w-25 cursor-pointer" onClick={()=>router.push("/")}>
          <img src="./assets/int_mark_Logo.svg" alt="icon" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            Intelligence that drives better business decisions
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed">
            In-depth market research reports across consumer goods, health, wellness, ingredients & materials with market size, share, growth forecasts, and competitor insights.
          </p>
          <ul className="space-y-4" role="list">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-white" aria-hidden="true" />
                </div>
                <span className="text-sm text-white/85 font-medium">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="text-xs text-white/40 relative z-10">
          © {new Date().getFullYear()} Integers Insights Private Limited. All
          rights reserved. <br />
          Trading as Integer Market · Market intelligence for global
          decision-makers.
        </p>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 bg-slate-50">
        {/* Mobile logo */}
        <div className="lg:hidden mb-8">
          <Link href="/" aria-label="Integer Market home">
            <Logo className="h-9 w-auto" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
            <p className="text-slate-500 text-sm mt-1">
              Sign in to access your reports and research dashboard.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            {serverError && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600"
                role="alert"
              >
                {serverError}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="login-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    onBlur={touch("email")}
                    placeholder="alex@company.com"
                    autoComplete="email"
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={
                      touched.email && errors.email ? "email-error" : undefined
                    }
                    className={inputClass("email") + " pl-10"}
                  />
                </div>
                <FieldError msg={touched.email ? errors.email : ""} />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => router.push("/forgot-password")}
                    className="text-xs text-primary hover:text-primary-dark transition-colors cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="login-password"
                    type={showPass ? "text" : "password"}
                    value={form.password}
                    onChange={update("password")}
                    onBlur={touch("password")}
                    placeholder="Min. 8 characters"
                    autoComplete="current-password"
                    aria-invalid={touched.password && !!errors.password}
                    className={inputClass("password") + " pl-10 pr-11"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label={showPass ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    {showPass ? (
                      <EyeOff size={16} aria-hidden="true" />
                    ) : (
                      <Eye size={16} aria-hidden="true" />
                    )}
                  </button>
                </div>
                <FieldError msg={touched.password ? errors.password : ""} />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer mt-2"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Signing in"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : (
                  <>
                    Sign In <ArrowRight size={16} aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>

          {/* <p className="text-center text-xs text-slate-400 mt-5">
            Demo: use any email + any password (8+ chars) to sign in
          </p> */}
        </motion.div>
      </div>
    </div>
  );
}
