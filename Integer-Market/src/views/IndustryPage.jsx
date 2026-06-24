// 'use client'
// import { useParams } from 'next/navigation'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import Badge from '../components/ui/Badge'
// import Breadcrumb from '../components/ui/Breadcrumb'
// import ScrollReveal from '../components/ui/ScrollReveal'
// import ReportCard from '../components/ui/ReportCard'
// import { getIndustryBySlug, industries, industryCategories } from '../data/industries'
// import { reports } from '../data/reports'
// import { industryBanners } from '../data/industryBanners'
// import { industryImages } from '../data/industryImages'
// import { staggerContainer, fadeInUp } from '../lib/variants'

// export default function IndustryPage({industryReports}) {
//   const { slug } = useParams()
//   const industry = getIndustryBySlug(slug)

//   console.log("industryReports: ",industryReports);

//   // Detect if this is a top-level category page or a leaf subcategory page
//   const categoryEntry = industryCategories.find(c => c.slug === slug)
//   const isCategory = !!categoryEntry

//   // For category pages: group reports by each subcategory
//   const subcategoryGroups = isCategory
//     ? categoryEntry.subcategories.map(subSlug => {
//         const subIndustry = industries.find(i => i.slug === subSlug)
//         const subReports = reports.filter(r => r.industry === subSlug)
//         return { subSlug, subIndustry, subReports }
//       }).filter(g => g.subIndustry)
//     : []

//   // For subcategory pages: flat list of direct reports
//   const subcategoryReports = !isCategory
//     ? reports.filter(r => r.industry === slug)
//     : []

//   // Total report count shown in the badge
//   const totalReports = isCategory
//     ? subcategoryGroups.reduce((sum, g) => sum + g.subReports.length, 0)
//     : subcategoryReports.length

//   // Other industries for the "Other Industries" section at the bottom
//   const related = industries.filter(i => i.slug !== slug).slice(0, 6)
//   const bannerImg = industryBanners[slug]

//   if (!industry) {
//     return (
//       <div className="min-h-screen bg-surface flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-slate-900 mb-2">Industry not found</h1>
//           <Link href="/report" className="text-primary font-semibold">Browse all reports</Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-surface">

//       {/* ── Banner header ───────────────────────────────── */}
//       <div className="relative overflow-hidden bg-slate-50" style={{ minHeight: '280px', paddingTop: '72px' }}>
//         {bannerImg && (
//           <img
//             src={bannerImg}
//             alt=""
//             aria-hidden="true"
//             className="absolute inset-0 w-full h-full object-cover opacity-25"
//           />
//         )}
//         <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" aria-hidden="true" />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//           <Breadcrumb
//             items={[
//               { label: 'Reports', href: '/report' },
//               { label: industry.name },
//             ]}
//             className="mb-6"
//           />
//           <div className="flex flex-wrap items-center gap-3 mb-3">
//             {totalReports > 0 && (
//               <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/8">
//                 {totalReports} Report{totalReports !== 1 ? 's' : ''}
//               </span>
//             )}
//             {isCategory && (
//               <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-slate-500 border border-slate-200 bg-white">
//                 {categoryEntry.subcategories.length} Sub-industries
//               </span>
//             )}
//           </div>
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">
//             {industry.name}
//           </h1>
//           <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
//             {industry.description}
//           </p>
//         </div>
//       </div>

// <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <>
//               <ScrollReveal>
//                 <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Reports</h2>
//               </ScrollReveal>
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={staggerContainer}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
//               >
//                 {subcategoryReports.map(r => (
//                   <motion.div key={r.id} variants={fadeInUp}>
//                     <ReportCard report={r} />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </>
//             </div>

//       {/* ── Content ─────────────────────────────────────── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

//         {isCategory ? (
//           /* ── Category view: one section per subcategory ─ */
//           <div className="space-y-14 mb-16">
//             {subcategoryGroups.map(({ subSlug, subIndustry, subReports }, idx) => (
//               <section key={subSlug} aria-labelledby={`section-${subSlug}`}>
//                 <ScrollReveal>
//                   <div className="flex items-center justify-between mb-6">
//                     <div>
//                       <h2
//                         id={`section-${subSlug}`}
//                         className="text-xl font-bold text-slate-900"
//                       >
//                         {subIndustry.name}
//                       </h2>
//                       <p className="text-sm text-slate-400 mt-0.5">{subIndustry.description}</p>
//                     </div>
//                     <Link
//                       href={`/industry/${subSlug}`}
//                       className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors whitespace-nowrap ml-4 flex-shrink-0"
//                     >
//                       View all {subIndustry.name} →
//                     </Link>
//                   </div>
//                 </ScrollReveal>

//                 {subReports.length > 0 ? (
//                   <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: '-60px' }}
//                     variants={staggerContainer}
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
//                   >
//                     {subReports.map(r => (
//                       <motion.div key={r.id} variants={fadeInUp}>
//                         <ReportCard report={r} />
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 ) : (
//                   <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-8 text-center">
//                     <p className="text-sm font-semibold text-slate-400 mb-1">Coming Soon</p>
//                     <p className="text-xs text-slate-400 mb-4">
//                       We are researching the {subIndustry.name} market. Reports will be published soon.
//                     </p>
//                     <Link
//                       href="/contact"
//                       className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
//                     >
//                       Request a report
//                     </Link>
//                   </div>
//                 )}
//               </section>
//             ))}
//           </div>
//         ) : (
//           /* ── Subcategory view: single flat grid ────────── */
//           subcategoryReports.length > 0 ? (
//             <>
//               <ScrollReveal>
//                 <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Reports</h2>
//               </ScrollReveal>
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={staggerContainer}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
//               >
//                 {subcategoryReports.map(r => (
//                   <motion.div key={r.id} variants={fadeInUp}>
//                     <ReportCard report={r} />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </>
//           ) : (
//             <ScrollReveal>
//               <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center mb-16">
//                 <h2 className="text-xl font-semibold text-slate-900 mb-3">Coming Soon</h2>
//                 <p className="text-slate-500 mb-6">
//                   We are actively researching the {industry.name} market. Reports will be published soon.
//                 </p>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
//                 >
//                   Request a Report
//                 </Link>
//               </div>
//             </ScrollReveal>
//           )
//         )}

//         {/* ── Other Industries ────────────────────────────── */}
//         <ScrollReveal>
//           <h2 className="text-xl font-bold text-slate-900 mb-5">Other Industries</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
//             {related.map(ind => {
//               const img = industryImages[ind.slug]
//               return (
//                 <Link
//                   key={ind.slug}
//                   href={`/industry/${ind.slug}`}
//                   className="relative overflow-hidden rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all duration-200 group aspect-[4/3]"
//                 >
//                   {img ? (
//                     <img
//                       src={img}
//                       alt={ind.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
//                       loading="lazy"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-slate-100" />
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//                   <span className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs font-semibold text-white leading-snug">
//                     {ind.name}
//                   </span>
//                 </Link>
//               )
//             })}
//           </div>
//         </ScrollReveal>
//       </div>
//     </div>
//   )
// }

"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Badge from "../components/ui/Badge";
import Breadcrumb from "../components/ui/Breadcrumb";
import ScrollReveal from "../components/ui/ScrollReveal";
import ReportCard from "../components/ui/ReportCard";
import {
  getIndustryBySlug,
  industries,
  industryCategories,
} from "../data/industries";
import { reports } from "../data/reports";
import { industryBanners } from "../data/industryBanners";
import { industryImages } from "../data/industryImages";
import { staggerContainer, fadeInUp } from "../lib/variants";

export default function IndustryPage({ industryReports,loading }) {
  const { slug } = useParams();
  
  // const industry = getIndustryBySlug(slug);

  // console.log("industryReports: ", industryReports);

  // Detect if this is a top-level category page or a leaf subcategory page
  // const categoryEntry = industryCategories.find((c) => c.slug === slug);
  // const isCategory = !!categoryEntry;

  // For category pages: group reports by each subcategory
  // const subcategoryGroups = isCategory
  //   ? categoryEntry.subcategories
  //       .map((subSlug) => {
  //         const subIndustry = industries.find((i) => i.slug === subSlug);
  //         const subReports = reports.filter((r) => r.industry === subSlug);
  //         return { subSlug, subIndustry, subReports };
  //       })
  //       .filter((g) => g.subIndustry)
  //   : [];

  // For subcategory pages: flat list of direct reports
  // const subcategoryReports = !isCategory
  //   ? reports.filter((r) => r.industry === slug)
  //   : [];

  // Total report count shown in the badge
  // const totalReports = isCategory
  //   ? subcategoryGroups.reduce((sum, g) => sum + g.subReports.length, 0)
  //   : subcategoryReports.length;

  // Other industries for the "Other Industries" section at the bottom
  // const related = industries.filter((i) => i.slug !== slug).slice(0, 6);
  const bannerImg = industryBanners[slug];

  if (loading) {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="text-center">
        <div className="w-11 h-11 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-600 font-medium">
          Loading reports...
        </p>
      </div>
    </div>
  );
}

  if (!industryReports) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Industry not found
          </h1>
          <Link href="/report" className="text-primary font-semibold">
            Browse all reports
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Banner header ───────────────────────────────── */}
      <div
        className="relative overflow-hidden bg-slate-50"
        style={{ minHeight: "280px", paddingTop: "72px" }}
      >
        {bannerImg && (
          <img
            src={bannerImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumb
            items={[
              { label: "Reports", href: "/report" },
              { label: industryReports?.name },
            ]}
            className="mb-6"
          />
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {/* {totalReports > 0 && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/8">
                {totalReports} Report{totalReports !== 1 ? "s" : ""}
              </span>
            )} */}
            {/* {isCategory && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-slate-500 border border-slate-200 bg-white">
                {categoryEntry.subcategories.length} Sub-industries
              </span>
            )} */}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">
            {industryReports?.name}
          </h1>
          <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
            {industryReports?.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <>
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Available Reports
            </h2>
          </ScrollReveal>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          >
            {industryReports?.reports?.map((r,i) => (
              <motion.div key={i} variants={fadeInUp}>
                <ReportCard report={r} />
              </motion.div>
            ))}
          </motion.div>
        </>
      </div>
    </div>
  );
}
