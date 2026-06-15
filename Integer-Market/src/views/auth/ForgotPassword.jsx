// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Mail, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
// import Logo from "../../components/ui/Logo";
// import axios from "axios";

// const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function FieldError({ msg }) {
//   if (!msg) return null;
//   return (
//     <motion.p
//       initial={{ opacity: 0, y: -4 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
//       role="alert"
//     >
//       {msg}
//     </motion.p>
//   );
// }

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [touched, setTouched] = useState(false);
//   const [status, setStatus] = useState("idle"); // idle | loading | success | error
//   const [serverError, setServerError] = useState("");

//   const emailError = !email
//     ? "Email is required"
//     : !EMAIL_RE.test(email)
//       ? "Enter a valid email address"
//       : "";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setTouched(true);
//     if (emailError) return;

//     setStatus("loading");
//     setServerError("");

//     const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//     try {
//       const response = await axios.post(`${BASE_URL}/auth/forgot-password`, {
//         email,
//       });

//       console.log("response: ", response);

//       if (response?.status === 200) {
//           setStatus("success");
//       }
//       //   if (data.success) {
//       //     setStatus("success");
//       //   } else {
//       //     setServerError(
//       //       data.detail || "Something went wrong. Please try again.",
//       //     );
//       //     setStatus("error");
//       //   }
//     } catch (error) {
//       setServerError(
//         error.response?.data?.detail ||
//           "Network error. Please check your connection.",
//       );
//       setStatus("error");
//     }
//   };

//   const inputBase =
//     "w-full px-4 py-3 bg-white border rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none transition-colors";
//   const inputClass =
//     touched && emailError
//       ? `${inputBase} border-red-400 focus:border-red-400`
//       : `${inputBase} border-slate-200 focus:border-primary`;

//   return (
//     <div className="min-h-screen flex">
//       {/* ── LEFT PANEL (identical to login) ── */}
//       <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-primary to-primary-dark flex-col justify-between p-12 relative overflow-hidden">
//         {/* Decorative circles */}
//         <div
//           className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3"
//           aria-hidden="true"
//         />
//         <div
//           className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4"
//           aria-hidden="true"
//         />

//         <Link href="/" aria-label="Integer Market home">
//           <Logo light className="h-9 w-auto" />
//         </Link>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="relative z-10"
//         >
//           <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
//             Intelligence that drives better business decisions
//           </h2>
//           <p className="text-white/70 mb-10 leading-relaxed">
//             Join 5,000+ professionals who rely on Integer Market for strategic
//             market intelligence across pharma, nutraceuticals, and ingredients.
//           </p>
//           <ul className="space-y-4" role="list">
//             {[
//               "1,200+ market research reports",
//               "Verified primary data sources",
//               "Coverage across 85+ countries",
//               "Instant PDF download on purchase",
//             ].map((text) => (
//               <li key={text} className="flex items-center gap-3">
//                 <div className="size-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
//                   <CheckCircle
//                     size={15}
//                     className="text-white"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 <span className="text-sm text-white/85 font-medium">
//                   {text}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         <p className="text-xs text-white/40 relative z-10">
//           © {new Date().getFullYear()} Integer Market. All rights reserved.
//         </p>
//       </div>

//       {/* ── RIGHT PANEL ── */}
//       <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 bg-slate-50">
//         {/* Mobile logo */}
//         <div className="lg:hidden mb-8">
//           <Link href="/" aria-label="Integer Market home">
//             <Logo className="h-9 w-auto" />
//           </Link>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//           className="w-full max-w-md"
//         >
//           {/* Back to sign in */}
//           <Link
//             href="/login"
//             className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium transition-colors mb-8"
//           >
//             <ArrowLeft size={15} aria-hidden="true" />
//             Back to sign in
//           </Link>

//           {status !== "success" ? (
//             <>
//               <div className="mb-8">
//                 <h1 className="text-2xl font-bold text-slate-900">
//                   Forgot your password?
//                 </h1>
//                 <p className="text-slate-500 text-sm mt-1">
//                   No worries — enter the email tied to your account and we'll
//                   send you a secure link to reset it.
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
//                 {/* Illustration */}
//                 <div className="flex justify-center mb-6">
//                   <img
//                     src="/assets/forgot-password-illustration.png"
//                     alt="Forgot password"
//                     className="w-36 h-36 object-contain"
//                   />
//                 </div>

//                 {/* Server error */}
//                 {status === "error" && serverError && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.97 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600"
//                     role="alert"
//                   >
//                     {serverError}
//                   </motion.div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-5" noValidate>
//                   <div>
//                     <label
//                       htmlFor="forgot-email"
//                       className="block text-sm font-medium text-slate-700 mb-1.5"
//                     >
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <Mail
//                         size={15}
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                         aria-hidden="true"
//                       />
//                       <input
//                         id="forgot-email"
//                         type="email"
//                         value={email}
//                         onChange={(e) => {
//                           setEmail(e.target.value);
//                           setStatus("idle");
//                         }}
//                         onBlur={() => setTouched(true)}
//                         placeholder="alex@company.com"
//                         autoComplete="email"
//                         aria-invalid={touched && !!emailError}
//                         aria-describedby={
//                           touched && emailError
//                             ? "forgot-email-error"
//                             : undefined
//                         }
//                         className={`${inputClass} pl-10`}
//                       />
//                     </div>
//                     <FieldError msg={touched ? emailError : ""} />
//                   </div>

//                   <motion.button
//                     whileHover={{ scale: 1.01 }}
//                     whileTap={{ scale: 0.99 }}
//                     type="submit"
//                     disabled={status === "loading"}
//                     className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer"
//                   >
//                     {status === "loading" ? (
//                       <svg
//                         className="animate-spin size-5"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         aria-label="Sending reset link"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         />
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                         />
//                       </svg>
//                     ) : (
//                       <>
//                         Send Reset Link{" "}
//                         <ArrowRight size={16} aria-hidden="true" />
//                       </>
//                     )}
//                   </motion.button>
//                 </form>
//               </div>
//             </>
//           ) : (
//             /* ── SUCCESS STATE ── */
//             <motion.div
//               initial={{ opacity: 0, scale: 0.97 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 text-center"
//             >
//               <div className="flex justify-center mb-5">
//                 <div className="size-16 rounded-full bg-green-50 flex items-center justify-center">
//                   <CheckCircle
//                     size={32}
//                     className="text-green-500"
//                     aria-hidden="true"
//                   />
//                 </div>
//               </div>
//               <h2 className="text-xl font-bold text-slate-900 mb-2">
//                 Check your inbox
//               </h2>
//               <p className="text-slate-500 text-sm leading-relaxed mb-6">
//                 We've sent a reset link to{" "}
//                 <span className="font-semibold text-slate-700">{email}</span>.
//                 It expires in 30 minutes.
//               </p>
//               <Link
//                 href="/login"
//                 className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm"
//               >
//                 <ArrowLeft size={15} aria-hidden="true" />
//                 Back to sign in
//               </Link>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import Logo from "../../components/ui/Logo";
import axios from "axios";
import { toast } from "react-toastify";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!EMAIL_RE.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/forgot-password`,
        { email }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.detail || "Password reset link sent successfully!");
        setEmail("");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
        "Network error. Please check your connection."
      );
    }
  };

  const inputClass =
    "w-full px-4 py-3 pl-10 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-primary to-primary-dark flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />

        <Link href="/">
          <Logo light className="h-9 w-auto" />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Intelligence that drives better business decisions
          </h2>

          <p className="text-white/70 mb-10">
            Join 5,000+ professionals who rely on Integer Market for strategic
            market intelligence.
          </p>

          <ul className="space-y-4">
            {[
              "1,200+ market research reports",
              "Verified primary data sources",
              "Coverage across 85+ countries",
              "Instant PDF download on purchase",
            ].map((text) => (
              <li key={text} className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-white/15 flex items-center justify-center">
                  <CheckCircle size={15} className="text-white" />
                </div>
                <span className="text-sm text-white/85">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Integer Market. All rights reserved.
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 bg-slate-50">
        <div className="lg:hidden mb-8">
          <Link href="/">
            <Logo className="h-9 w-auto" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to sign in
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">
              Forgot your password?
            </h1>

            <p className="text-slate-500 text-sm mt-1">
              Enter the email tied to your account and we'll send you a secure
              reset link.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <div className="flex justify-center mb-6">
              <img
                src="/assets/forgot-password-illustration.png"
                alt="Forgot password"
                className="w-36 h-36 object-contain"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="forgot-email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer"
              >
                Send Reset Link
                <ArrowRight size={16} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}