"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Building2,
  ArrowRight,
  CheckCircle,
  BarChart2,
  Shield,
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

function getPasswordStrength(pw) {
  if (pw.length === 0) return null;
  if (pw.length < 8)
    return { level: "weak", color: "bg-red-400", label: "Too short" };
  const hasUpper = /[A-Z]/.test(pw);
  const hasNum = /\d/.test(pw);
  const hasSpecial = /[^A-Za-z0-9]/.test(pw);
  const score = [pw.length >= 12, hasUpper, hasNum, hasSpecial].filter(
    Boolean,
  ).length;
  if (score <= 1)
    return { level: "fair", color: "bg-amber-400", label: "Fair" };
  if (score <= 2) return { level: "good", color: "bg-primary", label: "Good" };
  return { level: "strong", color: "bg-green-500", label: "Strong" };
}

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 text-xs text-red-500"
      role="alert"
    >
      {msg}
    </motion.p>
  );
}

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    company: false,
    password: false,
  });
  const [showPass, setShowPass] = useState(false);
  const { signup, isLoading } = useAuth();
  const router = useRouter();

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const touch = (k) => () => setTouched((p) => ({ ...p, [k]: true }));

  const errors = {
    name: !form.name.trim()
      ? "Full name is required"
      : form.name.trim().length < 2
        ? "Name must be at least 2 characters"
        : "",
    email: !form.email
      ? "Email is required"
      : !EMAIL_RE.test(form.email)
        ? "Enter a valid email address"
        : "",
    company: !form.company.trim() ? "Company name is required" : "",
    password: !form.password
      ? "Password is required"
      : form.password.length < 8
        ? "Password must be at least 8 characters"
        : "",
  };

  const isValid = Object.values(errors).every((e) => !e);
  const strength = getPasswordStrength(form.password);

  const inputBase =
    "w-full px-4 py-3 bg-white border rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none transition-colors";
  const inputClass = (field) =>
    `${inputBase} ${touched[field] && errors[field] ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-primary"}`;

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setTouched({ name: true, email: true, company: true, password: true })
  //   if (!isValid) return
  //   await signup(form)
  //   router.push('/dashboard')
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true, password: true });
    if (!isValid) return;
    // await signup(form)

    const success = await signup(form);

    // console.log("signup success:", success);

    // if (success) {
    //   toast.success(
    //     "Registration successful! Please check your email for the verification link.",
    //   );
    // }
  };

  useEffect(() => {
    let auth = localStorage.getItem("token");
    if (auth) {
      router.push("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Left panel - brand */}
      <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-primary to-primary-dark flex-col justify-between p-12 relative overflow-hidden">
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
          rights reserved. <br /> Trading as Integer Market · Market
          intelligence for global decision-makers.
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
            <h1 className="text-2xl font-bold text-slate-900">
              Create your account
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Free to create · No credit card required
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="su-name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="su-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    onBlur={touch("name")}
                    placeholder="Alex Johnson"
                    autoComplete="name"
                    aria-invalid={touched.name && !!errors.name}
                    className={inputClass("name") + " pl-10"}
                  />
                </div>
                <FieldError msg={touched.name ? errors.name : ""} />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="su-email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Work Email
                </label>
                <div className="relative">
                  <Mail
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="su-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    onBlur={touch("email")}
                    placeholder="alex@company.com"
                    autoComplete="email"
                    aria-invalid={touched.email && !!errors.email}
                    className={inputClass("email") + " pl-10"}
                  />
                </div>
                <FieldError msg={touched.email ? errors.email : ""} />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="su-company"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Company
                </label>
                <div className="relative">
                  <Building2
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="su-company"
                    type="text"
                    value={form.company}
                    onChange={update("company")}
                    onBlur={touch("company")}
                    placeholder="Your company name"
                    autoComplete="organization"
                    aria-invalid={touched.company && !!errors.company}
                    className={inputClass("company") + " pl-10"}
                  />
                </div>
                <FieldError msg={touched.company ? errors.company : ""} />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="su-password"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="su-password"
                    type={showPass ? "text" : "password"}
                    value={form.password}
                    onChange={update("password")}
                    onBlur={touch("password")}
                    placeholder="Min. 8 characters"
                    autoComplete="new-password"
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
                {/* Password strength bar */}
                {strength && (
                  <div className="mt-2">
                    <div className="flex gap-1 h-1">
                      {["weak", "fair", "good", "strong"].map((lvl, i) => {
                        const levels = { weak: 1, fair: 2, good: 3, strong: 4 };
                        const active = levels[strength.level] > i;
                        return (
                          <div
                            key={lvl}
                            className={`flex-1 rounded-full transition-colors duration-300 ${active ? strength.color : "bg-slate-100"}`}
                          />
                        );
                      })}
                    </div>
                    <p
                      className={`text-xs mt-1 font-medium ${strength.level === "strong" ? "text-green-600" : strength.level === "good" ? "text-primary" : strength.level === "fair" ? "text-amber-500" : "text-red-500"}`}
                    >
                      {strength.label}
                    </p>
                  </div>
                )}
                <FieldError msg={touched.password ? errors.password : ""} />
              </div>

              <p className="text-xs text-slate-400 pt-1">
                By creating an account, you agree to our{" "}
                <Link
                  href="/term-conditions"
                  className="text-primary hover:underline"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Creating account"
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
                    Create Account <ArrowRight size={16} aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-5">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
