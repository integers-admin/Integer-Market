"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  FileText,
  ChevronRight,
  CheckCircle,
  Star,
  ShieldCheck,
  BookOpen,
  BarChart2,
  Award,
  Microscope,
  Building2,
  Lock,
  Image,
  X,
  Sparkles,
  ExternalLink,
  Zap,
  Eye,
  BarChart,
  ShoppingCart,
} from "lucide-react";
import * as Icons from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "../lib/variants";
import ScrollReveal from "../components/ui/ScrollReveal";
import ReportCard from "../components/ui/ReportCard";
import Badge from "../components/ui/Badge";
import { reports, featuredReports } from "../data/reports";
import { industries } from "../data/industries";
import { industryImages } from "../data/industryImages";
import { reportTypes } from "../data/reportTypes";
import { useCases } from "../data/useCases";
import axios from "axios";
import { useCart } from "../context/CartContext";
const bannerVideo = "/assets/banner.mp4";
const logoAadar = "/assets/client-logos/Aadar logo 1.svg";
const logoBeyond = "/assets/client-logos/Beyond Tablets Logo.svg";
const logoRochem = "/assets/client-logos/Rochem international.svg";
const logoSprinkles = "/assets/client-logos/Sprinkles & More Logo.svg";
const logoUmang = "/assets/client-logos/Umang-Logo-Registered-Color-SVG.svg";
const adityaPhoto = "/assets/about/aditya.png";
const mansiPhoto = "/assets/about/mansi.png";
const komalPhoto = "/assets/about/komal.png";
const keskarPhoto = "/assets/about/keskar.png";

function IconComponent({ name, size = 20 }) {
  const Icon = Icons[name];
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}

const stats = [
  { value: "100+", label: "Research Reports", icon: FileText },
  { value: "16", label: "Industries Covered", icon: TrendingUp },
  { value: "85+", label: "Countries Tracked", icon: Globe },
  { value: "20,000+", label: "Companies Tracked", icon: Users },
];

const popularSearches = [
  "Ashwagandha",
  "Vitamin D3",
  "Nutraceuticals",
  "Ibuprofen",
  "Magnesium",
  "NMN",
];

const analysts = [
  {
    name: "Dr. Aditya Dhadwe",
    role: "Consumer Health (MBBS)",
    photo: adityaPhoto,
  },
  { name: "Dr. Mansi", role: "Herbal & Botanicals", photo: mansiPhoto },
  { name: "Komal Kamble", role: "Nutraceuticals", photo: komalPhoto },
  { name: "Nagnath Keskar", role: "Pharmaceuticals", photo: keskarPhoto },
];

const steps = [
  {
    num: "01",
    title: "Search & Discover",
    body: "Browse 1,000+ reports by industry, type, or use case. Our taxonomy is built around real business decisions.",
  },
  {
    num: "02",
    title: "Purchase Securely",
    body: "Choose a single report or subscription plan. Instant access after checkout - no waiting, no back-and-forth.",
  },
  {
    num: "03",
    title: "Download & Act",
    body: "PDF delivered instantly to your dashboard. Cite it in board decks, share with your team, revisit anytime.",
  },
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Head of Strategy, NutriGen India",
    text: "Integer Market reports gave us the pricing benchmarks we needed to enter the EU vitamin market confidently. ROI positive within 3 months of purchase.",
    stars: 5,
    initials: "PS",
  },
  {
    name: "Marcus Brentfield",
    role: "VP Business Development, PharmaCo",
    text: "The competitive landscape reports are incredibly detailed. We use them for every board presentation - they're exactly what investors want to see.",
    stars: 5,
    initials: "MB",
  },
  {
    name: "Yuki Tanaka",
    role: "Market Research Director, HealthWave Japan",
    text: "Best market intelligence platform we've found for pharma ingredients. The trade data alone is worth the subscription price many times over.",
    stars: 5,
    initials: "YT",
  },
];

const clientLogos = [
  { name: "Aadar", src: logoAadar },
  { name: "Beyond Tablets", src: logoBeyond },
  { name: "Rochem International", src: logoRochem },
  { name: "Sprinkles & More", src: logoSprinkles },
  { name: "Umang", src: logoUmang },
];

const trustPillars = [
  {
    icon: Microscope,
    title: "Multi-Source Research",
    desc: "Data from 200+ verified sources - databases, filings, and reports. AI tools aggregate it; our experts validate every point and author the final intelligence.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Data Sources",
    desc: "Trade databases, customs filings, regulatory filings, and government publications - all cited and traceable.",
  },
  {
    icon: Award,
    title: "Expert Analyst Team",
    desc: "Our analysts hold advanced degrees in chemistry, pharmacology, business, and economics.",
  },
  {
    icon: Globe,
    title: "Truly Global Coverage",
    desc: "Primary data collection across 85+ countries with region-specific analysis and local market context.",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();
  const videoRef = useRef(null);
  const searchRef = useRef(null);

  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const { addToCart, isInCart } = useCart();

  const [industryData, setIndustryData] = useState([]);
  const [recentData, setRecentData] = useState([]);

  const [homeReportData, setHomeReportData] = useState([]);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    document.title =
      "Integer Market | Global Market Research Reports - Pharma, Nutraceuticals & Ingredients";
  }, []);

  // Slow down video to 0.5x
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Inline search results
  // Fetch search suggestions from API
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchSuggestions([]);
      setShowResults(false);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/reports/search/suggestions?q=${searchQuery}&limit=6`,
        );

        if (
          response?.status === 200 &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          setSearchSuggestions(response.data);
          setShowResults(true);
        } else {
          setSearchSuggestions([]);
          setShowResults(false);
        }
      } catch (error) {
        console.log("Search error:", error);
        setSearchSuggestions([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [searchQuery]);

  const handleSelectSuggestion = (item) => {
    setShowResults(false);
    setSearchQuery(item.title || "");

    if (!item.seo_slug) return;

    const slug = item.seo_slug.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    router.push(`/report-name/${slug}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(false);
    if (searchQuery.trim())
      router.push(`/report?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleQueryChange = (val) => {
    setSearchQuery(val);
  };

  const getIndustryData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/industries/report-count`);
      // console.log("getIndustryData response:", response);

      if (response?.status === 200) {
        setIndustryData(
          Array.isArray(response?.data?.data) ? response?.data?.data : [],
        );
      }

      // if (response?.status === 200) {

      //   return true;
      // }
    } catch (error) {
      console.log("Something went wrong:");

      // alert(
      //   error.response?.data?.detail || error.message || "Something went wrong",
      // );
    }
  };

  const getRecentData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${BASE_URL}/recent/reports`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("getRecentData response:", response);

      if (response?.status === 200) {
        setRecentData(
          Array.isArray(response?.data?.reports) ? response?.data?.reports : [],
        );
      }

      // if (response?.status === 200) {

      //   return true;
      // }
    } catch (error) {
      console.log("Something went wrong:");

      // alert(
      //   error.response?.data?.detail || error.message || "Something went wrong",
      // );
    }
  };

  const getHomeReportData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/home/reports`);
      // console.log("getHomeReportData response:", response);

      if (response?.status === 200) {
        setHomeReportData(Array.isArray(response?.data) ? response?.data : []);
      }
    } catch (error) {
      console.log("Something went wrong:");
    }
  };

  useEffect(() => {
    getIndustryData();
    getRecentData();
    getHomeReportData();
  }, []);

  const handleAddToCart = (report) => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    addToCart(report);
    // setCartAdded(true);
    // setTimeout(() => setCartAdded(false), 2000);
  };

  const handleDownload = async (slug) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${BASE_URL}/reports/${slug}/download`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200 && response.data?.download_url) {
        window.open(response.data.download_url, "_blank");
      }
    } catch (error) {
      console.log("Download error:", error);
    }
  };

  return (
    <>
      {/* ── HERO (Video Background) ───────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Video background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={bannerVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          onCanPlay={() => {
            if (videoRef.current) videoRef.current.playbackRate = 0.5;
          }}
        />
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          {/* True 2-column grid - left: text, right: cards - no overlap possible */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[520px]">
            {/* ── LEFT: hero content ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold tracking-wide uppercase">
                  <span
                    className="size-1.5 rounded-full bg-primary animate-pulse"
                    aria-hidden="true"
                  />
                  Market Research Reports & Global Industry Analysis
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5"
              >
                Market Research Reports{" "}
                <span className="text-primary">for Strategic Decisions</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base lg:text-lg text-white/75 leading-relaxed mb-8"
              >
                In-depth market research reports across consumer goods, health, wellness, ingredients & materials with market size, share, growth forecasts, and competitor insights.
              </motion.p>

              {/* Search with inline results */}
              <motion.div
                variants={fadeInUp}
                className="relative mb-5"
                ref={searchRef}
              >
                <form
                  onSubmit={handleSearch}
                  role="search"
                  aria-label="Search reports"
                >
                  <label htmlFor="hero-search" className="sr-only">
                    Search reports by keyword, product, or industry
                  </label>
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl p-2 shadow-xl">
                    <Search
                      size={18}
                      className="ml-3 text-slate-400 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <input
                      id="hero-search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleQueryChange(e.target.value)}
                      onFocus={() =>
                        searchQuery.trim().length >= 2 && setShowResults(true)
                      }
                      placeholder="Search reports, ingredients, markets..."
                      className="flex-1 bg-transparent text-slate-800 placeholder:text-slate-400 text-sm lg:text-base focus:outline-none py-1"
                      autoComplete="off"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("");
                          setShowResults(false);
                        }}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                        aria-label="Clear search"
                      >
                        <X size={15} aria-hidden="true" />
                      </button>
                    )}
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-200 flex-shrink-0 cursor-pointer"
                    >
                      Search
                    </button>
                  </div>
                </form>

                {/* Inline search results dropdown */}
                <AnimatePresence>
                  {showResults && searchSuggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-50"
                      role="listbox"
                      aria-label="Search results"
                    >
                      {searchSuggestions.map((item, i) => (
                        <div
                          key={item.report_id || i}
                          onClick={() => handleSelectSuggestion(item)}
                          onMouseDown={(e) => e.preventDefault()}
                          className={`cursor-pointer px-4 py-3 hover:bg-slate-50 transition-colors ${
                            i < searchSuggestions.length - 1
                              ? "border-b border-slate-100"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                              <FileText size={14} className="text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-800 line-clamp-2">
                                {item.title}
                              </p>
                              {item.industry_name && (
                                <p className="text-xs text-slate-400 mt-0.5">
                                  {item.industry_name}
                                </p>
                              )}
                            </div>
                            <ChevronRight
                              size={14}
                              className="text-slate-300 flex-shrink-0"
                            />
                          </div>
                        </div>
                      ))}
                      <Link
                        href={`/report?q=${encodeURIComponent(searchQuery)}`}
                        onClick={() => setShowResults(false)}
                        className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 transition-colors border-t border-slate-100"
                      >
                        View all results for &ldquo;{searchQuery}&rdquo;
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="text-xs text-white/60 font-medium">
                  Popular:
                </span>
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      handleQueryChange(term);
                    }}
                    className="px-3 py-1.5 rounded-full text-xs text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/25 hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </motion.div> */}
            </motion.div>

            {/* ── RIGHT: Floating report preview cards ── */}
            <div
              className="hidden lg:flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative w-80 h-[440px]">
                {homeReportData?.slice(0, 4).map((r, i) => {
                  const positions = [
                    { top: "0%", left: "0%", rotate: "-2deg" },
                    { top: "4%", left: "48%", rotate: "2deg" },
                    { top: "50%", left: "0%", rotate: "1deg" },
                    { top: "52%", left: "46%", rotate: "-1.5deg" },
                  ];
                  const p = positions[i];
                  return (
                    <motion.div
                      key={r.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.55 }}
                      style={{
                        position: "absolute",
                        top: p.top,
                        left: p.left,
                        width: "170px",
                      }}
                    >
                      <div
                        className="bg-white/15 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-4"
                        style={{ transform: `rotate(${p.rotate})` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-white font-bold truncate mr-1">
                            {r?.sub_industry}
                          </span>
                          <span className="size-1.5 rounded-full bg-white flex-shrink-0 animate-pulse" />
                        </div>
                        <p className="text-[11px] font-semibold text-white/95 leading-snug line-clamp-2 mb-2">
                          {r?.title}
                        </p>
                        <div className="border-t border-white/20 pt-2">
                          <div className="text-base font-black text-white">
                            ${r?.market_size}
                          </div>
                          <div className="flex items-center gap-1 mt-0.5">
                            <TrendingUp size={9} className="text-white" />
                            <span className="text-[10px] text-white/70">
                              {r?.cagr}% CAGR
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Floating stat pill */}
                {/* <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="absolute -bottom-2 right-0 bg-white/15 backdrop-blur-xl border border-white/30 shadow-lg rounded-xl px-4 py-2.5 flex items-center gap-3"
                >
                  <div className="size-7 rounded-full bg-primary/30 flex items-center justify-center">
                    <BarChart2 size={14} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Updated weekly
                    </div>
                    <div className="text-xs text-white/60">
                      Latest: May 2026
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR (below hero, clean white) ──────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex items-center gap-4 px-6 lg:px-10 py-7"
              >
                <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">
                    {value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── BROWSE BY INDUSTRY - Image cards ──────────────────── */}
      <section
        className="py-20 bg-surface"
        aria-labelledby="industries-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                16 Industries
              </span>
              <h2
                id="industries-heading"
                className="text-4xl font-bold text-slate-900"
              >
                Explore Our Extensive Industry Reports
              </h2>
              <p className="text-slate-500 mt-2 max-w-md">
                Find reports most relevant to your market - from pharmaceuticals
                to herbal extracts.
              </p>
            </div>
            <Link
              href="/report"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors flex-shrink-0"
            >
              View all reports <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {industryData?.map((ind) => (
              <motion.div key={ind.slug}>
                <Link
                  href={`/industry/${ind.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
                  // aria-label={`${ind.name} - ${ind.reportCount} reports`}
                >
                  {/* Industry image */}
                  <div className="relative h-36 overflow-hidden bg-slate-100">
                    {/* {industryImages[ind.slug] ? ( */}
                    <img
                      src={industryImages[ind.slug]}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* ) : (
                      <div
                        className="w-full h-full flex items-center justify-center bg-gray-100"
                        // style={{ background: `linear-gradient(135deg, ${ind.color}28 0%, ${ind.color}0d 100%)` }}
                      >
                        <span 
                        // style={{ color: ind.color }}
                        >
                          <IconComponent name={ind.icon} size={32} />
                        </span>
                      </div>
                    )} */}
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Card footer */}
                  <div className="px-4 py-3.5 flex items-center justify-between border-t border-slate-50">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                        {ind.name}
                      </h3>
                      <span className="text-xs text-slate-400 mt-0.5 block">
                        {ind.report_count} reports
                      </span>
                    </div>
                    <div className="size-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-primary">
                      <ChevronRight
                        size={13}
                        className="text-primary group-hover:text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT TRUST BAR (after industries) ───────────────── */}
      <section
        className="bg-white border-y border-slate-100 py-10"
        aria-label="Trusted by organizations worldwide"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-sm font-semibold text-slate-400 whitespace-nowrap flex-shrink-0">
              Trusted by leading
              <br className="hidden md:block" /> organizations
            </p>
            <div
              className="hidden md:block w-px h-10 bg-slate-100 flex-shrink-0"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center justify-between gap-16 flex-1">
              {clientLogos.map((logo, index) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className={`w-auto object-contain opacity-60 hover:opacity-90 transition-all duration-200 grayscale hover:grayscale-0 ${
                    [0, 2, 4].includes(index) ? "h-12 scale-110" : "h-10"
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REPORTINSHORT CROSS-PROMO ────────────────────────── */}
      <section
        className="py-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
        aria-labelledby="ris-heading"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/15 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left: copy */}
            <ScrollReveal className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold mb-5">
                <Sparkles size={12} aria-hidden="true" />
                Introducing ReportInShort
              </div>
              <h2
                id="ris-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight"
              >
                Market intelligence and trade data,
                <br />
                <span className="text-primary">in one quick-look platform.</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-lg">
                ReportInShort pairs the key metrics and snapshots from Integers Market research with live trade data so you can size a market, check the numbers, and spot the movement before you invest in a full report.
              </p>

              <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-lg">
                Try 3 reports free, then unlock the full library with a paid plan.
              </p>


              <ul className="space-y-2.5 mb-8 text-left max-w-xs mx-auto lg:mx-0">
                {[
                  { icon: Eye, text: "Market snapshots, key metrics & forecasts" },
                  {
                    icon: BarChart,
                    text: "Trade data and import/export insights",
                  },
                  { icon: Zap, text: "New reports and data added weekly" },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <div className="size-5 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon
                        size={11}
                        className="text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
              <a
                href="https://reportinshort.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-primary/30 group"
              >
                <Sparkles size={16} aria-hidden="true" />
                Try ReportInShort
                <ExternalLink
                  size={14}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </a>
              <p className="text-xs text-slate-500 mt-3">
                3 reports free on trial · Paid plans available
              </p>
            </ScrollReveal>

            {/* Right: visual card stack */}
            <div className="flex-shrink-0 w-full max-w-sm" aria-hidden="true">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Card stack back */}
                <div className="absolute top-3 left-3 right-3 bottom-0 rounded-2xl bg-white/5 border border-white/10" />
                <div className="absolute top-1.5 left-1.5 right-1.5 bottom-0 rounded-2xl bg-white/8 border border-white/15" />

                {/* Main card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        ReportInShort
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Data in a glance
                      </p>
                    </div>
                    <span className="ml-auto text-[10px] font-bold text-primary bg-primary/15 border border-primary/30 px-2 py-0.5 rounded-full">
                      TRIAL
                    </span>
                  </div>

                  {/* Fake metric rows */}
                  {[
                    {
                      label: "Global Ashwagandha Market",
                      value: "$1.9B",
                      change: "+14.2% CAGR",
                    },
                    {
                      label: "Vitamin D3 Market Size",
                      value: "$3.2B",
                      change: "+7.8% CAGR",
                    },
                    {
                      label: "NMN Supplement Market",
                      value: "$382M",
                      change: "+23.1% CAGR",
                    },
                  ].map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between py-2.5 ${i < 2 ? "border-b border-white/10" : ""}`}
                    >
                      <div>
                        <p className="text-xs font-medium text-white/90 leading-snug">
                          {row.label}
                        </p>
                        <p className="text-[10px] text-primary font-semibold mt-0.5">
                          {row.change}
                        </p>
                      </div>
                      <p className="text-base font-black text-white">
                        {row.value}
                      </p>
                    </div>
                  ))}

                  {/* <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <p className="text-[11px] text-slate-400">
                      Updated June 2026
                    </p>
                    <span className="text-[11px] font-semibold text-primary flex items-center gap-1">
                      View full data <ArrowRight size={10} />
                    </span>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED REPORTS ──────────────────────────────────── */}
      <section className="py-20 bg-surface" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Latest Intelligence
              </span>
              <h2
                id="featured-heading"
                className="text-4xl font-bold text-slate-900"
              >
                Recent Market Reports
              </h2>
              <p className="text-slate-500 mt-3 max-w-lg">
                Freshly published reports with primary research and verified
                data.
              </p>
            </div>
            <Link
              href="/report"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View All reports <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </ScrollReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {recentData?.slice(0, 6)?.map((report) => {
              return (
                <motion.div key={report.report_id}>
                  <motion.article
                    whileHover={{
                      y: -2,
                      boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                    }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm group flex flex-col`}
                  >
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-1.5 mb-3 text-xs text-slate-400">
                        <span className="text-primary font-medium">
                          {report.sub_industry}
                        </span>
                        <span aria-hidden="true">·</span>
                        {/* <span>{report.title}</span> */}
                        {report?.owned ? (
                          <span className="ml-auto px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold border border-green-200 text-[10px]">
                            Owned
                          </span>
                        ) : (
                          <span className="ml-auto flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-orange-50 text-orange-500 font-semibold border border-orange-100 text-[10px]">
                            <TrendingUp size={8} aria-hidden="true" />
                            Trending
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2 flex-grow-0">
                        <Link
                          href={`/report-name/${report.seo_slug}`}
                          className="text-slate-900 hover:text-primary transition-colors duration-200 focus-visible:text-primary"
                        >
                          {report.title}
                        </Link>
                      </h3>

                      {/* Description - 2 lines */}
                      <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2 flex-1">
                        {report.subtitle}
                      </p>

                      {/* Key metrics row */}
                      {/* <div className="flex items-center gap-3 mb-5 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <TrendingUp size={11} className="text-primary" aria-hidden="true" />
            {report?.keyMetrics?.cagr} CAGR
          </span>
          <span className="text-slate-200" aria-hidden="true">|</span>
          <span className="font-medium text-slate-700">{report?.keyMetrics?.marketSize}</span>
          <span className="text-slate-200" aria-hidden="true">|</span>
          <span>{report?.pages}p</span>
        </div> */}

                      {/* Footer: price + action */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex flex-col">
                          <span className="text-lg font-black text-slate-900 leading-none">
                            ${report?.full_price}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5">
                            USD · PDF
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/report-name/${report.seo_slug}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                          >
                            <ArrowRight size={12} aria-hidden="true" />
                          </Link>

                          {report?.owned ? (
                            <button
                              // href={`/report-name/${report.seo_slug}`}
                              onClick={() => handleDownload(report.seo_slug)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                            >
                              <Icons.Download size={12} aria-hidden="true" />
                              Download
                            </button>
                          ) : (
                            <motion.button
                              whileTap={{ scale: 0.96 }}
                              onClick={() => handleAddToCart(report.seo_slug)}
                              aria-label={
                                isInCart(report.seo_slug)
                                  ? "Already in cart"
                                  : `Add ${report.title} to cart`
                              }
                              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
                                isInCart(report.seo_slug)
                                  ? "bg-green-50 text-green-700 border border-green-200 shadow-green-100"
                                  : "bg-primary text-white hover:bg-primary-dark shadow-primary/20 hover:shadow-primary/30"
                              }`}
                            >
                              {isInCart(report.seo_slug) ? (
                                <>
                                  <Icons.Check size={12} aria-hidden="true" />{" "}
                                  In Cart
                                </>
                              ) : (
                                <>
                                  <ShoppingCart size={12} aria-hidden="true" />{" "}
                                  Add to Cart
                                </>
                              )}
                            </motion.button>
                          )}

                          {/* Primary CTA - Add to Cart */}

                          {/* Secondary: view detail arrow */}
                          {/* <Link
                                href={`/report-name/${report.slug}`}
                                className="flex items-center justify-center size-8 rounded-xl bg-slate-50 text-slate-400 hover:bg-primary/8 hover:text-primary transition-colors duration-200 flex-shrink-0"
                                aria-label={`View ${report.title} details`}
                              >
                                <ArrowRight size={14} aria-hidden="true" />
                              </Link> */}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/report"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-primary/25"
            >
              Browse All Reports
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ─────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Research Standards
            </span>
            <h2
              id="trust-heading"
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Research You Can Stake Decisions On
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Every Integer Market report goes through a rigorous multi-stage
              research and verification process before publication.
            </p>
          </ScrollReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {trustPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={scaleIn}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <pillar.icon
                    size={22}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-800 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Analyst team placeholder */}
          <ScrollReveal>
            <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-surface-2 border border-slate-100 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                    Our Analysts
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Expert Researchers Behind Every Report
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Our team of 40+ research analysts brings domain expertise
                    spanning organic chemistry, pharmaceutical regulation, trade
                    economics, and consumer behavior research. Each report is
                    assigned to a specialist with direct industry experience.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      "PhD Researchers",
                      "Industry Veterans",
                      "Regulatory Experts",
                      "Trade Analysts",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold border border-primary/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/our-researchers"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Meet the research team{" "}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>

                {/* Real analyst photos */}
                <div className="grid grid-cols-2 gap-5">
                  {analysts.map((analyst) => (
                    <div
                      key={analyst.name}
                      className="flex flex-col items-center text-center gap-2.5"
                    >
                      <div className="size-24 rounded-2xl overflow-hidden ring-2 ring-primary/20 shadow-md">
                        <img
                          src={analyst.photo}
                          alt={analyst.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-800 leading-tight">
                          {analyst.name}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {analyst.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── REPORT TYPES ──────────────────────────────────────── */}
      <section className="py-20 bg-surface" aria-labelledby="types-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              8 Report Types
            </span>
            <h2
              id="types-heading"
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Research for Every Decision
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Whether you need market sizing, competitive intelligence, or trade
              data - we have the right format.
            </p>
          </ScrollReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {reportTypes.map((type) => (
              <motion.div key={type.slug} variants={scaleIn}>
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white border border-slate-100 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent name={type.icon} size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">
                    {type.description}
                  </p>
                  {/* <span className="text-xs font-semibold text-primary flex items-center gap-1 mt-auto">
                    Explore reports{" "}
                    <ChevronRight size={12} aria-hidden="true" />
                  </span> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Simple Process
            </span>
            <h2
              id="how-heading"
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              From Search to Insight in Minutes
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              No complicated procurement, no waiting. Get the intelligence you
              need immediately.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div
              className="hidden md:block absolute top-12 left-[33%] right-[33%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              aria-hidden="true"
            />

            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="size-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
                    <span className="text-2xl font-black text-primary">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="usecases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Use Cases
            </span>
            <h2
              id="usecases-heading"
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Built for Real Business Decisions
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our research is structured around the decisions you actually face
              - not generic industry categories.
            </p>
          </ScrollReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {useCases.map((uc, i) => (
              <motion.div key={uc.slug} variants={fadeInUp}>
                <div
                  className={`flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 group h-full hover:shadow-xl hover:shadow-primary/8 ${
                    i === 0
                      ? "bg-primary border-primary hover:bg-primary-dark"
                      : "bg-white border-slate-100 hover:border-primary/25"
                  }`}
                >
                  <div
                    className={`size-10 rounded-xl flex items-center justify-center ${i === 0 ? "bg-white/20" : "bg-primary/10"}`}
                  >
                    <span className={i === 0 ? "text-white" : "text-primary"}>
                      <IconComponent name={uc.icon} size={18} />
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`text-base font-semibold mb-2 ${i === 0 ? "text-white" : "text-slate-800 group-hover:text-primary transition-colors"}`}
                    >
                      {uc.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-slate-500"}`}
                    >
                      {uc.description}
                    </p>
                  </div>
                  <ul className="mt-auto space-y-1.5" role="list">
                    {uc.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs">
                        <CheckCircle
                          size={12}
                          aria-hidden="true"
                          className={i === 0 ? "text-white/70" : "text-primary"}
                        />
                        <span
                          className={
                            i === 0 ? "text-white/80" : "text-slate-600"
                          }
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      {/* <section
        className="py-20 bg-surface"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Client Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Trusted by Global Leaders
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Join 20,000+ companies across 85+ countries using Integer Market
              for strategic decisions.
            </p>
          </ScrollReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={scaleIn}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-5"
              >
                <div
                  className="flex gap-0.5"
                  aria-label={`${t.stars} out of 5 stars`}
                >
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          
          <ScrollReveal className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { icon: ShieldCheck, text: "SSL Secured" },
                { icon: Lock, text: "Instant PDF Delivery" },
                { icon: Building2, text: "Used by Fortune 500" },
                { icon: Award, text: "Expert-Reviewed Research" },
                { icon: Globe, text: "85+ Countries Served" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-slate-500"
                >
                  <Icon size={15} className="text-primary" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-white/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-[80px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold mb-6">
              Start Today
            </span>
            <h2
              id="cta-heading"
              className="text-5xl font-extrabold text-slate-900 mb-6"
            >
              Stop Guessing.
              <br />
              Start Deciding with Data.
            </h2>
            <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">
              Join professionals who rely on Integer Market for
              strategic market intelligence. Buy only the reports you need - no
              subscriptions, no commitments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/report"
                className="flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold text-base rounded-xl hover:bg-slate-50 transition-colors duration-200 shadow-lg"
              >
                Browse Reports
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold text-base rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Talk to Our Team
              </Link>
            </div>
            <p className="mt-6 text-xs text-white/50">
              One-time purchase · Instant download · No subscription required
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
