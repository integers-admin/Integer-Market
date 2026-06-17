// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   Trash2,
//   ShoppingCart,
//   ArrowRight,
//   FileText,
//   Tag,
//   TicketPercent,
//   CheckCircle2,
//   AlertCircle,
// } from "lucide-react";
// import { useCart } from "../../context/CartContext";

// function PaymentIcons() {
//   return (
//     <div className="flex items-center gap-2 mt-4">
//       <div className="px-2 py-1 border border-slate-200 rounded bg-white flex items-center">
//         <svg width="32" height="12" viewBox="0 0 60 20" aria-label="Visa">
//           <text
//             x="0"
//             y="16"
//             fontFamily="Arial"
//             fontWeight="bold"
//             fontSize="16"
//             fill="#1a1f71"
//           >
//             VISA
//           </text>
//         </svg>
//       </div>
//       <div className="px-2 py-1 border border-slate-200 rounded bg-white flex items-center gap-0.5">
//         <div className="w-4 h-4 rounded-full bg-red-500 opacity-90" />
//         <div className="w-4 h-4 rounded-full bg-amber-400 -ml-2" />
//       </div>
//       <div className="px-2 py-1 border border-slate-200 rounded bg-[#2E77BC] flex items-center">
//         <svg
//           width="32"
//           height="12"
//           viewBox="0 0 80 20"
//           aria-label="American Express"
//         >
//           <text
//             x="0"
//             y="14"
//             fontFamily="Arial"
//             fontWeight="bold"
//             fontSize="11"
//             fill="white"
//           >
//             AMEX
//           </text>
//         </svg>
//       </div>
//       <div className="px-2 py-1 border border-slate-200 rounded bg-white flex items-center">
//         <svg width="36" height="14" viewBox="0 0 80 24" aria-label="Razorpay">
//           <text
//             x="0"
//             y="17"
//             fontFamily="Arial"
//             fontWeight="bold"
//             fontSize="13"
//             fill="#3395FF"
//           >
//             Rzpay
//           </text>
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default function CartDrawer() {
//   const {
//     cartItems,
//     cartOpen,
//     setCartOpen,
//     removeFromCart,
//     cartCount,
//     subtotal,
//     discount,
//     discountRate,
//     total,
//     couponCode,
//     couponError,
//     appliedCouponLabel,
//     applyCoupon,
//     removeCoupon,
//   } = useCart();

//   const router = useRouter();

//   const [couponInput, setCouponInput] = useState("");
//   const [couponSuccess, setCouponSuccess] = useState(false);

//   // Lock body scroll
//   useEffect(() => {
//     document.body.style.overflow = cartOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [cartOpen]);

//   // Escape key
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") setCartOpen(false);
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [setCartOpen]);

//   // // Reset coupon input when drawer closes
//   // useEffect(() => {
//   //   if (!cartOpen) {
//   //     setCouponInput("");
//   //     setCouponSuccess(false);
//   //   }
//   // }, [cartOpen]);

//   // const handleApplyCoupon = () => {
//   //   const ok = applyCoupon(couponInput);
//   //   if (ok) {
//   //     setCouponSuccess(true);
//   //     setCouponInput("");
//   //   } else setCouponSuccess(false);
//   // };

//   // const handleRemoveCoupon = () => {
//   //   removeCoupon();
//   //   setCouponInput("");
//   //   setCouponSuccess(false);
//   // };

//   const goToCheckout = () => {
//     setCartOpen(false);
//     router.push("/checkout");
//   };

//   return (
//     <AnimatePresence>
//       {cartOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             key="cart-backdrop"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
//             onClick={() => setCartOpen(false)}
//             aria-hidden="true"
//           />

//           {/* Drawer */}
//           <motion.aside
//             key="cart-drawer"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 340, damping: 38 }}
//             className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Shopping cart"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
//               <div className="flex items-center gap-2.5">
//                 <ShoppingCart
//                   size={20}
//                   className="text-slate-700"
//                   aria-hidden="true"
//                 />
//                 <h2 className="text-lg font-bold text-slate-900">My Cart</h2>
//                 {cartCount > 0 && (
//                   <span className="size-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
//                     {cartCount}
//                   </span>
//                 )}
//               </div>
//               <button
//                 onClick={() => setCartOpen(false)}
//                 aria-label="Close cart"
//                 className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
//               >
//                 <X size={20} aria-hidden="true" />
//               </button>
//             </div>

//             {/* Items */}
//             <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
//               <AnimatePresence initial={false}>
//                 {cartItems.length === 0 ? (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="flex flex-col items-center justify-center py-20 text-center"
//                   >
//                     <ShoppingCart
//                       size={40}
//                       className="text-slate-200 mb-4"
//                       aria-hidden="true"
//                     />
//                     <p className="font-semibold text-slate-700 mb-1">
//                       Your cart is empty
//                     </p>
//                     <p className="text-sm text-slate-400 mb-6">
//                       Browse our reports and add to cart
//                     </p>
//                     <button
//                       onClick={() => {
//                         setCartOpen(false);
//                         router.push("/report");
//                       }}
//                       className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer"
//                     >
//                       Browse Reports
//                     </button>
//                   </motion.div>
//                 ) : (
//                   cartItems?.map((item,i) => {
//                     return (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm"
//                       >
//                         <div className="flex items-start gap-3">
//                           <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
//                             <FileText
//                               size={15}
//                               className="text-primary"
//                               aria-hidden="true"
//                             />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
//                               {item.title}
//                             </p>
//                             {/* <p className="text-xs text-slate-400 mt-0.5">{item.industryName}</p> */}
//                           </div>
//                           <button
//                             onClick={() => removeFromCart(item.id)}
//                             aria-label={`Remove ${item.title} from cart`}
//                             className="p-1.5 rounded-lg text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors cursor-pointer flex-shrink-0"
//                           >
//                             <Trash2 size={15} aria-hidden="true" />
//                           </button>
//                         </div>
//                         <div className="mt-3 flex items-center justify-between">
//                           <span className="text-xs text-slate-400">
//                             {/* {console.log(item.pages)} */}
//                             {item?.pages} pages · PDF · Instant access
//                           </span>
//                           <span className="text-base font-bold text-slate-900">
//                             ${item?.price_cents}
//                           </span>
//                         </div>
//                       </motion.div>
//                     );
//                   })
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Footer - coupon + summary + checkout */}
//             {cartItems.length > 0 && (
//               <div className="border-t border-slate-100 px-6 pt-4 pb-6 space-y-4">
//                 {/* ── Coupon Code ─────────────────────────────── */}
//                 {/* <div>
//                   {couponCode ? (
//                     <motion.div
//                       initial={{ opacity: 0, y: -4 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="flex items-center justify-between px-3 py-2.5 bg-green-50 border border-green-200 rounded-xl"
//                     >
//                       <div className="flex items-center gap-2">
//                         <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" aria-hidden="true" />
//                         <div>
//                           <p className="text-xs font-bold text-green-700">{couponCode} applied!</p>
//                           <p className="text-[10px] text-green-600">{appliedCouponLabel}</p>
//                         </div>
//                       </div>
//                       <button
//                         onClick={handleRemoveCoupon}
//                         className="text-[10px] text-green-600 hover:text-red-500 font-semibold underline transition-colors cursor-pointer"
//                         aria-label="Remove coupon"
//                       >
//                         Remove
//                       </button>
//                     </motion.div>
//                   ) : (
//                     <div className="space-y-1.5">
//                       <label htmlFor="coupon-input" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
//                         <TicketPercent size={13} className="text-primary" aria-hidden="true" />
//                         Have a coupon code?
//                       </label>
//                       <div className="flex gap-2">
//                         <input
//                           id="coupon-input"
//                           type="text"
//                           value={couponInput}
//                           onChange={e => setCouponInput(e.target.value.toUpperCase())}
//                           onKeyDown={e => e.key === 'Enter' && handleApplyCoupon()}
//                           placeholder="e.g. FIRST20"
//                           className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-primary transition-colors uppercase tracking-widest font-mono"
//                           aria-describedby={couponError ? 'coupon-error' : undefined}
//                         />
//                         <button
//                           onClick={handleApplyCoupon}
//                           className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer whitespace-nowrap"
//                         >
//                           Apply
//                         </button>
//                       </div>
//                       {couponError && (
//                         <p id="coupon-error" className="flex items-center gap-1.5 text-[11px] text-red-500">
//                           <AlertCircle size={11} aria-hidden="true" />
//                           {couponError}
//                         </p>
//                       )}
//                     </div>
//                   )}
//                 </div> */}

//                 {/* ── Bulk discount badge ──────────────────────── */}
//                 {/* {discount > 0 && !couponCode && (
//                   <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl">
//                     <Tag size={13} className="text-amber-600 flex-shrink-0" aria-hidden="true" />
//                     <span className="text-xs text-amber-700 font-medium">
//                       {Math.round(discountRate * 100)}% bulk discount - {cartCount} reports purchased
//                     </span>
//                   </div>
//                 )} */}

//                 {/* ── Pricing breakdown ────────────────────────── */}
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm text-slate-600">
//                     <span>
//                       Subtotal ({cartCount} report{cartCount > 1 ? "s" : ""})
//                     </span>
//                     <span className="font-semibold text-slate-900">
//                       ${subtotal}
//                     </span>
//                   </div>
//                   {/* {discount > 0 && (
//                     <div className="flex justify-between text-sm text-green-600">
//                       <span className="flex items-center gap-1">
//                         {couponCode ? <TicketPercent size={12} aria-hidden="true" /> : <Tag size={12} aria-hidden="true" />}
//                         {couponCode ? `Coupon (${couponCode})` : 'Bulk discount'}
//                       </span>
//                       <span className="font-semibold">−${discount.toLocaleString()}</span>
//                     </div>
//                   )} */}
//                   <div className="flex justify-between text-xs text-slate-400">
//                     <span>Taxes</span>
//                     <span>Calculated at checkout</span>
//                   </div>
//                   <div className="flex justify-between border-t border-slate-100 pt-2">
//                     <span className="font-bold text-slate-900">Total</span>
//                     <span className="font-black text-xl text-slate-900">
//                       ${subtotal}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={goToCheckout}
//                   className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-md"
//                 >
//                   Go to Checkout <ArrowRight size={16} aria-hidden="true" />
//                 </button>

//                 <button
//                   onClick={() => setCartOpen(false)}
//                   className="w-full py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
//                 >
//                   Continue shopping
//                 </button>

//                 <PaymentIcons />
//               </div>
//             )}
//           </motion.aside>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Trash2,
  ShoppingCart,
  ArrowRight,
  FileText,
  Tag,
  // TicketPercent,
  // CheckCircle2,
  // AlertCircle,
} from "lucide-react";
import { useCart } from "../../context/CartContext";

function PaymentIcons() {
  return (
    <div className="flex items-center gap-2 mt-4">
      <div className="px-2 py-1 border border-slate-200 rounded bg-white flex items-center">
        <svg width="32" height="12" viewBox="0 0 60 20" aria-label="Visa">
          <text
            x="0"
            y="16"
            fontFamily="Arial"
            fontWeight="bold"
            fontSize="16"
            fill="#1a1f71"
          >
            VISA
          </text>
        </svg>
      </div>
      <div className="px-2 py-1 border border-slate-200 rounded bg-white flex items-center gap-0.5">
        <div className="w-4 h-4 rounded-full bg-red-500 opacity-90" />
        <div className="w-4 h-4 rounded-full bg-amber-400 -ml-2" />
      </div>
      <div className="px-2 py-1 border border-slate-200 rounded bg-[#2E77BC] flex items-center">
        <svg
          width="32"
          height="12"
          viewBox="0 0 80 20"
          aria-label="American Express"
        >
          <text
            x="0"
            y="14"
            fontFamily="Arial"
            fontWeight="bold"
            fontSize="11"
            fill="white"
          >
            AMEX
          </text>
        </svg>
      </div>
      <div className="px-2 py-1 border border-slate-200 rounded bg-white flex items-center">
        <svg width="36" height="14" viewBox="0 0 80 24" aria-label="Razorpay">
          <text
            x="0"
            y="17"
            fontFamily="Arial"
            fontWeight="bold"
            fontSize="13"
            fill="#3395FF"
          >
            Rzpay
          </text>
        </svg>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    removeFromCart,
    cartCount,
    subtotal,
    discount,
    discountRate,
    total,
    // couponCode,
    // couponError,
    // applyCoupon,
    // removeCoupon,
  } = useCart();

  const router = useRouter();

  // const [couponInput, setCouponInput] = useState("");
  // const [couponSuccess, setCouponSuccess] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  // Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setCartOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setCartOpen]);

  // Reset coupon input when drawer closes
  // useEffect(() => {
  //   if (!cartOpen) {
  //     setCouponInput("");
  //     setCouponSuccess(false);
  //   }
  // }, [cartOpen]);

  // const handleApplyCoupon = async () => {
  //   const ok = await applyCoupon(couponInput);

  //   console.log("coupon code ok: ",ok);

  //   if (ok) {
  //     setCouponSuccess(true);
  //     setCouponInput("");
  //   } else setCouponSuccess(false);
  // };

  // const handleApplyCoupon = async () => {
  //   const ok = await applyCoupon(couponInput);

  //   console.log("coupon code ok:", ok);

  //   if (ok) {
  //     setCouponSuccess(true);
  //     setCouponInput("");
  //   } else {
  //     setCouponSuccess(false);
  //   }
  // };

  // const handleRemoveCoupon = () => {
  //   removeCoupon();
  //   setCouponInput("");
  //   setCouponSuccess(false);
  // };

  const goToCheckout = () => {
    setCartOpen(false);
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            key="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 38 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <ShoppingCart
                  size={20}
                  className="text-slate-700"
                  aria-hidden="true"
                />
                <h2 className="text-lg font-bold text-slate-900">My Cart</h2>
                {cartCount > 0 && (
                  <span className="size-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              <AnimatePresence initial={false}>
                {cartItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <ShoppingCart
                      size={40}
                      className="text-slate-200 mb-4"
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-slate-700 mb-1">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-slate-400 mb-6">
                      Browse our reports and add to cart
                    </p>
                    <button
                      onClick={() => {
                        setCartOpen(false);
                        router.push("/report");
                      }}
                      className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer"
                    >
                      Browse Reports
                    </button>
                  </motion.div>
                ) : (
                  cartItems?.map((item, i) => {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FileText
                              size={15}
                              className="text-primary"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                              {item.title}
                            </p>
                            {/* <p className="text-xs text-slate-400 mt-0.5">{item.industryName}</p> */}
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.title} from cart`}
                            className="p-1.5 rounded-lg text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors cursor-pointer flex-shrink-0"
                          >
                            <Trash2 size={15} aria-hidden="true" />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-slate-400">
                            {/* {console.log(item.pages)} */}
                            {item?.pages} pages · PDF · Instant access
                          </span>
                          <span className="text-base font-bold text-slate-900">
                            ${item?.price_cents}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

            {/* Footer - coupon + summary + checkout */}
            {cartItems.length > 0 && (
              <div className="border-t border-slate-100 px-6 pt-4 pb-6 space-y-4">
                {/* ── Coupon Code ─────────────────────────────── */}
                {/* <div>
                  {couponCode ? (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between px-3 py-2.5 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-green-600 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-xs font-bold text-green-700">
                            {couponCode} applied!
                          </p>
                          
                        </div>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-[10px] text-green-600 hover:text-red-500 font-semibold underline transition-colors cursor-pointer"
                        aria-label="Remove coupon"
                      >
                        Remove
                      </button>
                    </motion.div>
                  ) : (
                    <div className="space-y-1.5">
                      <label
                        htmlFor="coupon-input"
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-500"
                      >
                        <TicketPercent
                          size={13}
                          className="text-primary"
                          aria-hidden="true"
                        />
                        Have a coupon code?
                      </label>
                      <div className="flex gap-2">
                        <input
                          id="coupon-input"
                          type="text"
                          value={couponInput}
                          onChange={(e) =>
                            setCouponInput(e.target.value.toUpperCase())
                          }
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleApplyCoupon()
                          }
                          placeholder="e.g. FIRST20"
                          className="flex-1 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-primary transition-colors uppercase tracking-widest font-mono"
                          aria-describedby={
                            couponError ? "coupon-error" : undefined
                          }
                        />
                        <button
                          onClick={handleApplyCoupon}
                          className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Apply
                        </button>
                      </div>
                      {couponError && (
                        <p
                          id="coupon-error"
                          className="flex items-center gap-1.5 text-[11px] text-red-500"
                        >
                          <AlertCircle size={11} aria-hidden="true" />
                          {couponError}
                        </p>
                      )}
                    </div>
                  )}
                </div> */}

                {/* ── Bulk discount badge ──────────────────────── */}
                {discount > 0 && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl">
                    <Tag
                      size={13}
                      className="text-amber-600 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-amber-700 font-medium">
                      {Math.round(discountRate * 100)}% bulk discount -{" "}
                      {cartCount} reports purchased
                    </span>
                  </div>
                )}

                {/* ── Pricing breakdown ────────────────────────── */}
                {/* <div className="space-y-2">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>
                      Subtotal ({cartCount} report{cartCount > 1 ? "s" : ""})
                    </span> */}
                {/* <span className="font-semibold text-slate-900">
                      ${subtotal}
                    </span> */}

                {/* {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Coupon ({couponCode})</span>
                        <span>- ${discount}</span>
                      </div>
                    )}

                    <div className="flex justify-between border-t border-slate-100 pt-2">
                      <span className="font-bold text-slate-900">Total</span>
                      <span className="font-black text-xl text-slate-900">
                        ${discount > 0 ? total : subtotal}
                      </span>
                    </div>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span className="flex items-center gap-1">
                        {couponCode ? (
                          <TicketPercent size={12} aria-hidden="true" />
                        ) : (
                          <Tag size={12} aria-hidden="true" />
                        )}
                        {couponCode
                          ? `Coupon (${couponCode})`
                          : "Bulk discount"}
                      </span>
                      <span className="font-semibold">
                        −${discount.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Taxes</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-100 pt-2">
                    <span className="font-bold text-slate-900">Total</span> */}
                {/* <span className="font-black text-xl text-slate-900">
                      ${subtotal}
                    </span> */}

                {/* {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Coupon ({couponCode})</span>
                        <span>- ${discount}</span>
                      </div>
                    )}

                    <div className="flex justify-between border-t border-slate-100 pt-2">
                      <span className="font-bold text-slate-900">Total</span>
                      <span className="font-black text-xl text-slate-900">
                        ${discount > 0 ? total : subtotal}
                      </span>
                    </div>
                  </div>
                </div> */}

                <div className="space-y-2">
                  {/* Subtotal */}
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>
                      Subtotal ({cartCount} report{cartCount > 1 ? "s" : ""})
                    </span>
                    <span className="font-semibold text-slate-900">
                      ${subtotal}
                    </span>
                  </div>

                  {/* Coupon Discount */}
                  {/* {couponCode && discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span className="flex items-center gap-1">
                        <TicketPercent size={12} />
                        Coupon ({couponCode})
                      </span>
                      <span className="font-semibold">- ${discount}</span>
                    </div>
                  )} */}

                  {/* Taxes */}
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Taxes</span>
                    <span>Calculated at checkout</span>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between border-t border-slate-100 pt-2">
                    <span className="font-bold text-slate-900">Total</span>
                    <span className="font-black text-xl text-slate-900">
                      {/* ${couponCode && discount > 0 ? total : subtotal} */}
                      ${total}
                    </span>
                  </div>
                </div>

                <button
                  onClick={goToCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-md"
                >
                  Go to Checkout <ArrowRight size={16} aria-hidden="true" />
                </button>

                <button
                  onClick={() => setCartOpen(false)}
                  className="w-full py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  Continue shopping
                </button>

                <PaymentIcons />
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
