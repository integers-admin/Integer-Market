"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  User,
  LogOut,
  LayoutDashboard,
  Search,
  ShoppingCart,
  ExternalLink,
  Sparkles,
  FileText,
} from "lucide-react";
import Logo from "../ui/Logo";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { industries, industryCategories } from "../../data/industries";
import { reports } from "../../data/reports";
import * as Icons from "lucide-react";

function IndustryIcon({ name, size = 14 }) {
  const Icon = Icons[name];
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount, setCartOpen } = useCart();
  const router = useRouter();
  const rawPathname = usePathname();
  const pathname = rawPathname ?? "";
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;
  const industriesRef = useRef(null);
  const userMenuRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (industriesRef.current && !industriesRef.current.contains(e.target))
        setIndustriesOpen(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target))
        setUserMenuOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIndustriesOpen(false);
        setUserMenuOpen(false);
        setMobileOpen(false);
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    router.push("/");
  };

  const openSearch = () => {
    setSearchOpen(true);
    setIndustriesOpen(false);
    setUserMenuOpen(false);
    setTimeout(() => searchInputRef.current?.focus(), 80);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/report?q=${encodeURIComponent(searchQuery.trim())}`);
      closeSearch();
    }
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return reports
      .filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.industryName.toLowerCase().includes(q) ||
          (r.tags && r.tags.some((t) => t.toLowerCase().includes(q))),
      )
      .slice(0, 6);
  }, [searchQuery]);

  const navLinkClass = (href) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-primary"
        : isTransparent
          ? "text-white/90 hover:text-white hover:bg-white/10"
          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
    }`;
  };

  const iconBtnClass = `p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
    isTransparent
      ? "text-white/80 hover:text-white hover:bg-white/10"
      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
  }`;

  useEffect(() => {
    const userDetail = localStorage.getItem("user");
    setParsedData(userDetail ? JSON.parse(userDetail) : null);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent border-b border-white/10"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
        style={{ height: scrolled ? "56px" : "72px" }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Integer Market home"
          className="flex-shrink-0 mr-4"
        >
          <Logo light={isTransparent} className="h-8 w-auto" />
        </Link>

        {/* ── Desktop: nav links + right icons (with search overlay) ── */}
        <div className="hidden lg:flex flex-1 items-center justify-between relative">
          {/* Nav links */}
          <div
            className={`flex items-center gap-1 transition-opacity duration-150 ${searchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            {/* Industries dropdown */}
            <div ref={industriesRef} className="relative">
              <button
                onClick={() => setIndustriesOpen((v) => !v)}
                aria-expanded={industriesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Industries
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] rounded-2xl bg-white border border-slate-100 shadow-lg p-5"
                    role="menu"
                    aria-label="Industries menu"
                  >
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">
                      Browse by Industry
                    </p>
                    <div className="grid grid-cols-4 gap-6">
                      {industryCategories.map((cat) => {
                        const subs = cat.subcategories
                          .map((s) => industries.find((i) => i.slug === s))
                          .filter(Boolean);
                        return (
                          <div key={cat.slug}>
                            <Link
                              href={`/industry/${cat.slug}`}
                              role="menuitem"
                              onClick={() => setIndustriesOpen(false)}
                              className="flex items-center gap-1.5 mb-2 group"
                            >
                              <span className="text-xs font-bold text-slate-800 group-hover:text-primary transition-colors leading-tight">
                                {cat.name}
                              </span>
                            </Link>
                            <ul className="space-y-0.5">
                              {subs.map((ind) => (
                                <li key={ind.slug}>
                                  <Link
                                    href={`/industry/${ind.slug}`}
                                    role="menuitem"
                                    onClick={() => setIndustriesOpen(false)}
                                    className="flex items-center gap-1.5 px-1 py-1 rounded-lg hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors duration-150 group"
                                  >
                                    <span
                                      className="text-primary/60 group-hover:text-primary transition-colors flex-shrink-0"
                                      aria-hidden="true"
                                    >
                                      <IndustryIcon name={ind.icon} size={12} />
                                    </span>
                                    <span className="text-xs">{ind.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <p className="text-xs text-slate-400">
                        1,000+ reports across all industries
                      </p>
                      <Link
                        href="/report"
                        onClick={() => setIndustriesOpen(false)}
                        className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                      >
                        View all reports →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about-us" className={navLinkClass("/about-us")}>
              About
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact Us
            </Link>

            {/* ReportInShort */}
            <a
              href="https://reportinshort.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                isTransparent
                  ? "border-primary/60 bg-primary/15 text-white hover:bg-primary/30 hover:border-primary"
                  : "border-primary/40 bg-primary/8 text-primary hover:bg-primary hover:text-white hover:border-primary"
              }`}
              aria-label="Visit ReportInShort - Data in a glance (opens in new tab)"
            >
              <span
                className="relative flex size-2 flex-shrink-0"
                aria-hidden="true"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <Sparkles size={12} aria-hidden="true" />
              ReportInShort
              <ExternalLink
                size={11}
                className="opacity-60 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Right icons */}
          <div
            className={`flex items-center gap-3 transition-opacity duration-150 ${searchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            {/* Search button */}
            {/* <button
              onClick={openSearch}
              aria-label="Search reports"
              className={iconBtnClass}
            >
              <Search size={18} aria-hidden="true" />
            </button> */}

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
              className={`relative ${iconBtnClass}`}
            >
              <ShoppingCart size={18} aria-hidden="true" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 size-4 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </motion.span>
              )}
            </button>

            {isAuthenticated ? (
              <div ref={userMenuRef} className="relative">
                <button
                  onClick={() => setUserMenuOpen((v) => !v)}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white/80 text-slate-700 transition-colors duration-200 cursor-pointer"
                >
                  <div className="size-6 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <User
                      size={13}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {parsedData?.full_name}
                  </span>
                  <ChevronDown
                    size={13}
                    className={`text-slate-400 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-lg p-2"
                      role="menu"
                    >
                      <div className="px-3 py-2 mb-1 border-b border-slate-100">
                        <p className="text-sm font-semibold text-slate-900">
                          {parsedData?.full_name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {parsedData?.email}
                        </p>
                      </div>
                      <Link
                        href="/dashboard"
                        role="menuitem"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        <LayoutDashboard size={15} aria-hidden="true" />
                        Dashboard
                      </Link>
                      <button
                        role="menuitem"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-600 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <LogOut size={15} aria-hidden="true" />
                        Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isTransparent
                      ? "text-white/85 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-sm"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* ── Search overlay (absolute, covers nav + right icons) ── */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                ref={searchRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 z-20 flex items-center gap-3 bg-white rounded-xl px-2"
              >
                {/* Search input */}
                <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
                  <Search
                    size={15}
                    className="ml-3.5 text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search reports, ingredients, markets..."
                    className="flex-1 px-2 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                    autoComplete="off"
                    aria-label="Search reports"
                    aria-expanded={searchResults.length > 0}
                    aria-autocomplete="list"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer flex-shrink-0"
                      aria-label="Clear search"
                    >
                      <X size={14} aria-hidden="true" />
                    </button>
                  )}
                </div>

                {/* Cancel */}
                <button
                  onClick={closeSearch}
                  className="text-sm font-medium text-slate-500 hover:text-slate-800 whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 px-1"
                >
                  Cancel
                </button>

                {/* Results dropdown */}
                <AnimatePresence>
                  {searchQuery.trim().length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-[calc(100%+8px)] left-0 right-14 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden z-50"
                      role="listbox"
                      aria-label="Search results"
                    >
                      {searchResults.length > 0 ? (
                        <>
                          <div className="px-4 py-2 border-b border-slate-50">
                            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                              {searchResults.length} result
                              {searchResults.length !== 1 ? "s" : ""} found
                            </p>
                          </div>
                          {searchResults.map((r) => (
                            <Link
                              key={r.id}
                              href={`/report-name/${r.slug}`}
                              onClick={closeSearch}
                              role="option"
                              className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 group"
                            >
                              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FileText
                                  size={14}
                                  className="text-primary"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
                                  {r.title}
                                </p>
                                <p className="text-xs text-slate-500 mt-0.5">
                                  {r.industryName}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href={`/report?q=${encodeURIComponent(searchQuery.trim())}`}
                            onClick={closeSearch}
                            className="flex items-center gap-2 px-4 py-3 bg-slate-50 text-sm font-semibold text-primary hover:text-primary-dark hover:bg-primary/5 transition-colors"
                          >
                            <Search size={14} aria-hidden="true" />
                            See all results for &ldquo;{searchQuery.trim()}
                            &rdquo;
                          </Link>
                        </>
                      ) : (
                        <div className="px-4 py-7 text-center">
                          <p className="text-sm font-medium text-slate-600 mb-1">
                            No reports found
                          </p>
                          <p className="text-xs text-slate-400 mb-4">
                            Try different keywords
                          </p>
                          <Link
                            href={`/report?q=${encodeURIComponent(searchQuery.trim())}`}
                            onClick={closeSearch}
                            className="text-sm text-primary font-semibold hover:text-primary-dark transition-colors"
                          >
                            Browse all reports →
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Mobile: cart + search + hamburger ── */}
        <div className="lg:hidden flex items-center gap-1 ml-auto">
          {/* <button
            onClick={openSearch}
            aria-label="Search reports"
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              isTransparent
                ? "text-white/85 hover:text-white hover:bg-white/10"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Search size={20} aria-hidden="true" />
          </button> */}
          <button
            onClick={() => setCartOpen(true)}
            aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
            className={`relative p-2 rounded-lg transition-colors cursor-pointer ${
              isTransparent
                ? "text-white/85 hover:text-white hover:bg-white/10"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <ShoppingCart size={20} aria-hidden="true" />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 size-4 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center"
                aria-hidden="true"
              >
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>
          <button
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              isTransparent
                ? "text-white/85 hover:text-white hover:bg-white/10"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? (
                  <X size={22} aria-hidden="true" />
                ) : (
                  <Menu size={22} aria-hidden="true" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Mobile search overlay ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-md px-4 py-3"
          >
            <div ref={searchRef} className="relative">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl">
                <Search
                  size={15}
                  className="ml-3.5 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search reports..."
                  className="flex-1 px-2 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                  autoComplete="off"
                  aria-label="Search reports"
                  autoFocus
                />
                <button
                  onClick={closeSearch}
                  className="p-2 mr-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                  aria-label="Close search"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              {/* Mobile search results */}
              <AnimatePresence>
                {searchQuery.trim().length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden z-50"
                  >
                    {searchResults.length > 0 ? (
                      <>
                        {searchResults.map((r) => (
                          <Link
                            key={r.id}
                            href={`/report-name/${r.slug}`}
                            onClick={closeSearch}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 group"
                          >
                            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FileText
                                size={13}
                                className="text-primary"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-900 line-clamp-1 group-hover:text-primary transition-colors">
                                {r.title}
                              </p>
                              <p className="text-xs text-slate-500">
                                {r.industryName}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href={`/report?q=${encodeURIComponent(searchQuery.trim())}`}
                          onClick={closeSearch}
                          className="flex items-center gap-2 px-4 py-3 bg-slate-50 text-sm font-semibold text-primary"
                        >
                          <Search size={13} />
                          See all results
                        </Link>
                      </>
                    ) : (
                      <div className="px-4 py-5 text-center">
                        <p className="text-sm text-slate-500">
                          No results for &ldquo;{searchQuery}&rdquo;
                        </p>
                        <Link
                          href={`/report?q=${encodeURIComponent(searchQuery.trim())}`}
                          onClick={closeSearch}
                          className="text-xs text-primary font-semibold mt-1 block"
                        >
                          Browse all reports →
                        </Link>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-slate-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                Home
              </Link>

              {/* Industries */}
              <div>
                <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Industries
                </p>
                {industryCategories.map((cat) => {
                  const subs = cat.subcategories
                    .map((s) => industries.find((i) => i.slug === s))
                    .filter(Boolean);
                  return (
                    <div key={cat.slug} className="mb-3">
                      <Link
                        href={`/industry/${cat.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center px-4 py-1.5 text-xs font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-wide"
                      >
                        {cat.name}
                      </Link>
                      <div className="grid grid-cols-2 gap-0.5">
                        {subs.map((ind) => (
                          <Link
                            key={ind.slug}
                            href={`/industry/${ind.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                          >
                            <span
                              className="text-primary/70"
                              aria-hidden="true"
                            >
                              <IndustryIcon name={ind.icon} size={12} />
                            </span>
                            {ind.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <Link
                  href="/report"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 text-sm text-primary font-semibold mt-1"
                >
                  View all industries →
                </Link>
              </div>

              <Link
                href="/about-us"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                Contact Us
              </Link>

              {/* ReportInShort */}
              <a
                href="https://reportinshort.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/25 transition-colors hover:bg-primary/15"
              >
                <div className="size-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                  <Sparkles
                    size={16}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-primary flex items-center gap-1">
                    ReportInShort
                    <ExternalLink size={11} aria-hidden="true" />
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    Data in a glance - 3 reports free on trial
                  </p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary text-white flex-shrink-0">
                  NEW
                </span>
              </a>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileOpen(false);
                      }}
                      className="text-left px-4 py-3 rounded-xl text-base font-medium text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 rounded-xl text-center text-base font-medium text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 rounded-xl text-center text-base font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
