"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Eye,
  Globe,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  Linkedin,
  FileText,
} from "lucide-react";
import Badge from "../components/ui/Badge";
import ScrollReveal from "../components/ui/ScrollReveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import { staggerContainer, fadeInUp, scaleIn } from "../lib/variants";
const nikhilPhoto = "/assets/about/nikhil.png";
const yuktaPhoto = "/assets/about/yukta.png";
const ayushiPhoto = "/assets/about/ayushi.png";
const adityaPhoto = "/assets/about/aditya.png";
const mansiPhoto = "/assets/about/mansi.png";
const komalPhoto = "/assets/about/komal.png";
const keskarPhoto = "/assets/about/keskar.png";

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    body: "Every data point is verified through primary research, expert interviews, and cross-referenced with trade databases.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    body: "Our research covers 85+ countries with local nuance that global databases often miss.",
  },
  {
    icon: Award,
    title: "Actionable Insight",
    body: "We do not deliver data for its own sake. Every report includes strategic recommendations you can act on.",
  },
  {
    icon: Users,
    title: "Client Obsessed",
    body: "Our research agenda is driven by client feedback. We research markets you need - not markets we find convenient.",
  },
];

const milestones = [
  {
    year: "2019",
    event:
      "Integer Market founded with focus on nutraceutical and pharma research",
  },
  {
    year: "2021",
    event: "Expanded to 8 industries; crossed 500 research report milestone",
  },
  {
    year: "2023",
    event:
      "Launched digital platform with instant download; 2,000+ clients globally",
  },
  {
    year: "2024",
    event: "Expanded to 16 industries; 1,200+ reports in catalog",
  },
  {
    year: "2026",
    event:
      "Launched AI-assisted research methodology; 5,000+ clients in 85+ countries",
  },
];

const leadership = [
  {
    name: "Nikhil Raut",
    title: "Co-Founder & CEO",
    bio: "Visionary leader driving Integer Market's mission to democratize market intelligence. Expertise in pharma and nutraceutical sectors with a passion for data-driven strategy.",
    photo: nikhilPhoto,
    color: "#e27c60",
  },
  {
    name: "Yukta Moolya",
    title: "Chief Research Officer",
    bio: "Leads Integer Market's global research operations, ensuring every report meets the highest standards of accuracy, depth, and actionability.",
    photo: yuktaPhoto,
    color: "#c96540",
  },
  {
    name: "Ayushi Nainwani",
    title: "Head of Marketing",
    bio: "Drives brand strategy and growth for Integer Market. Expert in B2B content marketing and helping decision-makers discover the intelligence they need.",
    photo: ayushiPhoto,
    color: "#ea9d87",
  },
];

const researchers = [
  {
    name: "Dr. Aditya Dhadwe",
    role: "Consumer Health (MBBS)",
    photo: adityaPhoto,
  },
  { name: "Dr. Mansi", role: "Herbal & Botanicals", photo: mansiPhoto },
  { name: "Komal Kamble", role: "Nutraceuticals", photo: komalPhoto },
  { name: "Nagnath Keskar", role: "Pharmaceuticals", photo: keskarPhoto },
];

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Integer Market - Market Intelligence Platform";
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero - light */}
      <div className="bg-white border-b border-slate-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Breadcrumb
              items={[{ label: "About Us" }]}
              className="mb-5 justify-center"
            />
            <Badge variant="primary" className="mb-5">
              Our Story
            </Badge>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-5">
              Built for Decision-Makers
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Integer Market was founded on a simple belief: strategic decisions
              should be backed by rigorous, accessible market intelligence - not
              expensive consultancy retainers.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              body: "To democratize access to world-class market intelligence. We believe that actionable research should be available to every business - from growing startups to Fortune 500 corporations - at a price that makes sense.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              body: "To become the most trusted source of market intelligence for the global pharma, nutraceutical, and specialty chemical industries - powering decisions that shape the future of health and wellness globally.",
            },
          ].map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div className="bg-white border border-slate-100 rounded-2xl p-8 h-full">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {title}
                </h2>
                <p className="text-slate-500 leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <ScrollReveal className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { val: "100+", label: "Research Reports", icon: FileText },
              { val: "16", label: "Industries Covered", icon: TrendingUp },
              { val: "85+", label: "Countries Tracked", icon: Globe },
              { val: "20,000+", label: "Companies Tracked", icon: Users },
            ].map(({ val, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                className="bg-white border border-slate-100 rounded-2xl p-6 text-center"
              >
                <Icon
                  size={20}
                  className="text-primary mx-auto mb-2"
                  aria-hidden="true"
                />
                <div className="text-2xl font-black text-slate-900">{val}</div>
                <div className="text-xs text-slate-500 mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            What We Stand For
          </h2>
        </ScrollReveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20"
        >
          {values.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex gap-5"
            >
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Icon size={18} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-800 mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── LEADERSHIP TEAM ─────────────────────────────────────── */}
        <ScrollReveal className="text-center mb-10">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            The People Behind It
          </span>
          <h2 className="text-3xl font-bold text-slate-900">Leadership Team</h2>
          <p className="text-slate-500 mt-2 max-w-xl mx-auto">
            Domain experts and operators who built Integer Market with a single
            mission: better market intelligence for everyone.
          </p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              variants={fadeInUp}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Photo */}
              <div
                className="w-36 h-36 rounded-2xl overflow-hidden mb-4 ring-2 ring-primary/20 flex-shrink-0 shadow-md"
                aria-label={person.name}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-0.5">
                {person.name}
              </h3>
              <p className="text-xs font-semibold text-primary mb-3">
                {person.title}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {person.bio}
              </p>

              <a
                href="#"
                aria-label={`${person.name} on LinkedIn`}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-primary transition-colors mt-auto"
              >
                <Linkedin size={13} aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* ── RESEARCH TEAM ─────────────────────────────────────── */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 lg:p-12 mb-20">
          <ScrollReveal className="text-center mb-10">
            {/* <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">40+ Specialists</span> */}
            <h2 className="text-3xl font-bold text-slate-900">
              Our Research Analysts
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
              Each report is assigned to a specialist with direct industry
              experience - from synthetic chemistry to trade economics.
            </p>
          </ScrollReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {researchers.map((r) => (
              <motion.div
                key={r.name}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="size-24 rounded-2xl overflow-hidden mb-3 ring-2 ring-primary/15">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-tight">
                  {r.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{r.role}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* <div className="text-center mt-10">
            <Link
              href="/our-researchers"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary text-sm font-semibold rounded-xl hover:bg-primary/5 transition-colors"
            >
              View Full Research Team <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div> */}
        </div>

        {/* Timeline */}
        {/* <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
        </ScrollReveal> */}
        {/* <div className="relative max-w-2xl mx-auto mb-20"> */}
        {/* Vertical connector line - z-0 so year boxes sit above it */}
        {/* <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200" style={{ zIndex: 0 }} aria-hidden="true" />
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="relative z-10 flex-shrink-0" style={{ zIndex: 10 }}>
                  <div className="size-16 rounded-xl bg-white border border-primary/20 shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{m.year}</span>
                  </div>
                </div>
                <ScrollReveal delay={i * 0.08} className="flex-1 self-center">
                  <div className="bg-white border border-slate-100 rounded-xl p-4">
                    <p className="text-sm text-slate-700 leading-relaxed">{m.event}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-10 text-center relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">
                Ready to work with us?
              </h2>
              <p className="text-white/70 mb-6">
                Explore our research catalog or reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/report"
                  className="flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-md"
                >
                  Browse Reports <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
