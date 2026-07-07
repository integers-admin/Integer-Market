"use client";
// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import { useCart } from "../context/CartContext";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   FileText,
//   Calendar,
//   Globe,
//   CheckCircle,
//   ShoppingCart,
//   Download,
//   X,
//   CreditCard,
//   Lock,
//   Shield,
//   Star,
//   ChevronRight,
//   Eye,
//   BookOpen,
//   FlaskConical,
//   LayoutList,
//   BadgeCheck,
//   Phone,
//   TrendingUp,
//   Image as ImageIcon,
//   Zap,
// } from "lucide-react";
// import Badge from "../components/ui/Badge";
// import ScrollReveal from "../components/ui/ScrollReveal";
// import ReportCard from "../components/ui/ReportCard";
// import { getReportBySlug, reports } from "../data/reports";
// import { industries } from "../data/industries";
// import { useAuth } from "../context/AuthContext";
// import { staggerContainer, fadeInUp } from "../lib/variants";
// import TableContent from "./TableContent";
// import KeyWords from "./KeyWords ";
// import SamplePreview from "./SamplePreview";

// const SCOPE_COVERAGE = [
//   "Market & Demand Analysis",
//   "Pricing & Economics",
//   "Geography & Trade",
//   "Competitive Landscape",
//   "Trade & Supply Chain",
//   "Strategic Insights",
//   "Innovation & Trends",
//   "Regulation & Compliance",
//   "Consumer Behavior",
// ];

// const DECISIONS_SUPPORTED = [
//   "Supply Chain & Sourcing",
//   "Pricing & Commercial Strategy",
//   "Market Entry & Expansion",
//   "Competitive Strategy",
//   "Product Development",
//   "Investor Presentations",
//   "M&A & Partnerships",
//   "Risk Assessment",
// ];

// const METHODOLOGY_CONTENT = {
//   steps: [
//     {
//       title: "Secondary Research",
//       desc: "We begin with comprehensive desk research using government trade databases (UN Comtrade, Eurostat), regulatory filings, scientific publications, company annual reports, and industry association data.",
//     },
//     {
//       title: "Primary Research",
//       desc: "Our analysts conduct structured interviews with manufacturers, exporters, importers, formulators, and end-users to validate and enrich secondary findings with first-hand market intelligence.",
//     },
//     {
//       title: "Data Triangulation",
//       desc: "All data points are cross-validated using at least three independent sources. Discrepancies are investigated and resolved through additional primary outreach before inclusion.",
//     },
//     {
//       title: "Expert Review",
//       desc: "Each report undergoes peer review by a senior analyst and an external subject-matter expert to ensure technical accuracy, completeness, and actionable depth.",
//     },
//   ],
//   certifications: [
//     "ISO-Aligned Research Process",
//     "Primary Data Verified",
//     "Expert Peer Reviewed",
//     "Updated Annually",
//   ],
// };

// function CheckoutModal({ report, onClose, onSuccess }) {
//   const [step, setStep] = useState("details");
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     card: "",
//     expiry: "",
//     cvv: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handlePay = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1800));
//     setLoading(false);
//     setStep("success");
//     onSuccess();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
//       onClick={onClose}
//       role="dialog"
//       aria-modal="true"
//       aria-label="Purchase report"
//     >
//       <motion.div
//         initial={{ scale: 0.94, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.94, opacity: 0 }}
//         transition={{ duration: 0.2 }}
//         className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {step === "success" ? (
//           <div className="p-8 text-center">
//             <div className="size-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-5">
//               <CheckCircle
//                 size={28}
//                 className="text-primary"
//                 aria-hidden="true"
//               />
//             </div>
//             <h2 className="text-xl font-bold text-slate-900 mb-2">
//               Purchase Complete!
//             </h2>
//             <p className="text-slate-500 text-sm mb-6">
//               Your report has been added to your dashboard. Download it anytime.
//             </p>
//             <div className="space-y-3">
//               <button
//                 onClick={onClose}
//                 className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer"
//               >
//                 <Download size={16} aria-hidden="true" />
//                 Download Report (PDF)
//               </button>
//               <button
//                 onClick={onClose}
//                 className="w-full px-6 py-3 text-slate-400 text-sm hover:text-slate-700 transition-colors cursor-pointer"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
//               <h2 className="text-base font-semibold text-slate-900">
//                 Secure Checkout
//               </h2>
//               <button
//                 onClick={onClose}
//                 aria-label="Close checkout"
//                 className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
//               >
//                 <X size={20} aria-hidden="true" />
//               </button>
//             </div>

//             <div className="p-6">
//               <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 mb-6">
//                 <p className="text-xs text-slate-500 mb-1">
//                   {report.industryName}
//                 </p>
//                 <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
//                   {report.title}
//                 </p>
//                 <div className="flex items-center justify-between mt-3">
//                   <span className="text-xs text-slate-500">
//                     {report.pages} pages · PDF · Instant delivery
//                   </span>
//                   <span className="text-xl font-bold text-primary">
//                     ${report.price}
//                   </span>
//                 </div>
//               </div>

//               <form onSubmit={handlePay} className="space-y-4">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="col-span-2">
//                     <label
//                       htmlFor="checkout-name"
//                       className="block text-xs text-slate-600 font-medium mb-1.5"
//                     >
//                       Full Name
//                     </label>
//                     <input
//                       id="checkout-name"
//                       type="text"
//                       required
//                       value={form.name}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, name: e.target.value }))
//                       }
//                       placeholder="Alex Johnson"
//                       className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <label
//                       htmlFor="checkout-email"
//                       className="block text-xs text-slate-600 font-medium mb-1.5"
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       id="checkout-email"
//                       type="email"
//                       required
//                       value={form.email}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, email: e.target.value }))
//                       }
//                       placeholder="alex@company.com"
//                       className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="checkout-card"
//                     className="block text-xs text-slate-600 font-medium mb-1.5"
//                   >
//                     Card Number
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="checkout-card"
//                       type="text"
//                       required
//                       value={form.card}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, card: e.target.value }))
//                       }
//                       placeholder="4242 4242 4242 4242"
//                       maxLength={19}
//                       className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                     <CreditCard
//                       size={16}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label
//                       htmlFor="checkout-expiry"
//                       className="block text-xs text-slate-600 font-medium mb-1.5"
//                     >
//                       Expiry (MM/YY)
//                     </label>
//                     <input
//                       id="checkout-expiry"
//                       type="text"
//                       required
//                       value={form.expiry}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, expiry: e.target.value }))
//                       }
//                       placeholder="MM/YY"
//                       maxLength={5}
//                       className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="checkout-cvv"
//                       className="block text-xs text-slate-600 font-medium mb-1.5"
//                     >
//                       CVV
//                     </label>
//                     <input
//                       id="checkout-cvv"
//                       type="text"
//                       required
//                       value={form.cvv}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, cvv: e.target.value }))
//                       }
//                       placeholder="123"
//                       maxLength={4}
//                       className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                   </div>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   type="submit"
//                   disabled={loading}
//                   className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer shadow-lg hover:shadow-primary/25"
//                 >
//                   {loading ? (
//                     <>
//                       <svg
//                         className="animate-spin size-4"
//                         viewBox="0 0 24 24"
//                         fill="none"
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
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <Lock size={15} aria-hidden="true" />
//                       Pay ${report.price} - Instant Access
//                     </>
//                   )}
//                 </motion.button>

//                 <div className="flex items-center justify-center gap-4 pt-1">
//                   {[Shield, Lock].map((Icon, i) => (
//                     <span
//                       key={i}
//                       className="flex items-center gap-1 text-xs text-slate-500"
//                     >
//                       <Icon size={11} aria-hidden="true" />
//                       {i === 0 ? "SSL Secured" : "Secure payment"}
//                     </span>
//                   ))}
//                   <span className="text-xs text-slate-600">· Demo only</span>
//                 </div>
//               </form>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function ReportDetail({
//   imgPath,
//   title,
//   subTitle,
//   reportPages,
//   publishDate,
//   reportId,
//   reportCovers,
//   reportSupports,
//   marketSize,
//   cagrData,
//   coverageDurationYears,
//   tableContent,
//   seoKeywords,
//   subIndustry,
//   pdfPath,
// }) {
//   const { slug } = useParams();
//   const report = getReportBySlug(slug);
//   const { isAuthenticated, hasReport, purchaseReport } = useAuth();
//   const { addToCart, isInCart } = useCart();
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [cartAdded, setCartAdded] = useState(false);
//   const [activeTab, setActiveTab] = useState("scope");
//   const router = useRouter();

//   const industryData = report
//     ? industries.find((i) => i.slug === report.industry)
//     : null;
//   const industryColor = industryData?.color || "#4F46E5";

//   useEffect(() => {
//     if (report) {
//       document.title = `${title} | Integer Market Research Report`;
//     }
//   }, [report]);

//   if (!report) {
//     return (
//       <div className="min-h-screen bg-surface flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-slate-900 mb-2">
//             Report not found
//           </h1>
//           <Link
//             href="/report"
//             className="text-primary font-semibold hover:text-primary-dark"
//           >
//             Browse all reports
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const owned = hasReport(report.id);
//   const related = reports
//     .filter((r) => r.industry === report.industry && r.id !== report.id)
//     .slice(0, 3);

//   const handleBuy = () => {
//     if (!isAuthenticated) {
//       router.push("/signup");
//       return;
//     }
//     setShowCheckout(true);
//   };

// const handleAddToCart = () => {
//   addToCart(report);
//   setCartAdded(true);
//   setTimeout(() => setCartAdded(false), 2000);
// };

// const handleBuyNow = () => {
//   addToCart(report);
//   router.push("/checkout");
// };

//   const handlePurchaseSuccess = () => purchaseReport(report.id);

//   const tabs = [
//     { id: "scope", label: "Scope & Coverage", icon: Eye },
//     { id: "contents", label: "Table of Content", icon: LayoutList },
//     { id: "sample", label: "Sample Preview", icon: BookOpen },
//     { id: "methodology", label: "Methodology", icon: FlaskConical },
//   ];

//   return (
//     <div className="min-h-screen bg-surface">
//       {/* ── Breadcrumb + Header ──────────────────────────────── */}
//       <div className="bg-white border-b border-slate-100 pt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           {/* Breadcrumb */}
//           <nav
//             className="flex items-center gap-2 text-xs text-slate-400 mb-6"
//             aria-label="Breadcrumb"
//           >
//             <Link href="/" className="hover:text-primary transition-colors">
//               Home
//             </Link>
//             <ChevronRight size={12} aria-hidden="true" />
//             <Link
//               href="/report"
//               className="hover:text-primary transition-colors"
//             >
//               Reports
//             </Link>
//             <ChevronRight size={12} aria-hidden="true" />
//             <Link
//               href={`/industry/${report.industry}`}
//               className="hover:text-primary transition-colors"
//             >
//               {report.industryName}
//             </Link>
//             <ChevronRight size={12} aria-hidden="true" />
//             <span className="text-slate-600 truncate max-w-xs">
//               {report.shortTitle}
//             </span>
//           </nav>

//           <div className="flex flex-col lg:flex-row gap-8 items-start pb-8">
//             {/* Report cover image placeholder */}
//             <div
//               className="w-44 h-44 rounded-2xl flex-shrink-0 overflow-hidden border border-slate-100 shadow-sm"
//               style={{
//                 background: `linear-gradient(135deg, ${industryColor}22 0%, ${industryColor}08 100%)`,
//               }}
//               aria-label="Report cover image placeholder - add product photo here"
//             >
//               <div className="w-full h-full flex flex-col items-center justify-center gap-2">
//                 {imgPath && <img src={imgPath} alt="image" className="" />}
//                 {/* <div
//                   className="size-14 rounded-xl flex items-center justify-center"
//                   style={{ backgroundColor: `${industryColor}15` }}
//                 >
//                   <ImageIcon size={24} style={{ color: industryColor }} className="opacity-50" aria-hidden="true" />
//                 </div>
//                 <span className="text-xs text-slate-300 font-medium text-center px-2">Report Cover Photo</span> */}
//               </div>
//             </div>

//             {/* Report info */}
//             <div className="flex-1 min-w-0">
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <Badge variant="primary">{subIndustry}</Badge>
//                 <Badge variant="primary">Market Intelligence</Badge>
//                 {/* <Link href={`/industry/${report.industry}`}>
//                   <Badge variant="surface">{report.industryName}</Badge>
//                 </Link>
//                 <Link href={`/report-type/${report.reportType}`}>
//                   <Badge variant="primary">{report.reportTypeName}</Badge>
//                 </Link>
//                 {report.useCases.slice(0, 2).map((uc) => (
//                   <Badge key={uc} variant="navy">
//                     {uc
//                       .split("-")
//                       .map((w) => w[0].toUpperCase() + w.slice(1))
//                       .join(" ")}
//                   </Badge>
//                 ))} */}
//               </div>

//               <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-3">
//                 {title || ""}
//               </h1>
//               <p className="text-slate-500 text-base leading-relaxed mb-5 max-w-2xl">
//                 {subTitle || ""}
//               </p>

//               <div className="flex flex-wrap gap-6 text-sm text-slate-500">
//                 <span className="flex items-center gap-2">
//                   <FileText
//                     size={14}
//                     className="text-primary"
//                     aria-hidden="true"
//                   />
//                   {reportPages || ""} pages · PDF
//                 </span>
//                 <span className="flex items-center gap-2">
//                   <Calendar
//                     size={14}
//                     className="text-primary"
//                     aria-hidden="true"
//                   />
//                   Published {publishDate || ""}
//                 </span>
//                 <span className="flex items-center gap-2">
//                   <BadgeCheck
//                     size={14}
//                     className="text-primary"
//                     aria-hidden="true"
//                   />
//                   ID: {reportId}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Tabs ────────────────────────────────────────────── */}
//       <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className="flex gap-0 overflow-x-auto"
//             role="tablist"
//             aria-label="Report sections"
//           >
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 role="tab"
//                 aria-selected={activeTab === tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors duration-200 cursor-pointer ${
//                   activeTab === tab.id
//                     ? "border-primary text-primary bg-primary/3"
//                     : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-200"
//                 }`}
//               >
//                 <tab.icon size={15} aria-hidden="true" />
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Main content + Sidebar ───────────────────────────── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           {/* ── Tab content ── */}
//           <div className="lg:col-span-2">
//             <AnimatePresence mode="wait">
//               {/* SCOPE & COVERAGE */}
//               {activeTab === "scope" && (
//                 <motion.div
//                   key="scope"
//                   role="tabpanel"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   aria-label="Scope and coverage"
//                 >
//                   {/* About this report */}
//                   {/* <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
//                     <h2 className="text-lg font-bold text-slate-900 mb-3">About This Report</h2>
//                     <p className="text-slate-600 leading-relaxed">{report.longDescription}</p>
//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {report.tags.map(tag => (
//                         <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
//                       ))}
//                     </div>
//                   </div> */}

//                   {/* Key metrics */}
//                   <div className="grid grid-cols-3 gap-4 mb-6">
//                     {[
//                       {
//                         label: "Market Size",
//                         value: marketSize != null ? `$${marketSize}` : "",
//                       },
//                       {
//                         label: "CAGR",
//                         value: cagrData != null ? `${cagrData}%` : "",
//                       },
//                       { label: "Forecast Year", value: coverageDurationYears },
//                     ]?.map((m) => (
//                       <div
//                         key={m.label}
//                         className="bg-white rounded-2xl border border-slate-100 p-5 text-center"
//                       >
//                         <div className="text-2xl font-black text-primary mb-1">
//                           {m?.value ?? "--"}
//                         </div>
//                         <div className="text-xs text-slate-500">{m?.label}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* What this report covers */}
//                   <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
//                     <h3 className="text-base font-bold text-slate-900 mb-5">
//                       What this report covers
//                     </h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                       {reportCovers?.map((item) => (
//                         <div key={item} className="flex items-center gap-2.5">
//                           <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                             <CheckCircle
//                               size={12}
//                               className="text-primary"
//                               aria-hidden="true"
//                             />
//                           </div>
//                           <span className="text-sm text-slate-700">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* What decisions this report supports */}
//                   <div className="bg-white rounded-2xl border border-slate-100 p-6">
//                     <h3 className="text-base font-bold text-slate-900 mb-5">
//                       What decisions this report supports
//                     </h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {reportSupports?.map((item) => (
//                         <div key={item} className="flex items-center gap-2.5">
//                           <CheckCircle
//                             size={14}
//                             className="text-primary flex-shrink-0"
//                             aria-hidden="true"
//                           />
//                           <span className="text-sm text-slate-700">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
//                     <h2 className="text-lg font-bold text-slate-900 mb-3">
//                       Why Our Reports Deliver Strategic Advantage
//                     </h2>
//                     <p className="text-slate-600 leading-relaxed">
//                       Our reports are designed to go beyond surface-level data
//                       and provide structured, decision-ready intelligence. Each
//                       study is built to help businesses confidently evaluate
//                       opportunities, assess risks, and make informed strategic
//                       moves in competitive markets.
//                     </p>
//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {report.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               )}

//               {/* TABLE OF CONTENTS */}
//               {activeTab === "contents" && (
//                 <motion.div
//                   key="contents"
//                   role="tabpanel"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   aria-label="Table of contents"
//                 >
//                   <div className="bg-white rounded-2xl border border-slate-100 p-6">
//                     <TableContent tableContent={tableContent} />
//                     <KeyWords seoKeywords={seoKeywords} />
//                     {/* <div className="flex items-center justify-between mb-6">
//                       <h2 className="text-lg font-bold text-slate-900">Table of Contents</h2>
//                       <span className="text-xs text-slate-400">{report.tableOfContents.length} chapters · {report.pages} pages</span>
//                     </div>
//                     <ol className="space-y-1" role="list">
//                       {report.tableOfContents.map((item, i) => (
//                         <motion.li
//                           key={i}
//                           initial={{ opacity: 0, x: -8 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: i * 0.04 }}
//                           className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
//                         >
//                           <span className="text-xs font-mono text-slate-300 w-6 flex-shrink-0 text-right">{String(i + 1).padStart(2, '0')}</span>
//                           <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors flex-1">{item}</span>
//                           {i < 2 ? (
//                             <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full flex-shrink-0">Free preview</span>
//                           ) : (
//                             <Lock size={12} className="text-slate-300 flex-shrink-0" aria-hidden="true" />
//                           )}
//                         </motion.li>
//                       ))}
//                     </ol>
//                     <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
//                       <p className="text-xs text-slate-400">Purchase to access all {report.tableOfContents.length} chapters</p>
//                       <button
//                         onClick={handleBuy}
//                         className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer"
//                       >
//                         <ShoppingCart size={12} aria-hidden="true" />
//                         Buy full report
//                       </button>
//                     </div> */}
//                   </div>
//                 </motion.div>
//               )}

//               {/* SAMPLE PREVIEW */}
//               {activeTab === "sample" && (
//                 <motion.div
//                   key="sample"
//                   role="tabpanel"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   aria-label="Sample preview"
//                 >
//                   <div className="bg-white rounded-2xl border border-slate-100 p-6">
//                     <h2 className="text-lg font-bold text-slate-900 mb-2">
//                       Sample Preview
//                     </h2>
//                     <SamplePreview pdfUrl={pdfPath} />
//                     {/* <p className="text-sm text-slate-500 mb-6">Pages 1–2 available as free preview. Purchase for full access.</p> */}

//                     {/* Simulated PDF page previews */}
//                     {/* <div className="space-y-4"> */}
//                     {/* Page 1 - visible */}
//                     {/* <div className="border border-slate-200 rounded-xl overflow-hidden">
//                         <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between">
//                           <span className="text-xs font-medium text-slate-500">Page 1 - Executive Summary</span>
//                           <span className="text-xs text-primary font-semibold">Free preview</span>
//                         </div>
//                         <div className="p-6 space-y-3">
//                           <div className="h-4 bg-slate-200 rounded w-3/4" />
//                           <div className="h-3 bg-slate-100 rounded w-full" />
//                           <div className="h-3 bg-slate-100 rounded w-5/6" />
//                           <div className="h-3 bg-slate-100 rounded w-full" />
//                           <div className="h-3 bg-slate-100 rounded w-4/5" />
//                           <div className="mt-4 h-24 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/10 flex items-center justify-center">
//                             <div className="text-center">
//                               <div className="text-2xl font-black text-primary">{report.keyMetrics.marketSize}</div>
//                               <div className="text-xs text-slate-500 mt-1">Market size {report.keyMetrics.baseYear}</div>
//                             </div>
//                           </div>
//                           <div className="h-3 bg-slate-100 rounded w-full" />
//                           <div className="h-3 bg-slate-100 rounded w-3/4" />
//                         </div>
//                       </div> */}

//                     {/* Page 2 - partially visible */}
//                     {/* <div className="border border-slate-200 rounded-xl overflow-hidden">
//                         <div className="bg-slate-50 border-b border-slate-200 px-4 py-2">
//                           <span className="text-xs font-medium text-slate-500">Page 2 - Market Overview</span>
//                         </div>
//                         <div className="relative p-6 space-y-3 max-h-32 overflow-hidden">
//                           <div className="h-3 bg-slate-100 rounded w-full" />
//                           <div className="h-3 bg-slate-100 rounded w-5/6" />
//                           <div className="h-3 bg-slate-100 rounded w-full" /> */}
//                     {/* Blur overlay */}
//                     {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white" />
//                         </div>
//                       </div> */}

//                     {/* Locked pages */}
//                     {/* <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center">
//                         <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
//                           <Lock size={20} className="text-slate-400" aria-hidden="true" />
//                         </div>
//                         <h3 className="text-base font-semibold text-slate-700 mb-2">{report.pages - 2} more pages locked</h3>
//                         <p className="text-sm text-slate-500 mb-5">
//                           Purchase the full report to access all {report.pages} pages including detailed analysis, data tables, and strategic recommendations.
//                         </p>
//                         <button
//                           onClick={handleBuy}
//                           className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-md hover:shadow-primary/25"
//                         >
//                           <ShoppingCart size={15} aria-hidden="true" />
//                           Buy Full Report - ${report.price}
//                         </button>
//                         <p className="text-xs text-slate-400 mt-3">Instant PDF · One-time purchase · No subscription required</p> */}
//                     {/* </div> */}
//                     {/* </div> */}
//                   </div>
//                 </motion.div>
//               )}

//               {/* METHODOLOGY */}
//               {activeTab === "methodology" && (
//                 <motion.div
//                   key="methodology"
//                   role="tabpanel"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   aria-label="Research methodology"
//                 >
//                   <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
//                     <h2 className="text-lg font-bold text-slate-900 mb-2">
//                       Research Methodology
//                     </h2>
//                     <p className="text-sm text-slate-500 mb-7">
//                       Integer Market follows a rigorous, multi-stage research
//                       process that combines primary research with comprehensive
//                       secondary data to deliver verified, actionable
//                       intelligence.
//                     </p>

//                     <div className="space-y-5">
//                       {METHODOLOGY_CONTENT.steps.map((step, i) => (
//                         <motion.div
//                           key={step.title}
//                           initial={{ opacity: 0, x: -12 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: i * 0.08 }}
//                           className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-primary/15 hover:bg-slate-50 transition-colors"
//                         >
//                           <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//                             <span className="text-xs font-black text-primary">
//                               {String(i + 1).padStart(2, "0")}
//                             </span>
//                           </div>
//                           <div>
//                             <h3 className="text-sm font-semibold text-slate-800 mb-1.5">
//                               {step.title}
//                             </h3>
//                             <p className="text-sm text-slate-500 leading-relaxed">
//                               {step.desc}
//                             </p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Certifications / standards */}
//                   <div className="bg-white rounded-2xl border border-slate-100 p-6">
//                     <h3 className="text-sm font-bold text-slate-900 mb-4">
//                       Research Standards & Certifications
//                     </h3>
//                     <div className="grid grid-cols-2 gap-3">
//                       {METHODOLOGY_CONTENT.certifications.map((cert) => (
//                         <div
//                           key={cert}
//                           className="flex items-center gap-2.5 p-3 rounded-xl bg-primary/5 border border-primary/10"
//                         >
//                           <BadgeCheck
//                             size={15}
//                             className="text-primary flex-shrink-0"
//                             aria-hidden="true"
//                           />
//                           <span className="text-xs font-medium text-slate-700">
//                             {cert}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="mt-5 pt-5 border-t border-slate-100">
//                       <Link
//                         href="/research-methodology"
//                         className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
//                       >
//                         Read our full methodology{" "}
//                         <ChevronRight size={12} aria-hidden="true" />
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* ── RIGHT SIDEBAR ─────────────────────────────────── */}
//           <aside className="lg:sticky lg:top-32 space-y-4">
//             {/* Price + Buy card */}
//             <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
//               <div className="p-6">
//                 {/* Price */}
//                 <div className="mb-5">
//                   <div className="flex items-baseline gap-2">
//                     <span className="text-4xl font-black text-slate-900">
//                       $999
//                     </span>
//                     <span className="text-sm text-slate-400">USD</span>
//                   </div>
//                   <p className="text-xs text-slate-400 mt-0.5">
//                     Excluding applicable taxes
//                   </p>
//                 </div>

//                 {/* Report metadata */}
//                 <div className="space-y-2.5 mb-5 pb-5 border-b border-slate-100">
//                   {[
//                     { icon: BadgeCheck, label: "Report ID", value: reportId },
//                     {
//                       icon: FileText,
//                       label: "Pages",
//                       value: `${reportPages!=null?reportPages:""} pages`,
//                     },
//                     { icon: TrendingUp, label: "Format", value: "PDF" },
//                     {
//                       icon: Calendar,
//                       label: "Published",
//                       value: publishDate,
//                     },
//                   ].map(({ icon: Icon, label, value }) => (
//                     <div key={label} className="flex items-center gap-3">
//                       <div className="size-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                         <Icon
//                           size={12}
//                           className="text-primary"
//                           aria-hidden="true"
//                         />
//                       </div>
//                       <span className="text-xs text-slate-500 flex-1">
//                         {label}
//                       </span>
//                       <span className="text-xs font-semibold text-slate-700">
//                         {value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Buy or Download */}
//                 {owned ? (
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-2 text-sm text-primary font-medium justify-center py-1">
//                       <CheckCircle size={16} aria-hidden="true" />
//                       You own this report
//                     </div>
//                     <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-md">
//                       <Download size={16} aria-hidden="true" />
//                       Download PDF
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="space-y-3">

//                     <button
//                       onClick={handleAddToCart}
//                       className={`w-full flex items-center justify-center gap-2 py-3.5 font-bold rounded-xl transition-all shadow-lg cursor-pointer ${
//                         isInCart(report.slug) || cartAdded
//                           ? "bg-green-500 text-white hover:bg-green-600 shadow-green-200"
//                           : "bg-primary text-white hover:bg-primary-dark hover:shadow-primary/25"
//                       }`}
//                     >
//                       <ShoppingCart size={16} aria-hidden="true" />
//                       {isInCart(report.slug) || cartAdded
//                         ? "Added to Cart ✓"
//                         : "Add to Cart"}
//                     </button>
//                     <button
//                       onClick={handleBuyNow}
//                       className="w-full flex items-center justify-center gap-2 py-3.5 text-sm text-white font-bold bg-slate-800 hover:bg-slate-900 rounded-xl transition-colors cursor-pointer shadow-md"
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 )}

//                 {/* Trust micro-copy */}
//                 <div className="flex items-center justify-center gap-1 mt-3">
//                   <Lock
//                     size={10}
//                     className="text-slate-400"
//                     aria-hidden="true"
//                   />
//                   <span className="text-xs text-slate-400">
//                     Secure checkout · Instant PDF delivery
//                   </span>
//                 </div>
//               </div>

//               {/* Trust badges strip */}
//               <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
//                 <div className="flex items-center justify-around gap-2">
//                   {[
//                     { icon: Shield, text: "SSL Secured" },
//                     { icon: Zap, text: "Instant Access" },
//                     { icon: Star, text: "Expert Verified" },
//                   ].map(({ icon: Icon, text }) => (
//                     <div
//                       key={text}
//                       className="flex flex-col items-center gap-1 text-center"
//                     >
//                       <Icon
//                         size={14}
//                         className="text-slate-400"
//                         aria-hidden="true"
//                       />
//                       <span className="text-xs text-slate-400">{text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Customize Your Report card */}
//             <div className="bg-white rounded-2xl border border-slate-200 p-5">
//               <h3 className="text-sm font-bold text-slate-900 mb-2">
//                 Customize Your Report
//               </h3>
//               <p className="text-xs text-slate-500 leading-relaxed mb-4">
//                 Need specific geographies, custom forecast years, competitor
//                 profiles, or additional data cuts? Our analysts can tailor this
//                 report to your exact requirements.
//               </p>
//               <button
//                 className="w-full flex items-center justify-center gap-2 py-2.5 border border-primary/30 text-primary text-sm font-semibold rounded-xl hover:bg-primary/5 hover:border-primary/60 transition-colors cursor-pointer"
//                 onClick={() => router.push("/contact")}
//               >
//                 <Phone size={14} aria-hidden="true" />
//                 Request Customization
//               </button>
//             </div>

//             {/* Related reports
//             {related.length > 0 && (
//               <div>
//                 <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
//                   Related Reports
//                 </h3>
//                 <div className="space-y-3">
//                   {related.map((r) => (
//                     <Link
//                       key={r.id}
//                       href={`/report-name/${r.slug}`}
//                       className="block p-3.5 bg-white rounded-xl border border-slate-100 hover:border-primary/25 hover:shadow-md transition-all group"
//                     >
//                       <div className="text-xs text-primary font-medium mb-1">
//                         {r.industryName}
//                       </div>
//                       <div className="text-xs font-semibold text-slate-700 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2">
//                         {r.shortTitle}
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-slate-400">
//                           {r.keyMetrics.marketSize} · {r.keyMetrics.cagr} CAGR
//                         </span>
//                         <span className="text-xs font-bold text-slate-900">
//                           ${r.price}
//                         </span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )} */}
//           </aside>
//         </div>
//       </div>

//       {/* Checkout modal */}
//       <AnimatePresence>
//         {showCheckout && (
//           <CheckoutModal
//             report={report}
//             onClose={() => setShowCheckout(false)}
//             onSuccess={handlePurchaseSuccess}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";
import { useState, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Calendar,
  Globe,
  CheckCircle,
  ShoppingCart,
  Download,
  X,
  CreditCard,
  Lock,
  Shield,
  Star,
  ChevronRight,
  Eye,
  BookOpen,
  FlaskConical,
  LayoutList,
  BadgeCheck,
  Phone,
  TrendingUp,
  Image as ImageIcon,
  Zap,
  ChevronDown,
} from "lucide-react";
import Badge from "../components/ui/Badge";
import ScrollReveal from "../components/ui/ScrollReveal";
import ReportCard from "../components/ui/ReportCard";
import { getReportBySlug, reports } from "../data/reports";
import { industries } from "../data/industries";
import { useAuth } from "../context/AuthContext";
import { staggerContainer, fadeInUp } from "../lib/variants";
import TableContent from "./TableContent";
import KeyWords from "./KeyWords";
import SamplePreview from "./SamplePreview";

// const SCOPE_COVERAGE = [
//   "Market & Demand Analysis",
//   "Pricing & Economics",
//   "Geography & Trade",
//   "Competitive Landscape",
//   "Trade & Supply Chain",
//   "Strategic Insights",
//   "Innovation & Trends",
//   "Regulation & Compliance",
//   "Consumer Behavior",
// ];

// const DECISIONS_SUPPORTED = [
//   "Supply Chain & Sourcing",
//   "Pricing & Commercial Strategy",
//   "Market Entry & Expansion",
//   "Competitive Strategy",
//   "Product Development",
//   "Investor Presentations",
//   "M&A & Partnerships",
//   "Risk Assessment",
// ];

const METHODOLOGY_CONTENT = {
  steps: [
    {
      title: "Secondary Research",
      desc: "We begin with comprehensive desk research using government trade databases (UN Comtrade, Eurostat), regulatory filings, scientific publications, company annual reports, and industry association data.",
    },
    {
      title: "Primary Research",
      desc: "Our analysts conduct structured interviews with manufacturers, exporters, importers, formulators, and end-users to validate and enrich secondary findings with first-hand market intelligence.",
    },
    {
      title: "Data Triangulation",
      desc: "All data points are cross-validated using at least three independent sources. Discrepancies are investigated and resolved through additional primary outreach before inclusion.",
    },
    {
      title: "Expert Review",
      desc: "Each report undergoes peer review by a senior analyst and an external subject-matter expert to ensure technical accuracy, completeness, and actionable depth.",
    },
  ],
  certifications: [
    "ISO-Aligned Research Process",
    "Primary Data Verified",
    "Expert Peer Reviewed",
    "Updated Annually",
  ],
};

// function CheckoutModal({ report, onClose, onSuccess }) {
//   const [step, setStep] = useState("details");
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     card: "",
//     expiry: "",
//     cvv: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handlePay = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1800));
//     setLoading(false);
//     setStep("success");
//     onSuccess();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
//       onClick={onClose}
//       role="dialog"
//       aria-modal="true"
//       aria-label="Purchase report"
//     >
//       <motion.div
//         initial={{ scale: 0.94, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.94, opacity: 0 }}
//         transition={{ duration: 0.2 }}
//         className="bg-white border border-slate-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {step === "success" ? (
//           <div className="p-8 text-center">
//             <div className="size-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-5">
//               <CheckCircle
//                 size={28}
//                 className="text-primary"
//                 aria-hidden="true"
//               />
//             </div>
//             <h2 className="text-xl font-bold text-slate-900 mb-2">
//               Purchase Complete!
//             </h2>
//             <p className="text-slate-500 text-sm mb-6">
//               Your report has been added to your dashboard. Download it anytime.
//             </p>
//             <div className="space-y-3">
//               <button
//                 onClick={onClose}
//                 className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer"
//               >
//                 <Download size={16} aria-hidden="true" />
//                 Download Report (PDF)
//               </button>
//               <button
//                 onClick={onClose}
//                 className="w-full px-6 py-3 text-slate-400 text-sm hover:text-slate-700 transition-colors cursor-pointer"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
//               <h2 className="text-base font-semibold text-slate-900">
//                 Secure Checkout
//               </h2>
//               <button
//                 onClick={onClose}
//                 aria-label="Close checkout"
//                 className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
//               >
//                 <X size={20} aria-hidden="true" />
//               </button>
//             </div>

//             <div className="p-6">
//               <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 mb-6">
//                 <p className="text-xs text-slate-500 mb-1">
//                   {report.industryName}
//                 </p>
//                 <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
//                   {report.title}
//                 </p>
//                 <div className="flex items-center justify-between mt-3">
//                   <span className="text-xs text-slate-500">
//                     {report.pages} pages · PDF · Instant delivery
//                   </span>
//                   <span className="text-xl font-bold text-primary">
//                     ${report.price}
//                   </span>
//                 </div>
//               </div>

//               <form onSubmit={handlePay} className="space-y-4">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="col-span-2">
//                     <label
//                       htmlFor="checkout-name"
//                       className="block text-xs text-slate-600 font-medium mb-1.5"
//                     >
//                       Full Name
//                     </label>
//                     <input
//                       id="checkout-name"
//                       type="text"
//                       required
//                       value={form.name}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, name: e.target.value }))
//                       }
//                       placeholder="Alex Johnson"
//                       className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <label
//                       htmlFor="checkout-email"
//                       className="block text-xs text-slate-600 font-medium mb-1.5"
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       id="checkout-email"
//                       type="email"
//                       required
//                       value={form.email}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, email: e.target.value }))
//                       }
//                       placeholder="alex@company.com"
//                       className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="checkout-card"
//                     className="block text-xs text-slate-600 font-medium mb-1.5"
//                   >
//                     Card Number
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="checkout-card"
//                       type="text"
//                       required
//                       value={form.card}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, card: e.target.value }))
//                       }
//                       placeholder="4242 4242 4242 4242"
//                       maxLength={19}
//                       className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                     <CreditCard
//                       size={16}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label
//                       htmlFor="checkout-expiry"
//                       className="block text-xs text-slate-600 font-medium mb-1.5"
//                     >
//                       Expiry (MM/YY)
//                     </label>
//                     <input
//                       id="checkout-expiry"
//                       type="text"
//                       required
//                       value={form.expiry}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, expiry: e.target.value }))
//                       }
//                       placeholder="MM/YY"
//                       maxLength={5}
//                       className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="checkout-cvv"
//                       className="block text-xs text-slate-600 font-medium mb-1.5"
//                     >
//                       CVV
//                     </label>
//                     <input
//                       id="checkout-cvv"
//                       type="text"
//                       required
//                       value={form.cvv}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, cvv: e.target.value }))
//                       }
//                       placeholder="123"
//                       maxLength={4}
//                       className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
//                     />
//                   </div>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   type="submit"
//                   disabled={loading}
//                   className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer shadow-lg hover:shadow-primary/25"
//                 >
//                   {loading ? (
//                     <>
//                       <svg
//                         className="animate-spin size-4"
//                         viewBox="0 0 24 24"
//                         fill="none"
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
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <Lock size={15} aria-hidden="true" />
//                       Pay ${report.price} - Instant Access
//                     </>
//                   )}
//                 </motion.button>

//                 <div className="flex items-center justify-center gap-4 pt-1">
//                   {[Shield, Lock].map((Icon, i) => (
//                     <span
//                       key={i}
//                       className="flex items-center gap-1 text-xs text-slate-500"
//                     >
//                       <Icon size={11} aria-hidden="true" />
//                       {i === 0 ? "SSL Secured" : "Secure payment"}
//                     </span>
//                   ))}
//                   <span className="text-xs text-slate-600">· Demo only</span>
//                 </div>
//               </form>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

export default function ReportDetail({
  amount,
  imgPath,
  title,
  subTitle,
  reportPages,
  publishDate,
  reportId,
  reportCovers,
  reportSupports,
  marketSize,
  cagrData,
  coverageDurationYears,
  tableContent,
  faqs,
  seoKeywords,
  subIndustry,
  pdfPath,
  seoSlug,
  primaryTopic,
}) {
  const { slug } = useParams();
  const report = getReportBySlug(slug);
  const { isAuthenticated, hasReport, purchaseReport } = useAuth();
  const { addToCart, isInCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("scope");

  const [openFaq, setOpenFaq] = useState(0);

  const router = useRouter();

  const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const industryData = report
  //   ? industries.find((i) => i.slug === report.industry)
  //   : null;
  // const industryColor = industryData?.color || "#4F46E5";

  // useEffect(() => {
  //   if (report) {
  //     document.title = `${title} | Integer Market Research Report`;
  //   }
  // }, [report]);

  // if (!report) {
  //   return (
  //     <div className="min-h-screen bg-surface flex items-center justify-center">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold text-slate-900 mb-2">
  //           Report not found
  //         </h1>
  //         <Link
  //           href="/report"
  //           className="text-primary font-semibold hover:text-primary-dark"
  //         >
  //           Browse all reports
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  // const owned = hasReport(report.id);
  // const related = reports
  //   .filter((r) => r.industry === report.industry && r.id !== report.id)
  //   .slice(0, 3);

  // const handleBuy = () => {
  //   if (!isAuthenticated) {
  //     router.push("/signup");
  //     return;
  //   }
  //   setShowCheckout(true);
  // };

  // const handleAddToCart = () => {
  //   if (!seoSlug) return;
  //   const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

  //   if (!token) {
  //     router.push("/login");
  //     return;
  //   }
  //   addToCart(seoSlug);
  //   setCartAdded(true);
  //   setTimeout(() => setCartAdded(false), 2000);
  // };

  const handleAddToCart = () => {
    if (!seoSlug) return;

    const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

    // if (!token) {
    //   const currentPage =
    //     pathname +
    //     (searchParams.toString() ? `?${searchParams.toString()}` : "");

    //   router.push(`/login?redirect=${encodeURIComponent(currentPage)}`);
    //   return;
    // }

    if (!token) {
      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    addToCart(seoSlug);
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2000);
  };

  // const handleBuyNow = () => {
  //   // addToCart(report);
  //   alert("checkout");
  //   router.push("/checkout");
  // };

  // const handleBuyNow = (slug) => {
  //   if (!slug) return;

  //   const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");
  //   if (!token) {
  //     router.push("/login");
  //     return;
  //   }
  //   router.push(`/checkout?reportId=${slug}`);
  // };

  const handleBuyNow = (slug) => {
    if (!slug) return;

    const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

    if (!token) {
      const redirect = `/checkout?reportId=${slug}`;
      router.push(`/login?redirect=${encodeURIComponent(redirect)}`);
      return;
    }

    router.push(`/checkout?reportId=${slug}`);
  };

  // const handlePurchaseSuccess = () => purchaseReport(report.id);

  const tabs = [
    { id: "scope", label: "Scope & Coverage", icon: Eye },
    { id: "contents", label: "Table of Content", icon: LayoutList },
    { id: "sample", label: "Sample Preview", icon: BookOpen },
    { id: "methodology", label: "Methodology", icon: FlaskConical },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Breadcrumb + Header ──────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Breadcrumb */}

          <nav
            className="flex items-center gap-2 text-xs text-slate-400 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={12} aria-hidden="true" />
            <Link
              href="/report"
              className="hover:text-primary transition-colors"
            >
              Reports
            </Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-slate-600 truncate max-w-xs">
              {primaryTopic}
            </span>
            {/* <ChevronRight size={12} aria-hidden="true" />
            <span className="text-slate-600 truncate max-w-xs"> */}
            {/* {report.shortTitle} */}
            {/* </span> */}
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 items-start pb-8">
            {/* Report cover image placeholder */}
            <div
              className="w-44 h-44 rounded-2xl flex-shrink-0 overflow-hidden border border-slate-100 shadow-sm"
              aria-label="Report cover image placeholder - add product photo here"
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                {imgPath && (
                  <img
                    src={imgPath}
                    alt="image"
                    className="h-full w-full"
                    loading="lazy"
                  />
                )}
                {/* <div
                  className="size-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${industryColor}15` }}
                >
                  <ImageIcon size={24} style={{ color: industryColor }} className="opacity-50" aria-hidden="true" />
                </div>
                <span className="text-xs text-slate-300 font-medium text-center px-2">Report Cover Photo</span> */}
              </div>
            </div>

            {/* Report info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary">{subIndustry}</Badge>
                <Badge variant="primary">Market Intelligence</Badge>
                {/* <Link href={`/industry/${report.industry}`}>
                  <Badge variant="surface">{report.industryName}</Badge>
                </Link>
                <Link href={`/report-type/${report.reportType}`}>
                  <Badge variant="primary">{report.reportTypeName}</Badge>
                </Link>
                {report.useCases.slice(0, 2).map((uc) => (
                  <Badge key={uc} variant="navy">
                    {uc
                      .split("-")
                      .map((w) => w[0].toUpperCase() + w.slice(1))
                      .join(" ")}
                  </Badge>
                ))} */}
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-3">
                {title || ""}
              </h1>
              <p className="text-slate-500 text-base leading-relaxed mb-5 max-w-2xl">
                {subTitle || ""}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <FileText
                    size={14}
                    className="text-primary"
                    aria-hidden="true"
                  />
                  {reportPages || ""} pages · PDF
                </span>
                <span className="flex items-center gap-2">
                  <Calendar
                    size={14}
                    className="text-primary"
                    aria-hidden="true"
                  />
                  Published {publishDate || ""}
                </span>
                <span className="flex items-center gap-2">
                  <BadgeCheck
                    size={14}
                    className="text-primary"
                    aria-hidden="true"
                  />
                  ID: {reportId}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex gap-0 overflow-x-auto"
            role="tablist"
            aria-label="Report sections"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "border-primary text-primary bg-primary/3"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-200"
                }`}
              >
                <tab.icon size={15} aria-hidden="true" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content + Sidebar ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* ── Tab content ── */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* SCOPE & COVERAGE */}
              {activeTab === "scope" && (
                <motion.div
                  key="scope"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Scope and coverage"
                >
                  {/* About this report */}
                  {/* <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3">About This Report</h2>
                    <p className="text-slate-600 leading-relaxed">{report.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {report.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </div> */}

                  {/* Key metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      {
                        label: "Market Size",
                        value: marketSize != null ? `$${marketSize}` : "",
                      },
                      {
                        label: "CAGR",
                        value: cagrData != null ? `${cagrData}%` : "",
                      },
                      { label: "Forecast Year", value: coverageDurationYears },
                    ]?.map((m) => (
                      <div
                        key={m.label}
                        className="bg-white rounded-2xl border border-slate-100 p-5 text-center"
                      >
                        <div className="text-2xl font-black text-primary mb-1">
                          {m?.value ?? "--"}
                        </div>
                        <div className="text-xs text-slate-500">{m?.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* What this report covers */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
                    <h3 className="text-base font-bold text-slate-900 mb-5">
                      What this report covers
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {reportCovers?.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle
                              size={12}
                              className="text-primary"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What decisions this report supports */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
                    <h3 className="text-base font-bold text-slate-900 mb-5">
                      What decisions this report supports
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {reportSupports?.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle
                            size={14}
                            className="text-primary flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3">
                      Why Our Reports Deliver Strategic Advantage
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      Our reports are designed to go beyond surface-level data
                      and provide structured, decision-ready intelligence. Each
                      study is built to help businesses confidently evaluate
                      opportunities, assess risks, and make informed strategic
                      moves in competitive markets.
                    </p>
                  </div> */}

                  {/* FAQ */}
                  {/* {faqs?.length > 0 && (
                    <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-6 mb-6">
                      <div className="mb-5 sm:mb-6">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                          Frequently Asked Questions
                        </h2>
                      </div>

                      <div className="space-y-3">
                        {faqs.map((faq, index) => {
                          const isOpen = openFaq === index;

                          return (
                            <div
                              key={index}
                              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                isOpen
                                  ? "border-primary"
                                  : "border-slate-200 hover:border-primary/40"
                              }`}
                            >
                              <button
                                onClick={() =>
                                  setOpenFaq(isOpen ? null : index)
                                }
                                className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-4 text-left cursor-pointer"
                              >
                                <span className="flex-1 text-sm sm:text-base font-semibold text-slate-800 leading-6">
                                  {faq.question}
                                </span>

                                <ChevronDown
                                  size={18}
                                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                              >
                                <div className="overflow-hidden">
                                  <div className="border-t border-slate-100 px-4 sm:px-5 py-4 text-sm text-slate-600 leading-7">
                                    {faq.answer}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )} */}

                  
                </motion.div>
              )}

              {/* TABLE OF CONTENTS */}
              {activeTab === "contents" && (
                <motion.div
                  key="contents"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Table of contents"
                >
                  <div className="bg-white rounded-2xl border border-slate-100 p-6">
                    <TableContent tableContent={tableContent} />
                    <KeyWords seoKeywords={seoKeywords} />
                    {/* <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-bold text-slate-900">Table of Contents</h2>
                      <span className="text-xs text-slate-400">{report.tableOfContents.length} chapters · {report.pages} pages</span>
                    </div>
                    <ol className="space-y-1" role="list">
                      {report.tableOfContents.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                        >
                          <span className="text-xs font-mono text-slate-300 w-6 flex-shrink-0 text-right">{String(i + 1).padStart(2, '0')}</span>
                          <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors flex-1">{item}</span>
                          {i < 2 ? (
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full flex-shrink-0">Free preview</span>
                          ) : (
                            <Lock size={12} className="text-slate-300 flex-shrink-0" aria-hidden="true" />
                          )}
                        </motion.li>
                      ))}
                    </ol>
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <p className="text-xs text-slate-400">Purchase to access all {report.tableOfContents.length} chapters</p>
                      <button
                        onClick={handleBuy}
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer"
                      >
                        <ShoppingCart size={12} aria-hidden="true" />
                        Buy full report
                      </button>
                    </div> */}
                  </div>
                </motion.div>
              )}

              {/* SAMPLE PREVIEW */}
              {activeTab === "sample" && (
                <motion.div
                  key="sample"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Sample preview"
                >
                  <div className="bg-white rounded-2xl border border-slate-100 p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-2">
                      Sample Preview
                    </h2>
                    <SamplePreview pdfUrl={pdfPath} />
                    {/* <p className="text-sm text-slate-500 mb-6">Pages 1–2 available as free preview. Purchase for full access.</p> */}

                    {/* Simulated PDF page previews */}
                    {/* <div className="space-y-4"> */}
                    {/* Page 1 - visible */}
                    {/* <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-500">Page 1 - Executive Summary</span>
                          <span className="text-xs text-primary font-semibold">Free preview</span>
                        </div>
                        <div className="p-6 space-y-3">
                          <div className="h-4 bg-slate-200 rounded w-3/4" />
                          <div className="h-3 bg-slate-100 rounded w-full" />
                          <div className="h-3 bg-slate-100 rounded w-5/6" />
                          <div className="h-3 bg-slate-100 rounded w-full" />
                          <div className="h-3 bg-slate-100 rounded w-4/5" />
                          <div className="mt-4 h-24 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/10 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl font-black text-primary">{report.keyMetrics.marketSize}</div>
                              <div className="text-xs text-slate-500 mt-1">Market size {report.keyMetrics.baseYear}</div>
                            </div>
                          </div>
                          <div className="h-3 bg-slate-100 rounded w-full" />
                          <div className="h-3 bg-slate-100 rounded w-3/4" />
                        </div>
                      </div> */}

                    {/* Page 2 - partially visible */}
                    {/* <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2">
                          <span className="text-xs font-medium text-slate-500">Page 2 - Market Overview</span>
                        </div>
                        <div className="relative p-6 space-y-3 max-h-32 overflow-hidden">
                          <div className="h-3 bg-slate-100 rounded w-full" />
                          <div className="h-3 bg-slate-100 rounded w-5/6" />
                          <div className="h-3 bg-slate-100 rounded w-full" /> */}
                    {/* Blur overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white" />
                        </div>
                      </div> */}

                    {/* Locked pages */}
                    {/* <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center">
                        <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                          <Lock size={20} className="text-slate-400" aria-hidden="true" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-700 mb-2">{report.pages - 2} more pages locked</h3>
                        <p className="text-sm text-slate-500 mb-5">
                          Purchase the full report to access all {report.pages} pages including detailed analysis, data tables, and strategic recommendations.
                        </p>
                        <button
                          onClick={handleBuy}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-md hover:shadow-primary/25"
                        >
                          <ShoppingCart size={15} aria-hidden="true" />
                          Buy Full Report - ${report.price}
                        </button>
                        <p className="text-xs text-slate-400 mt-3">Instant PDF · One-time purchase · No subscription required</p> */}
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </motion.div>
              )}

              {/* METHODOLOGY */}
              {activeTab === "methodology" && (
                <motion.div
                  key="methodology"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Research methodology"
                >
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-2">
                      Research Methodology
                    </h2>
                    <p className="text-sm text-slate-500 mb-7">
                      Integer Market follows a rigorous, multi-stage research
                      process that combines primary research with comprehensive
                      secondary data to deliver verified, actionable
                      intelligence.
                    </p>

                    <div className="space-y-5">
                      {METHODOLOGY_CONTENT.steps.map((step, i) => (
                        <motion.div
                          key={step.title}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-primary/15 hover:bg-slate-50 transition-colors"
                        >
                          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-black text-primary">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-slate-800 mb-1.5">
                              {step.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications / standards */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6">
                    <h3 className="text-sm font-bold text-slate-900 mb-4">
                      Research Standards & Certifications
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {METHODOLOGY_CONTENT.certifications.map((cert) => (
                        <div
                          key={cert}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-primary/5 border border-primary/10"
                        >
                          <BadgeCheck
                            size={15}
                            className="text-primary flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-xs font-medium text-slate-700">
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <Link
                        href="/research-methodology"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                      >
                        Read our full methodology{" "}
                        <ChevronRight size={12} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT SIDEBAR ─────────────────────────────────── */}
          <aside className="lg:sticky lg:top-32 space-y-4">
            {/* Price + Buy card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6">
                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-slate-900">
                      ${amount}
                    </span>
                    <span className="text-sm text-slate-400">USD</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Excluding applicable taxes
                  </p>
                </div>

                {/* Report metadata */}
                <div className="space-y-2.5 mb-5 pb-5 border-b border-slate-100">
                  {[
                    { icon: BadgeCheck, label: "Report ID", value: reportId },
                    {
                      icon: FileText,
                      label: "Pages",
                      value: `${reportPages != null ? reportPages : ""} pages`,
                    },
                    { icon: TrendingUp, label: "Format", value: "PDF" },
                    {
                      icon: Calendar,
                      label: "Published",
                      value: publishDate,
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="size-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon
                          size={12}
                          className="text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-xs text-slate-500 flex-1">
                        {label}
                      </span>
                      <span className="text-xs font-semibold text-slate-700">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buy or Download */}
                {/* {owned ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium justify-center py-1">
                      <CheckCircle size={16} aria-hidden="true" />
                      You own this report
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-md">
                      <Download size={16} aria-hidden="true" />
                      Download PDF
                    </button>
                  </div>
                ) : ( */}

                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 font-bold rounded-xl transition-all shadow-lg cursor-pointer ${
                      isInCart(seoSlug) || cartAdded
                        ? "bg-green-500 text-white hover:bg-green-600 shadow-green-200"
                        : "bg-primary text-white hover:bg-primary-dark hover:shadow-primary/25"
                    }`}
                  >
                    <ShoppingCart size={16} aria-hidden="true" />
                    {isInCart(seoSlug) || cartAdded
                      ? "Added to Cart ✓"
                      : "Add to Cart"}
                  </button>
                  <button
                    onClick={() => handleBuyNow(seoSlug)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 text-sm text-white font-bold bg-slate-800 hover:bg-slate-900 rounded-xl transition-colors cursor-pointer shadow-md"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Trust micro-copy */}
                <div className="flex items-center justify-center gap-1 mt-3">
                  <Lock
                    size={10}
                    className="text-slate-400"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-slate-400">
                    Secure checkout · Instant PDF delivery
                  </span>
                </div>
              </div>

              {/* Trust badges strip */}
              <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex items-center justify-around gap-2">
                  {[
                    { icon: Shield, text: "SSL Secured" },
                    { icon: Zap, text: "Instant Access" },
                    { icon: Star, text: "Expert Verified" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex flex-col items-center gap-1 text-center"
                    >
                      <Icon
                        size={14}
                        className="text-slate-400"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-slate-400">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customize Your Report card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Customize Your Report
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Need specific geographies, custom forecast years, competitor
                profiles, or additional data cuts? Our analysts can tailor this
                report to your exact requirements.
              </p>
              <button
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-primary/30 text-primary text-sm font-semibold rounded-xl hover:bg-primary/5 hover:border-primary/60 transition-colors cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                <Phone size={14} aria-hidden="true" />
                Request Customization
              </button>
            </div>

            {/* Related reports
            {related.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Related Reports
                </h3>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/report-name/${r.slug}`}
                      className="block p-3.5 bg-white rounded-xl border border-slate-100 hover:border-primary/25 hover:shadow-md transition-all group"
                    >
                      <div className="text-xs text-primary font-medium mb-1">
                        {r.industryName}
                      </div>
                      <div className="text-xs font-semibold text-slate-700 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2">
                        {r.shortTitle}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          {r.keyMetrics.marketSize} · {r.keyMetrics.cagr} CAGR
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          ${r.price}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )} */}
          </aside>
        </div>
      </div>

      {/* Checkout modal */}
      <AnimatePresence>
        {showCheckout && (
          <CheckoutModal
            report={report}
            onClose={() => setShowCheckout(false)}
            onSuccess={handlePurchaseSuccess}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
