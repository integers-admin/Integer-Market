// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   TrendingUp,
//   ShoppingCart,
//   Check,
//   Download,
//   ArrowRight,
//   FileText,
// } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";
// import { useCart } from "../../context/CartContext";
// import axios from "axios";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// export default function ReportCard({ report }) {
//   // const { hasReport } = useAuth()
//   const { addToCart, isInCart } = useCart();
//   // const owned = hasReport(report.id)
//   // const inCart = isInCart(report.id)

//     const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//     const router = useRouter();

//     const pathname = usePathname();
// const searchParams = useSearchParams();

//   // const handleAddToCart = (report) => {
//   //   const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

//   // if (!token) {
//   //   router.push("/login");
//   //   return;
//   // }
//   //   addToCart(report);
//   //   // setCartAdded(true);
//   //   // setTimeout(() => setCartAdded(false), 2000);
//   // };

//   const handleAddToCart = (report) => {
//   const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

//   if (!token) {
//     const currentPage =
//       pathname +
//       (searchParams.toString() ? `?${searchParams.toString()}` : "");

//     router.push(`/login?redirect=${encodeURIComponent(currentPage)}`);
//     return;
//   }

//   addToCart(report);
// };

//   const handleDownload = async (slug) => {
//   try {
//     const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

//     const response = await axios.get(
//       `${BASE_URL}/reports/${slug}/download`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (response.status===200 && response.data?.download_url) {
//       window.open(response.data.download_url, "_blank");
//     }
//   } catch (error) {
//     console.error("Download error:", error);
//   }
// };

//   /* ── LIST LAYOUT ─────────────────────────────────────────── */
//   // if (layout === 'list') {
//   //   return (
//   //     <motion.article
//   //       whileHover={{ boxShadow: '0 6px 24px rgba(0,0,0,0.07)' }}
//   //       transition={{ duration: 0.2 }}
//   //       className={`relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm flex items-center gap-4 p-4 ${className}`}
//   //     >
//   //       {/* Icon */}
//   //       <div className="size-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
//   //         <FileText size={20} className="text-primary" aria-hidden="true" />
//   //       </div>

//   //       {/* Centre: info */}
//   //       <div className="flex-1 min-w-0">
//   //         <div className="flex items-center gap-1.5 mb-1 text-xs text-slate-400">
//   //           <span className="text-primary font-medium">{report.industry}</span>
//   //           <span aria-hidden="true">·</span>
//   //           <span>{report.reportTypeName}</span>
//   //           {owned && (
//   //             <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold border border-green-200 text-[10px]">Owned</span>
//   //           )}
//   //         </div>
//   //         <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 mb-0.5">
//   //           <Link href={`/report-name/${report.slug}`} className="hover:text-primary transition-colors duration-200">
//   //             {report.title}
//   //           </Link>
//   //         </h3>
//   //         <p className="text-xs text-slate-400 line-clamp-1 mb-1.5">{report.description}</p>
//   //         <div className="flex items-center gap-3 text-xs text-slate-400">
//   //           <span className="flex items-center gap-1">
//   //             <TrendingUp size={10} className="text-primary" aria-hidden="true" />
//   //             {report.keyMetrics.cagr} CAGR
//   //           </span>
//   //           <span className="text-slate-200" aria-hidden="true">|</span>
//   //           <span className="font-medium text-slate-600">{report.keyMetrics.marketSize}</span>
//   //           <span className="text-slate-200" aria-hidden="true">|</span>
//   //           <span>{report.pages}p</span>
//   //         </div>
//   //       </div>

//   //       {/* Right: price + CTA */}
//   //       <div className="flex flex-col items-end gap-2 flex-shrink-0">
//   //         <div>
//   //           <span className="text-lg font-black text-slate-900">${report.price}</span>
//   //           <span className="text-[10px] text-slate-400 ml-1">USD</span>
//   //         </div>
//   //         {owned ? (
//   //           <Link
//   //             href={`/report-name/${report.slug}`}
//   //             className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
//   //           >
//   //             <Download size={12} aria-hidden="true" />
//   //             Download
//   //           </Link>
//   //         ) : (
//   //           <div className="flex items-center gap-2">
//   //             <motion.button
//   //               whileTap={{ scale: 0.96 }}
//   //               onClick={handleAddToCart}
//   //               aria-label={inCart ? 'Already in cart' : `Add ${report.title} to cart`}
//   //               className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
//   //                 inCart
//   //                   ? 'bg-green-50 text-green-700 border border-green-200'
//   //                   : 'bg-primary text-white hover:bg-primary-dark shadow-primary/20'
//   //               }`}
//   //             >
//   //               {inCart
//   //                 ? <><Check size={12} aria-hidden="true" /> In Cart</>
//   //                 : <><ShoppingCart size={12} aria-hidden="true" /> Add to Cart</>
//   //               }
//   //             </motion.button>
//   //             <Link
//   //               href={`/report-name/${report.slug}`}
//   //               className="flex items-center justify-center size-8 rounded-xl bg-slate-50 text-slate-400 hover:bg-primary/8 hover:text-primary transition-colors duration-200"
//   //               aria-label={`View ${report.title} details`}
//   //             >
//   //               <ArrowRight size={14} aria-hidden="true" />
//   //             </Link>
//   //           </div>
//   //         )}
//   //       </div>
//   //     </motion.article>
//   //   )
//   // }

//   /* ── GRID LAYOUT (default) ───────────────────────────────── */
//   return (
//     <motion.article
//       whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
//       transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
//       className={`relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm group flex flex-col`}
//     >
//       <div className="p-5 flex flex-col flex-1">
//         <div className="flex items-center gap-1.5 mb-3 text-xs text-slate-400">
//           <span className="text-primary font-medium">
//             {report.sub_industry}
//           </span>
//           <span aria-hidden="true">·</span>
//           {/* <span>{report.title}</span> */}
//           {report?.owned ? (
//             <span className="ml-auto px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold border border-green-200 text-[10px]">
//               Owned
//             </span>
//           ) : (
//             <span className="ml-auto flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-orange-50 text-orange-500 font-semibold border border-orange-100 text-[10px]">
//               <TrendingUp size={8} aria-hidden="true" />
//               Trending
//             </span>
//           )}
//         </div>

//         {/* Title */}
//         <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2 flex-grow-0">
//           <Link
//             href={`/report-name/${report.seo_slug}`}
//             className="text-slate-900 hover:text-primary transition-colors duration-200 focus-visible:text-primary"
//           >
//             {report.title}
//           </Link>
//         </h3>

//         {/* Description - 2 lines */}
//         <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2 flex-1">
//           {report.subtitle}
//         </p>

//         {/* Key metrics row */}
//         <div className="flex items-center gap-3 mb-5 text-xs text-slate-500">
//           <span className="flex items-center gap-1">
//             <TrendingUp size={11} className="text-primary" aria-hidden="true" />
//             {report?.cagr}% CAGR
//           </span>
//           <span className="text-slate-200" aria-hidden="true">
//             |
//           </span>
//           <span className="font-medium text-slate-700">
//             ${report?.market_size}
//           </span>
//           {/* <span className="text-slate-200" aria-hidden="true">|</span>
//           <span>{report?.pages}p</span> */}
//         </div>

//         {/* Footer: price + action */}
//         <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//           <div className="flex flex-col">
//             <span className="text-lg font-black text-slate-900 leading-none">
//               ${report?.full_price}
//             </span>
//             <span className="text-[10px] text-slate-400 mt-0.5">USD · PDF</span>
//           </div>

//           <div className="flex items-center gap-2">
//             {report?.owned ? (
//             <button
//                 // href={`/report-name/${report.seo_slug}`}
//                 onClick={() => handleDownload(report.seo_slug)}
//                 className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
//               >
//                 <Download size={12} aria-hidden="true" />
//                 Download
//               </button>
//              ) : (
//               <>
//             {/* Primary CTA - Add to Cart */}
//             <motion.button
//               whileTap={{ scale: 0.96 }}
//               onClick={()=>handleAddToCart(report.seo_slug)}
//               aria-label={
//                 isInCart(report.seo_slug)
//                   ? "Already in cart"
//                   : `Add ${report.title} to cart`
//               }
//               className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
//                 isInCart(report.seo_slug)
//                   ? "bg-green-50 text-green-700 border border-green-200 shadow-green-100"
//                   : "bg-primary text-white hover:bg-primary-dark shadow-primary/20 hover:shadow-primary/30"
//               }`}
//             >
//               {isInCart(report.seo_slug) ? (
//                 <>
//                   <Check size={12} aria-hidden="true" /> In Cart
//                 </>
//               ) : (
//                 <>
//                   <ShoppingCart size={12} aria-hidden="true" /> Add to Cart
//                 </>
//               )}
//             </motion.button>

//             {/* Secondary: view detail arrow */}
//             {/* <Link
//                   href={`/report-name/${report.slug}`}
//                   className="flex items-center justify-center size-8 rounded-xl bg-slate-50 text-slate-400 hover:bg-primary/8 hover:text-primary transition-colors duration-200 flex-shrink-0"
//                   aria-label={`View ${report.title} details`}
//                 >
//                   <ArrowRight size={14} aria-hidden="true" />
//                 </Link> */}

//             {/* Primary CTA - Add to Cart */}
//             {/* <motion.button
//                   whileTap={{ scale: 0.96 }}
//                   className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm 
//                   `}
//                 > */}
//             {/* {inCart
//                     ? <>
//                     <Check size={12} aria-hidden="true" /> In Cart</> */}
//             {/* : <> */}
//             {/* <ShoppingCart size={12} aria-hidden="true" /> Add to Cart */}
//             {/* </>
//                   } */}
//             {/* </motion.button> */}

//             {/* Secondary: view detail arrow */}
//             <Link
//               href={`/report-name/${report.seo_slug}`}
//               className="flex items-center justify-center size-8 rounded-xl bg-slate-50 text-slate-400 hover:bg-primary/8 hover:text-primary transition-colors duration-200 flex-shrink-0"
//               aria-label={`View ${report.title} details`}
//             >
//               <ArrowRight size={14} aria-hidden="true" />
//             </Link>
//            </>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.article>
//   );
// }






"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShoppingCart,
  Check,
  Download,
  ArrowRight,
  FileText,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

export default function ReportCard({ report }) {
  // const { hasReport } = useAuth()
  const { addToCart, isInCart } = useCart();
  // const owned = hasReport(report.id)
  // const inCart = isInCart(report.id)

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const router = useRouter();

    const pathname = usePathname();
// const searchParams = useSearchParams();

  // const handleAddToCart = (report) => {
  //   const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

  // if (!token) {
  //   router.push("/login");
  //   return;
  // }
  //   addToCart(report);
  //   // setCartAdded(true);
  //   // setTimeout(() => setCartAdded(false), 2000);
  // };

  const handleAddToCart = (report) => {
  const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

  if (!token) {
    // const currentPage =
    //   pathname +
    //   (searchParams.toString() ? `?${searchParams.toString()}` : "");

    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
    return;
  }

  addToCart(report);
};

  const handleDownload = async (slug) => {
  try {
    const token = localStorage.getItem("1r#efp@G6*6dIBELf^8j");

    const response = await axios.get(
      `${BASE_URL}/reports/${slug}/download`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status===200 && response.data?.download_url) {
      window.open(response.data.download_url, "_blank");
    }
  } catch (error) {
    console.error("Download error:", error);
  }
};

  /* ── LIST LAYOUT ─────────────────────────────────────────── */
  // if (layout === 'list') {
  //   return (
  //     <motion.article
  //       whileHover={{ boxShadow: '0 6px 24px rgba(0,0,0,0.07)' }}
  //       transition={{ duration: 0.2 }}
  //       className={`relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm flex items-center gap-4 p-4 ${className}`}
  //     >
  //       {/* Icon */}
  //       <div className="size-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
  //         <FileText size={20} className="text-primary" aria-hidden="true" />
  //       </div>

  //       {/* Centre: info */}
  //       <div className="flex-1 min-w-0">
  //         <div className="flex items-center gap-1.5 mb-1 text-xs text-slate-400">
  //           <span className="text-primary font-medium">{report.industry}</span>
  //           <span aria-hidden="true">·</span>
  //           <span>{report.reportTypeName}</span>
  //           {owned && (
  //             <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold border border-green-200 text-[10px]">Owned</span>
  //           )}
  //         </div>
  //         <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 mb-0.5">
  //           <Link href={`/report-name/${report.slug}`} className="hover:text-primary transition-colors duration-200">
  //             {report.title}
  //           </Link>
  //         </h3>
  //         <p className="text-xs text-slate-400 line-clamp-1 mb-1.5">{report.description}</p>
  //         <div className="flex items-center gap-3 text-xs text-slate-400">
  //           <span className="flex items-center gap-1">
  //             <TrendingUp size={10} className="text-primary" aria-hidden="true" />
  //             {report.keyMetrics.cagr} CAGR
  //           </span>
  //           <span className="text-slate-200" aria-hidden="true">|</span>
  //           <span className="font-medium text-slate-600">{report.keyMetrics.marketSize}</span>
  //           <span className="text-slate-200" aria-hidden="true">|</span>
  //           <span>{report.pages}p</span>
  //         </div>
  //       </div>

  //       {/* Right: price + CTA */}
  //       <div className="flex flex-col items-end gap-2 flex-shrink-0">
  //         <div>
  //           <span className="text-lg font-black text-slate-900">${report.price}</span>
  //           <span className="text-[10px] text-slate-400 ml-1">USD</span>
  //         </div>
  //         {owned ? (
  //           <Link
  //             href={`/report-name/${report.slug}`}
  //             className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
  //           >
  //             <Download size={12} aria-hidden="true" />
  //             Download
  //           </Link>
  //         ) : (
  //           <div className="flex items-center gap-2">
  //             <motion.button
  //               whileTap={{ scale: 0.96 }}
  //               onClick={handleAddToCart}
  //               aria-label={inCart ? 'Already in cart' : `Add ${report.title} to cart`}
  //               className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
  //                 inCart
  //                   ? 'bg-green-50 text-green-700 border border-green-200'
  //                   : 'bg-primary text-white hover:bg-primary-dark shadow-primary/20'
  //               }`}
  //             >
  //               {inCart
  //                 ? <><Check size={12} aria-hidden="true" /> In Cart</>
  //                 : <><ShoppingCart size={12} aria-hidden="true" /> Add to Cart</>
  //               }
  //             </motion.button>
  //             <Link
  //               href={`/report-name/${report.slug}`}
  //               className="flex items-center justify-center size-8 rounded-xl bg-slate-50 text-slate-400 hover:bg-primary/8 hover:text-primary transition-colors duration-200"
  //               aria-label={`View ${report.title} details`}
  //             >
  //               <ArrowRight size={14} aria-hidden="true" />
  //             </Link>
  //           </div>
  //         )}
  //       </div>
  //     </motion.article>
  //   )
  // }

  /* ── GRID LAYOUT (default) ───────────────────────────────── */
  return (
    <motion.article
      whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
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
        <div className="flex items-center gap-3 mb-5 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <TrendingUp size={11} className="text-primary" aria-hidden="true" />
            {report?.cagr}% CAGR
          </span>
          <span className="text-slate-200" aria-hidden="true">
            |
          </span>
          <span className="font-medium text-slate-700">
            ${report?.market_size}
          </span>
          {/* <span className="text-slate-200" aria-hidden="true">|</span>
          <span>{report?.pages}p</span> */}
        </div>

        {/* Footer: price + action */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex flex-col">
            <span className="text-lg font-black text-slate-900 leading-none">
              ${report?.full_price}
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">USD · PDF</span>
          </div>

          <div className="flex items-center gap-2">
            {report?.owned ? (
            <button
                // href={`/report-name/${report.seo_slug}`}
                onClick={() => handleDownload(report.seo_slug)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Download size={12} aria-hidden="true" />
                Download
              </button>
             ) : (
              <>
            {/* Primary CTA - Add to Cart */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={()=>handleAddToCart(report.seo_slug)}
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
                  <Check size={12} aria-hidden="true" /> In Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={12} aria-hidden="true" /> Add to Cart
                </>
              )}
            </motion.button>

            {/* Secondary: view detail arrow */}
            {/* <Link
                  href={`/report-name/${report.slug}`}
                  className="flex items-center justify-center size-8 rounded-xl bg-slate-50 text-slate-400 hover:bg-primary/8 hover:text-primary transition-colors duration-200 flex-shrink-0"
                  aria-label={`View ${report.title} details`}
                >
                  <ArrowRight size={14} aria-hidden="true" />
                </Link> */}

            {/* Primary CTA - Add to Cart */}
            {/* <motion.button
                  whileTap={{ scale: 0.96 }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm 
                  `}
                > */}
            {/* {inCart
                    ? <>
                    <Check size={12} aria-hidden="true" /> In Cart</> */}
            {/* : <> */}
            {/* <ShoppingCart size={12} aria-hidden="true" /> Add to Cart */}
            {/* </>
                  } */}
            {/* </motion.button> */}

            {/* Secondary: view detail arrow */}
            <Link
              href={`/report-name/${report.seo_slug}`}
              className="flex items-center justify-center size-8 rounded-xl bg-slate-50 text-slate-400 hover:bg-primary/8 hover:text-primary transition-colors duration-200 flex-shrink-0"
              aria-label={`View ${report.title} details`}
            >
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
           </>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

