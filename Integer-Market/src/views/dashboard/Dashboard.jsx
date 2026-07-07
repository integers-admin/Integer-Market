"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  TrendingUp,
  Calendar,
  User,
  LogOut,
  ArrowRight,
  Edit2,
  X,
  Eye,
  EyeOff,
  CheckCircle,
  ShoppingCart,
  Globe,
  BookOpen,
  ExternalLink,
  Receipt,
  AlertCircle,
  Lock,
  Hash,
  DollarSign,
  Clock,
} from "lucide-react";
import Badge from "../../components/ui/Badge";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { reports } from "../../data/reports";
import { staggerContainer, fadeInUp } from "../../lib/variants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ─── helpers ────────────────────────────────────────────────── */
function fmtDate(iso) {
  if (!iso) return "-";
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
function fmtTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* ─── Change Password Modal ───────────────────────────────────── */
function ChangePasswordModal({ onSave, onClose, isLoading }) {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [touched, setTouched] = useState({});
  const [serverError, setServerError] = useState("");
  const [saved, setSaved] = useState(false);

  const router = useRouter();

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const touch = (k) => () => setTouched((p) => ({ ...p, [k]: true }));

  const errors = {
    currentPassword: !form.currentPassword.trim() ? "Required" : "",
    newPassword: !form.newPassword
      ? "Required"
      : form.newPassword.length < 8
        ? "At least 8 characters"
        : "",
    confirmPassword:
      form.confirmPassword !== form.newPassword ? "Passwords do not match" : "",
  };
  const isValid =
    !errors.currentPassword && !errors.newPassword && !errors.confirmPassword;

  const inputBase =
    "w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none transition-colors";
  const ic = (f) =>
    `${inputBase} ${touched[f] && errors[f] ? "border-red-400" : "border-slate-200 focus:border-primary"} pr-10`;

  // const handleSave = async (e) => {
  //   e.preventDefault();
  //   setTouched({
  //     currentPassword: true,
  //     newPassword: true,
  //     confirmPassword: true,
  //   });
  //   if (!isValid) return;
  //   setServerError("");
  //   const result = await onSave({
  //     currentPassword: form.currentPassword,
  //     newPassword: form.newPassword,
  //   });
  //   if (!result?.ok) {
  //     setServerError(result?.error || "Something went wrong.");
  //     return;
  //   }
  //   setSaved(true);
  //   setTimeout(onClose, 1400);
  // };

  const handleSave = async (e) => {
    e.preventDefault();

    setTouched({
      currentPassword: true,
      newPassword: true,
      confirmPassword: true,
    });

    if (!isValid) return;

    setServerError("");

    const result = await onSave({
      currentPassword: form.currentPassword,
      newPassword: form.newPassword,
    });

    if (!result?.ok) {
      setServerError(result?.error || "Something went wrong.");
      return;
    }

    // Password change ke baad logout
    if (result?.forceLogout) {
      router.replace("/login");
      return;
    }

    setSaved(true);
    setTimeout(onClose, 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cp-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.22 }}
        className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2
            id="cp-title"
            className="text-base font-semibold text-slate-900 flex items-center gap-2"
          >
            <Lock size={15} className="text-primary" aria-hidden="true" />
            Change Password
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {saved ? (
          <div className="p-8 flex flex-col items-center text-center">
            <div className="size-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <CheckCircle
                size={28}
                className="text-green-500"
                aria-hidden="true"
              />
            </div>
            <p className="font-semibold text-slate-900">Password updated!</p>
            <p className="text-sm text-slate-500 mt-1">
              Your new password is active.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSave} className="p-6 space-y-4" noValidate>
            {serverError && (
              <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                <AlertCircle size={14} aria-hidden="true" />
                {serverError}
              </div>
            )}

            {/* Current password */}
            {[
              {
                id: "cp-current",
                key: "currentPassword",
                label: "Current Password",
                placeholder: "Enter your current password",
              },
              {
                id: "cp-new",
                key: "newPassword",
                label: "New Password",
                placeholder: "At least 8 characters",
              },
              {
                id: "cp-confirm",
                key: "confirmPassword",
                label: "Confirm New Password",
                placeholder: "Re-enter your new password",
              },
            ].map(({ id, key, label, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  {label}
                </label>
                <div className="relative">
                  <input
                    id={id}
                    type={showPass ? "text" : "password"}
                    value={form[key]}
                    onChange={update(key)}
                    onBlur={touch(key)}
                    placeholder={placeholder}
                    autoComplete={
                      key === "currentPassword"
                        ? "current-password"
                        : "new-password"
                    }
                    aria-invalid={touched[key] && !!errors[key]}
                    className={ic(key)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label={showPass ? "Hide passwords" : "Show passwords"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    {showPass ? (
                      <EyeOff size={15} aria-hidden="true" />
                    ) : (
                      <Eye size={15} aria-hidden="true" />
                    )}
                  </button>
                </div>
                {touched[key] && errors[key] && (
                  <p className="mt-1 text-xs text-red-500">{errors[key]}</p>
                )}
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer"
              >
                {isLoading ? "Saving…" : "Update Password"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─── Profile Edit Modal ──────────────────────────────────────── */
function ProfileEditModal({ user, onSave, onClose, isLoading }) {
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    company: user.company || "",
  });
  const [touched, setTouched] = useState({});
  const [saved, setSaved] = useState(false);

  const router = useRouter();

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const touch = (k) => () => setTouched((p) => ({ ...p, [k]: true }));

  const errors = {
    name: !form?.name?.trim()
      ? "Name is required"
      : form?.name?.trim().length < 2
        ? "At least 2 characters"
        : "",
    email: !form.email
      ? "Email is required"
      : !EMAIL_RE.test(form.email)
        ? "Enter a valid email"
        : "",
  };
  const isValid = !errors.name && !errors.email;

  const inputBase =
    "w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none transition-colors";
  const ic = (f) =>
    `${inputBase} ${touched[f] && errors[f] ? "border-red-400" : "border-slate-200 focus:border-primary"}`;

  // const handleSave = async (e) => {
  //   e.preventDefault();
  //   setTouched({ name: true, email: true });
  //   if (!isValid) return;
  //   await onSave({
  //     name: form.name.trim(),
  //     email: form.email,
  //     company: form.company.trim(),
  //   });
  //   setSaved(true);
  //   setTimeout(onClose, 1400);
  // };

  const handleSave = async (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true });

    if (!isValid) return;

    const result = await onSave({
      name: form.name.trim(),
      email: form.email,
      company: form.company.trim(),
    });

    if (!result?.ok) {
      toast.error(result?.error);
      return;
    }

    // Force logout case
    if (result?.forceLogout) {
      router.push("/login");
      return;
    }

    setSaved(true);
    setTimeout(onClose, 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ep-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.22 }}
        className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 id="ep-title" className="text-base font-semibold text-slate-900">
            Edit Profile
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {saved ? (
          <div className="p-8 flex flex-col items-center text-center">
            <div className="size-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <CheckCircle
                size={28}
                className="text-green-500"
                aria-hidden="true"
              />
            </div>
            <p className="font-semibold text-slate-900">Profile updated!</p>
            <p className="text-sm text-slate-500 mt-1">
              Your changes have been saved.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSave} className="p-6 space-y-4" noValidate>
            {[
              {
                id: "ep-name",
                key: "name",
                label: "Full Name",
                type: "text",
                placeholder: "",
              },
              {
                id: "ep-email",
                key: "email",
                label: "Email Address",
                type: "email",
                placeholder: "",
              },
              {
                id: "ep-company",
                key: "company",
                label: "Company (optional)",
                type: "text",
                placeholder: "",
              },
            ].map(({ id, key, label, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  value={form[key] || ""}
                  onChange={update(key)}
                  onBlur={touch(key)}
                  placeholder={placeholder}
                  aria-invalid={touched[key] && !!errors[key]}
                  className={ic(key)}
                />
                {touched[key] && errors[key] && (
                  <p className="mt-1 text-xs text-red-500">{errors[key]}</p>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer"
              >
                {isLoading ? "Saving…" : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Dashboard ──────────────────────────────────────────── */
export default function Dashboard() {
  const {
    user,
    isAuthenticated,
    logout,
    updateProfile,
    updateProfilePass,
    isLoading,
  } = useAuth();
  const { cartItems, cartCount, setCartOpen } = useCart();
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const router = useRouter();

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const [purchasedReports, setPurchasedReports] = useState([]);
  const [industryCovered, setIndustryCovered] = useState(0);
  const [totalPurchase, setTotalPurchase] = useState(0);

  // useEffect(() => {
  //   console.log("isAuthenticated dash: ", isAuthenticated);
  //   if (!isAuthenticated) router.replace("/login");
  // }, [isAuthenticated, router]);

  // if (!isAuthenticated) return null;

  const getPurchasedReports = async () => {
    try {
      const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

      let response = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("getPurchasedReports: ", response);

      if (response?.status === 200) {
        setIndustryCovered(response?.data?.industry_covered || 0);
        setTotalPurchase(response?.data?.total_purchase || 0);
        setPurchasedReports(
          Array.isArray(response?.data?.purchased_reports)
            ? response?.data?.purchased_reports
            : [],
        );
      }
    } catch (err) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    getPurchasedReports();
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  // const purchasedReports = reports.filter((r) =>
  //   user.purchasedReports?.includes(r.id),
  // );
  // const uniqueIndustries = [
  //   ...new Set(purchasedReports.map((r) => r.industryName)),
  // ].length;

  // Get rich metadata for a report
  // const getMeta = (reportId) =>
  //   user.purchasedReportsMeta?.find((m) => m.reportId === reportId) ?? null;

  // const handleViewReport = (slug) => {
  //   // Opens report detail page in a new tab (in production this would open the PDF directly)
  //   window.open(`/report-name/${slug}`, "_blank", "noopener,noreferrer");
  // };

  const handleViewReport = async (slug) => {
    try {
      const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

      const response = await axios.get(`${BASE_URL}/reports/${slug}/download`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200 && response.data?.download_url) {
        window.open(response.data.download_url, "_blank");
      }
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  let userDetail = localStorage.getItem("&APl1#2CbnABK7xfX49b");
  const parsedData = userDetail ? JSON.parse(userDetail) : null;

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-slate-500 mt-1">
                  Welcome back, {parsedData?.full_name || ""}
                </p>
              </div>
              <Badge variant="surface" size="md">
                Pay-per-Report
              </Badge>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* ── Sidebar ─────────────────────────────────────────── */}
          <aside>
            <div className="bg-white border border-slate-100 rounded-2xl p-5">
              {/* Avatar */}
              <div className="flex flex-col items-center text-center pb-5 mb-5 border-b border-slate-100">
                <div className="size-16 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary text-xl font-bold mb-3">
                  {parsedData?.full_name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p className="font-semibold text-slate-900">
                  {parsedData?.full_name}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {parsedData?.email}
                </p>
                {parsedData?.company_name && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    {parsedData.company_name}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => setShowProfileEdit(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-primary hover:bg-primary/8 border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
                  >
                    <Edit2 size={12} aria-hidden="true" />
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Member since */}
              <div className="mb-5 px-3 py-2.5 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-xs text-slate-500">Member since</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">
                  {/* {new Date(user.joinDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })} */}
                  {new Date(parsedData?.member_since).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    },
                  )}
                </p>
              </div>

              <nav className="space-y-0.5">
                <Link
                  href="/report"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <BookOpen
                    size={15}
                    className="text-primary"
                    aria-hidden="true"
                  />
                  Browse Reports
                </Link>

                {/* My Orders - opens cart drawer */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ShoppingCart
                    size={15}
                    className="text-primary"
                    aria-hidden="true"
                  />
                  My Orders
                  {cartCount > 0 && (
                    <span className="ml-auto size-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Change Password */}
                <button
                  onClick={() => setShowChangePassword(true)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Lock size={15} className="text-primary" aria-hidden="true" />
                  Change Password
                </button>

                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer mt-1"
                >
                  <LogOut size={15} aria-hidden="true" />
                  Sign Out
                </button>
              </nav>
            </div>
          </aside>

          {/* ── Main Content ────────────────────────────────────── */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                {
                  label: "Reports Purchased",
                  value: totalPurchase || "-",
                  icon: FileText,
                  desc: "In your library",
                },
                {
                  label: "Industries Covered",
                  value: industryCovered || "-",
                  icon: Globe,
                  desc: "Unique sectors",
                },
                {
                  label: "Member Since",
                  value: new Date(parsedData?.member_since).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    },
                  ),
                  icon: Calendar,
                  desc: "Account created",
                },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    variants={fadeInUp}
                    className="bg-white border border-slate-100 rounded-2xl p-5"
                  >
                    <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon
                        size={16}
                        className="text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                      {s.value}
                    </div>
                    <div className="text-sm font-medium text-slate-700 mt-0.5">
                      {s.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {s.desc}
                    </div>
                  </motion.div>
                );
              })}
              {/* <motion.div
                variants={fadeInUp}
                className="bg-white border border-slate-100 rounded-2xl p-5"
              >
                <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Calendar
                    size={16}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-2xl font-black text-slate-900">
                  {new Date(parsedData?.member_since).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    },
                  )}
                </div>
                <div className="text-sm font-medium text-slate-700 mt-0.5">
                  Member Since
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Account created
                </div>
              </motion.div> */}
            </motion.div>

            {/* ── Purchased Reports ────────────────────────────── */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  Your Reports
                </h2>
                <Link
                  href="/report"
                  className="text-sm text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-1"
                >
                  Browse more <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>

              {purchasedReports?.length === 0 ? (
                <div className="text-center py-12">
                  <FileText
                    size={32}
                    className="text-slate-300 mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <p className="text-slate-500 font-medium">No reports yet</p>
                  <p className="text-slate-400 text-sm mt-1 mb-5">
                    Browse our catalog and purchase your first report.
                  </p>
                  <Link
                    href="/report"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm"
                  >
                    Browse Reports
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {purchasedReports?.map((r, i) => {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-primary/20 hover:bg-white transition-all duration-200 overflow-hidden"
                      >
                        {/* Top row: icon + title + badges */}
                        <div className="flex items-start gap-4 p-4">
                          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FileText size={16} aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            {/* <p className="text-sm font-semibold text-slate-800 leading-snug">
                              {r.title}
                            </p> */}

                            <Link
                              href={`/report-name/${r.slug}`}
                              className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors duration-200 focus-visible:text-primary"
                            >
                              {r.title}
                            </Link>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {r.industry}
                              {/* · {r.reportTypeName}  */}· {r.page_count}{" "}
                              pages · {r.asset_type}
                            </p>
                          </div>
                          {/* Action buttons */}
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => handleViewReport(r.slug)}
                              aria-label={`View ${r.title}`}
                              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
                            >
                              <ExternalLink size={12} aria-hidden="true" />
                              View
                            </button>
                            {/* <button
                              aria-label={`Download ${r.title}`}
                              onClick={() => handleDownload(r.slug)}
                              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors cursor-pointer"
                            >
                              <Download size={12} aria-hidden="true" />
                              Download
                            </button> */}
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 px-4 pb-3.5 border-t border-slate-100 pt-3">
                          <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                            <Calendar
                              size={11}
                              className="text-primary/70"
                              aria-hidden="true"
                            />
                            Purchased:{" "}
                            <strong className="text-slate-700">
                              {r.created_date}
                            </strong>
                            {/* <span className="text-slate-300">
                                purchased time
                              </span> */}
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                            <DollarSign
                              size={11}
                              className="text-primary/70"
                              aria-hidden="true"
                            />
                            Paid:{" "}
                            <strong className="text-slate-700">
                              $ {r.price_cents} USD
                            </strong>
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                            <Hash
                              size={11}
                              className="text-primary/70"
                              aria-hidden="true"
                            />
                            Order Id:{" "}
                            <strong className="text-slate-700">
                              {/* {r.order_id?.length >= 8
                                ? r.order_id.slice(0, 8) + "..."
                                : r.order_id} */}

                              {r.order_id}
                            </strong>
                          </span>
                          <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                            <Clock
                              size={11}
                              className="text-primary/70"
                              aria-hidden="true"
                            />
                            Expiry: <strong>Lifetime access</strong>
                          </span>
                        </div>

                        {/* Meta row: purchase date, price, order ID, expiry */}
                        {/* {meta && ( */}
                        {/* <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 px-4 pb-3.5 border-t border-slate-100 pt-3">
                            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                              <Calendar
                                size={11}
                                className="text-primary/70"
                                aria-hidden="true"
                              />
                              Purchased:{" "}
                              <strong className="text-slate-700">
                                {fmtDate(meta.purchasedAt)}
                              </strong>
                              <span className="text-slate-300">
                                {fmtTime(meta.purchasedAt)}
                              </span>
                            </span>
                            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                              <DollarSign
                                size={11}
                                className="text-primary/70"
                                aria-hidden="true"
                              />
                              Paid:{" "}
                              <strong className="text-slate-700">
                                ${meta.price.toLocaleString()} USD
                              </strong>
                            </span>
                            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                              <Hash
                                size={11}
                                className="text-primary/70"
                                aria-hidden="true"
                              />
                              Order:{" "}
                              <strong className="text-slate-700">
                                {meta.orderId}
                              </strong>
                            </span>
                            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                              <Clock
                                size={11}
                                className="text-primary/70"
                                aria-hidden="true"
                              />
                              Expiry:{" "}
                              <strong
                                className={
                                  meta.expiryDate
                                    ? "text-amber-600"
                                    : "text-green-600"
                                }
                              >
                                {meta.expiryDate
                                  ? fmtDate(meta.expiryDate)
                                  : "Lifetime access"}
                              </strong>
                            </span>
                          </div> */}
                        {/* // )} */}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showProfileEdit && (
          <ProfileEditModal
            user={user}
            onSave={updateProfile}
            onClose={() => setShowProfileEdit(false)}
            isLoading={isLoading}
          />
        )}
        {showChangePassword && (
          <ChangePasswordModal
            onSave={updateProfilePass}
            onClose={() => setShowChangePassword(false)}
            isLoading={isLoading}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
