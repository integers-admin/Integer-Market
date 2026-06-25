// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronRight,
//   CheckCircle,
//   Lock,
//   CreditCard,
//   MapPin,
//   User,
//   FileText,
//   Tag,
//   ShieldCheck,
//   ArrowLeft,
//   X,
// } from "lucide-react";
// import Logo from "../components/ui/Logo";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";
// import { useRazorpay } from "../hooks/useRazorpay";
// import { toast } from "react-toastify";

// import { useSearchParams } from "next/navigation";

// const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const STEPS = [
//   { id: "contact", label: "Contact Details" },
//   { id: "payment", label: "Payment Method" },
// ];

// function FieldError({ msg }) {
//   if (!msg) return null;
//   return (
//     <p
//       className="mt-1 text-xs text-red-500 flex items-center gap-1"
//       role="alert"
//     >
//       {msg}
//     </p>
//   );
// }

// function inputCls(touched, error) {
//   return `w-full px-4 py-3 bg-white border rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none transition-colors ${
//     touched && error
//       ? "border-red-400 focus:border-red-400"
//       : "border-slate-200 focus:border-primary"
//   }`;
// }

// // ── Step 1: Contact Details ───────────────────────────────────────────────────
// function ContactStep({ data, onChange, errors, touched, onTouch }) {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-bold text-slate-900 mb-5">Contact Details</h2>
//       <div className="grid grid-cols-1 gap-4">
//         <div>
//           <label
//             htmlFor="c-first"
//             className="block text-sm font-medium text-slate-700 mb-1.5"
//           >
//             First Name *
//           </label>
//           <input
//             id="c-first"
//             type="text"
//             placeholder="Alex"
//             value={data.firstName}
//             onChange={(e) => onChange("firstName", e.target.value)}
//             onBlur={() => onTouch("firstName")}
//             className={inputCls(touched.firstName, errors.firstName)}
//           />
//           <FieldError msg={touched.firstName ? errors.firstName : ""} />
//         </div>
//         {/* <div>
//           <label htmlFor="c-last" className="block text-sm font-medium text-slate-700 mb-1.5">Last Name *</label>
//           <input id="c-last" type="text" placeholder="Johnson" value={data.lastName}
//             onChange={e => onChange('lastName', e.target.value)} onBlur={() => onTouch('lastName')}
//             className={inputCls(touched.lastName, errors.lastName)} />
//           <FieldError msg={touched.lastName ? errors.lastName : ''} />
//         </div> */}
//       </div>
//       <div>
//         <label
//           htmlFor="c-email"
//           className="block text-sm font-medium text-slate-700 mb-1.5"
//         >
//           Email Address *
//         </label>
//         <input
//           id="c-email"
//           type="email"
//           placeholder="alex@company.com"
//           value={data.email}
//           onChange={(e) => onChange("email", e.target.value)}
//           onBlur={() => onTouch("email")}
//           className={inputCls(touched.email, errors.email)}
//         />
//         <FieldError msg={touched.email ? errors.email : ""} />
//       </div>
//       <div>
//         <label
//           htmlFor="c-company"
//           className="block text-sm font-medium text-slate-700 mb-1.5"
//         >
//           Company Name *
//         </label>
//         <input
//           id="c-company"
//           type="text"
//           placeholder="Your company"
//           value={data.company}
//           onChange={(e) => onChange("company", e.target.value)}
//           onBlur={() => onTouch("company")}
//           className={inputCls(touched.company, errors.company)}
//         />
//         <FieldError msg={touched.company ? errors.company : ""} />
//       </div>
//       {/* <div>
//         <label htmlFor="c-phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
//         <input id="c-phone" type="tel" placeholder="+91 98765 43210" value={data.phone}
//           onChange={e => onChange('phone', e.target.value)} onBlur={() => onTouch('phone')}
//           className={inputCls(touched.phone, errors.phone)} />
//         <FieldError msg={touched.phone ? errors.phone : ''} />
//       </div> */}
//       {/* Returning customer note */}
//       <div className="flex items-center gap-2.5 p-3 bg-slate-50 border border-slate-200 rounded-xl">
//         <User
//           size={15}
//           className="text-primary flex-shrink-0"
//           aria-hidden="true"
//         />
//         <p className="text-sm text-slate-600">
//           Returning customer?{" "}
//           <Link
//             href="/login"
//             className="text-primary font-semibold hover:text-primary-dark transition-colors"
//           >
//             Click here to login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// // ── Step 2: Billing Address ───────────────────────────────────────────────────
// // function BillingStep({ data, onChange, errors, touched, onTouch }) {
// //   return (
// //     <div className="space-y-4">
// //       <h2 className="text-xl font-bold text-slate-900 mb-5">Billing Address</h2>
// //       <div>
// //         <label htmlFor="b-address" className="block text-sm font-medium text-slate-700 mb-1.5">Street Address *</label>
// //         <input id="b-address" type="text" placeholder="123 Business Park, Suite 4" value={data.address}
// //           onChange={e => onChange('address', e.target.value)} onBlur={() => onTouch('address')}
// //           className={inputCls(touched.address, errors.address)} />
// //         <FieldError msg={touched.address ? errors.address : ''} />
// //       </div>
// //       <div className="grid grid-cols-2 gap-4">
// //         <div>
// //           <label htmlFor="b-city" className="block text-sm font-medium text-slate-700 mb-1.5">City *</label>
// //           <input id="b-city" type="text" placeholder="Mumbai" value={data.city}
// //             onChange={e => onChange('city', e.target.value)} onBlur={() => onTouch('city')}
// //             className={inputCls(touched.city, errors.city)} />
// //           <FieldError msg={touched.city ? errors.city : ''} />
// //         </div>
// //         <div>
// //           <label htmlFor="b-state" className="block text-sm font-medium text-slate-700 mb-1.5">State / Province *</label>
// //           <input id="b-state" type="text" placeholder="Maharashtra" value={data.state}
// //             onChange={e => onChange('state', e.target.value)} onBlur={() => onTouch('state')}
// //             className={inputCls(touched.state, errors.state)} />
// //           <FieldError msg={touched.state ? errors.state : ''} />
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-2 gap-4">
// //         <div>
// //           <label htmlFor="b-zip" className="block text-sm font-medium text-slate-700 mb-1.5">ZIP / Postal Code *</label>
// //           <input id="b-zip" type="text" placeholder="400001" value={data.zip}
// //             onChange={e => onChange('zip', e.target.value)} onBlur={() => onTouch('zip')}
// //             className={inputCls(touched.zip, errors.zip)} />
// //           <FieldError msg={touched.zip ? errors.zip : ''} />
// //         </div>
// //         <div>
// //           <label htmlFor="b-country" className="block text-sm font-medium text-slate-700 mb-1.5">Country *</label>
// //           <select id="b-country" value={data.country}
// //             onChange={e => onChange('country', e.target.value)} onBlur={() => onTouch('country')}
// //             className={inputCls(touched.country, errors.country)}>
// //             <option value="">Select country</option>
// //             <option value="IN">India</option>
// //             <option value="US">United States</option>
// //             <option value="GB">United Kingdom</option>
// //             <option value="DE">Germany</option>
// //             <option value="SG">Singapore</option>
// //             <option value="AE">UAE</option>
// //             <option value="other">Other</option>
// //           </select>
// //           <FieldError msg={touched.country ? errors.country : ''} />
// //         </div>
// //       </div>
// //       <div>
// //         <label htmlFor="b-gstin" className="block text-sm font-medium text-slate-700 mb-1.5">
// //           GSTIN <span className="text-slate-400 font-normal">(optional, for Indian companies)</span>
// //         </label>
// //         <input id="b-gstin" type="text" placeholder="22AAAAA0000A1Z5" value={data.gstin}
// //           onChange={e => onChange('gstin', e.target.value)}
// //           className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors" />
// //       </div>
// //     </div>
// //   )
// // }

// // ── Step 3: Payment Method ────────────────────────────────────────────────────
// function PaymentStep({
//   data,
//   onChange,
//   errors,
//   touched,
//   onTouch,
//   onPay,
//   loading,
// }) {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-bold text-slate-900 mb-5">Payment Method</h2>

//       {/* Razorpay badge */}
//       <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
//         <ShieldCheck size={18} className="text-blue-600 flex-shrink-0" />
//         <div>
//           <p className="text-sm font-semibold text-blue-800">
//             Secured by Razorpay International
//           </p>
//           <p className="text-xs text-blue-600 mt-0.5">
//             SSL secured · PCI DSS compliant
//           </p>
//         </div>
//       </div>

//       {/* <div>
//         <label htmlFor="p-card" className="block text-sm font-medium text-slate-700 mb-1.5">Card Number *</label>
//         <div className="relative">
//           <input id="p-card" type="text" placeholder="4242 4242 4242 4242" maxLength={19} value={data.cardNumber}
//             onChange={e => onChange('cardNumber', e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim())}
//             onBlur={() => onTouch('cardNumber')}
//             className={inputCls(touched.cardNumber, errors.cardNumber) + ' pr-12'} />
//           <CreditCard size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
//         </div>
//         <FieldError msg={touched.cardNumber ? errors.cardNumber : ''} />
//       </div> */}

//       {/* <div>
//         <label htmlFor="p-name" className="block text-sm font-medium text-slate-700 mb-1.5">Cardholder Name *</label>
//         <input id="p-name" type="text" placeholder="Alex Johnson" value={data.cardName}
//           onChange={e => onChange('cardName', e.target.value)} onBlur={() => onTouch('cardName')}
//           className={inputCls(touched.cardName, errors.cardName)} />
//         <FieldError msg={touched.cardName ? errors.cardName : ''} />
//       </div> */}

//       {/* <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="p-exp" className="block text-sm font-medium text-slate-700 mb-1.5">Expiry Date *</label>
//           <input id="p-exp" type="text" placeholder="MM/YY" maxLength={5} value={data.expiry}
//             onChange={e => {
//               const v = e.target.value.replace(/\D/g, '').slice(0, 4)
//               onChange('expiry', v.length > 2 ? `${v.slice(0, 2)}/${v.slice(2)}` : v)
//             }}
//             onBlur={() => onTouch('expiry')}
//             className={inputCls(touched.expiry, errors.expiry)} />
//           <FieldError msg={touched.expiry ? errors.expiry : ''} />
//         </div>
//         <div>
//           <label htmlFor="p-cvv" className="block text-sm font-medium text-slate-700 mb-1.5">CVV *</label>
//           <input id="p-cvv" type="password" placeholder="•••" maxLength={4} value={data.cvv}
//             onChange={e => onChange('cvv', e.target.value.replace(/\D/g, ''))} onBlur={() => onTouch('cvv')}
//             className={inputCls(touched.cvv, errors.cvv)} />
//           <FieldError msg={touched.cvv ? errors.cvv : ''} />
//         </div>
//       </div> */}

//       {/* <div className="flex items-center gap-2 pt-1">
//         <span className="text-xs text-slate-400">Accepted:</span>
//         {['Visa', 'MC', 'Amex', 'RuPay'].map(card => (
//           <span key={card} className="px-2 py-0.5 border border-slate-200 rounded text-xs text-slate-500 bg-white font-medium">{card}</span>
//         ))}
//       </div> */}

//       <motion.button
//         whileHover={{ scale: 1.01 }}
//         whileTap={{ scale: 0.99 }}
//         type="button"
//         onClick={onPay}
//         disabled={loading}
//         className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer shadow-lg text-base mt-2"
//       >
//         {loading ? (
//           <>
//             <svg
//               className="animate-spin size-5"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               />
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//               />
//             </svg>
//             Processing...
//           </>
//         ) : (
//           <>
//             <Lock size={16} />
//             Pay via Razorpay
//           </>
//         )}
//       </motion.button>
//       <p className="text-center text-xs text-slate-400">
//         Your payment is secured and encrypted. By completing this purchase you
//         agree to our{" "}
//         <Link href="/term-conditions" className="text-primary hover:underline">
//           Terms
//         </Link>
//         .
//       </p>
//     </div>
//   );
// }

// // ── Order summary sidebar ─────────────────────────────────────────────────────
// function OrderSummary({
//   cartItems,
//   subtotal,
//   discount,
//   discountRate,
//   total,
//   couponCode,
//   couponError,
//   couponInput,
//   setCouponInput,
//   handleApplyCoupon,
//   handleRemoveCoupon,
// }) {
//   return (
//     <div className="bg-white border border-slate-100 rounded-2xl p-6 sticky top-24">
//       <h3 className="text-base font-bold text-slate-900 mb-4">Order Summary</h3>
//       <div className="space-y-3 mb-4">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-start gap-3 pb-3 border-b border-slate-50"
//           >
//             <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//               <FileText size={13} className="text-primary" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-sm font-medium text-slate-800 leading-snug line-clamp-2">
//                 {item.title}
//               </p>
//               <p className="text-xs text-slate-400 mt-0.5 font-bold">
//                 ${item.price_cents.toLocaleString()}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Coupon Section */}

//       <div className="mb-4">
//         {couponCode ? (
//           <div className="flex items-center justify-between px-3 py-2 bg-green-50 border border-green-200 rounded-xl">
//             <div>
//               <p className="text-sm font-semibold text-green-700">
//                 Coupon Applied
//               </p>
//               <p className="text-xs text-green-600">{couponCode}</p>
//             </div>

//             <button
//               onClick={handleRemoveCoupon}
//               className="text-red-500 text-xs font-semibold"
//             >
//               Remove
//             </button>
//           </div>
//         ) : (
//           <>
//             <label className="block text-sm font-medium text-slate-700 mb-2">
//               Coupon Code
//             </label>

//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Enter coupon"
//                 value={couponInput}
//                 onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
//                 className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
//               />

//               <button
//                 onClick={handleApplyCoupon}
//                 className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold"
//               >
//                 Apply
//               </button>
//             </div>

//             {couponError && (
//               <p className="text-red-500 text-xs mt-1">{couponError}</p>
//             )}
//           </>
//         )}
//       </div>

//       {discount > 0 && (
//         <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl">
//           <Tag size={12} className="text-amber-600" />
//           <span className="text-xs text-amber-700 font-medium">
//             {Math.round(discountRate * 100)}% bulk discount applied
//           </span>
//         </div>
//       )}

//       <div className="space-y-2 text-sm">
//         <div className="flex justify-between text-slate-600">
//           <span>Subtotal</span>
//           <span className="font-semibold">${subtotal.toLocaleString()}</span>
//         </div>
//         {discount > 0 && (
//           <div className="flex justify-between text-green-600">
//             <span>Discount</span>
//             <span className="font-semibold">-${discount.toLocaleString()}</span>
//           </div>
//         )}
//         <div className="flex justify-between text-slate-400 text-xs">
//           <span>Taxes</span>
//           <span>Calculated at checkout</span>
//         </div>
//         <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-slate-100 text-base">
//           <span>Total</span>
//           <span>${total}</span>
//         </div>
//       </div>

//       {/* Trust badges */}
//       <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
//         <ShieldCheck size={14} className="text-green-500" />
//         <span className="text-xs text-slate-400">Secure SSL checkout</span>
//       </div>
//     </div>
//   );
// }

// // ── Main Checkout page ────────────────────────────────────────────────────────
// export default function Checkout() {
//   const {
//     cartItems,
//     subtotal,
//     discount,
//     discountRate,
//     total,
//     clearCart,
//     getCartItems,
//   } = useCart();
//   const { isAuthenticated } = useAuth();
//   const router = useRouter();

//   const [stepIdx, setStepIdx] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [buyNowReport, setBuyNowReport] = useState(null);

//   const [contact, setContact] = useState({
//     firstName: "",
//     email: "",
//     company: "",
//   });
//   const [contactTouched, setContactTouched] = useState({});

//   const searchParams = useSearchParams();
//   const reportId = searchParams.get("reportId");

//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     const userData = localStorage.getItem("user");

//     if (userData) {
//       const user = JSON.parse(userData);

//       setContact({
//         firstName: user.full_name || "",
//         email: user.email || "",
//         company: user.company_name || "",
//       });
//     }
//   }, []);

//   const fetchBuyNowSummary = async () => {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/checkout/buy-now/summary?seo_slug=${reportId}`,
//       );

//       console.log("response:",response);

//       setBuyNowReport(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (!reportId) return;

//     fetchBuyNowSummary();
//   }, [reportId]);

//   // const [billing, setBilling] = useState({ address: '', city: '', state: '', zip: '', country: '', gstin: '' })
//   // const [billingTouched, setBillingTouched] = useState({})

//   const [payment, setPayment] = useState({
//     cardNumber: "",
//     cardName: "",
//     expiry: "",
//     cvv: "",
//   });
//   const [paymentTouched, setPaymentTouched] = useState({});

//   // Validators
//   const contactErrors = {
//     firstName: !contact.firstName.trim() ? "Required" : "",
//     email: !contact.email
//       ? "Required"
//       : !EMAIL_RE.test(contact.email)
//         ? "Enter a valid email"
//         : "",
//     company: !contact.company.trim() ? "Required" : "",
//   };
//   // const billingErrors = {
//   //   address: !billing.address.trim() ? 'Required' : '',
//   //   city: !billing.city.trim() ? 'Required' : '',
//   //   state: !billing.state.trim() ? 'Required' : '',
//   //   zip: !billing.zip.trim() ? 'Required' : '',
//   //   country: !billing.country ? 'Required' : '',
//   // }
//   const paymentErrors = {
//     cardNumber: !payment.cardNumber
//       ? "Required"
//       : payment.cardNumber.replace(/\s/g, "").length < 16
//         ? "Enter 16-digit card number"
//         : "",
//     cardName: !payment.cardName.trim() ? "Required" : "",
//     expiry: !payment.expiry
//       ? "Required"
//       : payment.expiry.length < 5
//         ? "Enter MM/YY"
//         : "",
//     cvv: !payment.cvv
//       ? "Required"
//       : payment.cvv.length < 3
//         ? "Enter 3-4 digit CVV"
//         : "",
//   };

//   const isContactValid = Object.values(contactErrors).every((e) => !e);
//   // const isBillingValid = Object.values(billingErrors).every(e => !e)
//   const isPaymentValid = Object.values(paymentErrors).every((e) => !e);

//   const touchAll = (setter, fields) => {
//     setter(Object.fromEntries(Object.keys(fields).map((k) => [k, true])));
//   };

//   const handleNext = () => {
//     touchAll(setContactTouched, contactErrors);

//     if (!isContactValid) return;

//     setStepIdx(1);
//   };

//   const { openCheckout } = useRazorpay();

//   const { couponCode, couponError, applyCoupon, removeCoupon } = useCart();

//   // const handleApplyCoupon = async () => {
//   //   if (!couponInput.trim()) return;

//   //   const ok = await applyCoupon(couponInput);

//   //   if (ok) {
//   //     toast.success("Coupon applied successfully");
//   //     setCouponInput("");
//   //   } else {
//   //     toast.error("Invalid coupon code");
//   //   }
//   // };

//   // const handleApplyCoupon = async () => {
//   //   if (!couponInput.trim()) return;

//   //   const ok = await applyCoupon(couponInput);

//   //   if (ok) {
//   //     if (reportId) {
//   //       await fetchBuyNowSummary();
//   //     }

//   //     toast.success("Coupon applied successfully");
//   //     setCouponInput("");
//   //   } else {
//   //     toast.error("Invalid coupon code");
//   //   }
//   // };
// //   const handleApplyCoupon = async () => {
// //   if (!couponInput.trim()) return;

// //   const ok = await applyCoupon(couponInput);

// //   if (ok) {
// //     if (reportId) {
// //       await fetchBuyNowSummary();

// //       // frontend 50% discount
// //       setBuyNowReport((prev) => {
// //         if (!prev) return prev;

// //         const discountAmount = prev.total_cents * 0.5;

// //         return {
// //           ...prev,
// //           coupon_discount_cents: discountAmount,
// //           total_cents: prev.total_cents - discountAmount,
// //         };
// //       });
// //     }

// //     toast.success("Coupon applied successfully");
// //     setCouponInput("");
// //   } else {
// //     toast.error("Invalid coupon code");
// //   }
// // };
// const handleApplyCoupon = async () => {
//   if (!couponInput.trim()) return;

//   const ok = await applyCoupon(couponInput);

//   if (ok) {
//     if (reportId) {
//       await fetchBuyNowSummary();

//       setBuyNowReport((prev) => {
//         if (!prev) return prev;

//         const discountAmount = Math.round(prev.total_cents * 0.5);

//         return {
//           ...prev,
//           coupon_discount_cents: discountAmount,
//           total_cents: prev.total_cents - discountAmount,
//         };
//       });
//     }

//     toast.success("Coupon applied successfully");
//     setCouponInput("");
//   } else {
//     toast.error("Invalid coupon code");
//   }
// };

//   // const handleRemoveCoupon = () => {
//   //   removeCoupon();
//   //   setCouponInput("");
//   // };

//   const handleRemoveCoupon = async () => {
//     removeCoupon();

//     if (reportId) {
//       await fetchBuyNowSummary();
//     }

//     setCouponInput("");
//   };

//   console.log("buyNowReport: ", buyNowReport);

//   const [couponInput, setCouponInput] = useState("");

//   // const handlePay = async () => {
//   //   alert("pay");
//   //   // touchAll(setPaymentTouched, paymentErrors)
//   //   // if (!isPaymentValid) return
//   //   // setLoading(true)
//   //   // await new Promise(r => setTimeout(r, 1800))
//   //   // setLoading(false)
//   //   // setSuccess(true)
//   //   // clearCart()
//   // }

//   const handlePay = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       // Order create API
//       const endpoint = reportId
//         ? `${BASE_URL}/checkout/buy-now/create-order`
//         : `${BASE_URL}/checkout/create-order`;

//       const payload = reportId
//         ? {
//             seo_slug: reportId,
//             coupon_code: couponCode || "",
//           }
//         : {
//             coupon_code: couponCode || "",
//           };

//       const response = await axios.post(endpoint, payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("response: --------------", response);

//       const order = response.data;

//       // Razorpay open
//       await openCheckout({
//         order,

//         customer: {
//           name: contact.firstName,
//           email: contact.email,
//           phone: contact.phone || "",
//         },

//         onSuccess: async (paymentResponse) => {
//           try {
//             const verifyResponse = await axios.post(
//               `${BASE_URL}/checkout/verify-payment`,
//               {
//                 razorpay_order_id: paymentResponse.razorpay_order_id,
//                 razorpay_payment_id: paymentResponse.razorpay_payment_id,
//                 razorpay_signature: paymentResponse.razorpay_signature,
//                 order_db_id: order.order_db_id,
//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               },
//             );

//             if (verifyResponse?.data?.success) {
//               await getCartItems();
//               toast.success("Payment successful, check email");
//               router.push("/dashboard");
//             } else {
//               toast.error("Payment verification failed");
//             }
//           } catch (err) {
//             console.log("Verify payment error:", err);
//             toast.error("Payment verification failed");
//           }
//         },

//         onDismiss: async (order) => {
//           if (!order?.order_db_id) return;

//           try {
//             await axios.post(
//               `${BASE_URL}/checkout/cancel-order`,
//               {
//                 order_db_id: order.order_db_id,
//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               },
//             );
//           } catch (err) {
//             console.log("Cancel order error:", err);
//           }
//         },
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // if (cartItems.length === 0 && !success) {
//   //   return (
//   //     <div className="min-h-screen flex items-center justify-center bg-slate-50">
//   //       <div className="text-center">
//   //         <p className="text-xl font-bold text-slate-900 mb-2">
//   //           Your cart is empty
//   //         </p>
//   //         <p className="text-slate-500 mb-6">
//   //           Add some reports before checking out.
//   //         </p>
//   //         <Link
//   //           href="/report"
//   //           className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
//   //         >
//   //           Browse Reports
//   //         </Link>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   if (!reportId && cartItems.length === 0 && !success) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-50">
//         <div className="text-center">
//           <p className="text-xl font-bold text-slate-900 mb-2">
//             Your cart is empty
//           </p>
//           <p className="text-slate-500 mb-6">
//             Add some reports before checking out.
//           </p>
//           <Link
//             href="/report"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
//           >
//             Browse Reports
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const checkoutItems = reportId ? buyNowReport?.items || [] : cartItems;

//   const checkoutSubtotal = reportId
//     ? buyNowReport?.subtotal_cents || 0
//     : subtotal;

//   const checkoutTotal = reportId ? buyNowReport?.total_cents || 0 : total;

//   const checkoutDiscount = reportId
//     ? buyNowReport?.coupon_discount_cents || 0
//     : discount;

//   console.log(
//     "new:::::::::",
//     checkoutItems,
//     checkoutSubtotal,
//     checkoutTotal,
//     checkoutDiscount,
//   );

//   if (success) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.4 }}
//           className="bg-white rounded-2xl border border-slate-100 shadow-xl p-10 text-center max-w-md w-full"
//         >
//           <div className="size-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
//             <CheckCircle size={36} className="text-green-500" />
//           </div>
//           <h1 className="text-2xl font-bold text-slate-900 mb-2">
//             Order Confirmed!
//           </h1>
//           <p className="text-slate-500 mb-6">
//             Your reports are being processed and will be available for download
//             shortly. A confirmation has been sent to{" "}
//             <strong>{contact.email}</strong>.
//           </p>
//           <div className="flex flex-col gap-3">
//             <Link
//               href="/dashboard"
//               className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
//             >
//               Go to Dashboard
//             </Link>
//             <Link
//               href="/report"
//               className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
//             >
//               Continue shopping
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Simple top bar with logo */}
//       <div className="bg-white border-b border-slate-100 px-6 py-4">
//         <div className="max-w-6xl mx-auto flex items-center justify-between">
//           <Link href="/" aria-label="Integer Market home">
//             <Logo className="h-8 w-auto" />
//           </Link>
//           <div className="flex items-center gap-2 text-xs text-slate-400">
//             <Lock size={12} className="text-green-500" />
//             Secure Checkout
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left: form */}
//           <div className="lg:col-span-2">
//             {/* Back button */}
//             <button
//               onClick={() =>
//                 stepIdx === 0 ? router.back() : setStepIdx((i) => i - 1)
//               }
//               className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer mb-6"
//             >
//               <ArrowLeft size={15} />
//               {stepIdx === 0 ? "Back to cart" : "Back"}
//             </button>

//             {/* Progress stepper */}
//             <div className="flex items-center gap-2 mb-8">
//               {STEPS.map((step, i) => (
//                 <div key={step.id} className="flex items-center gap-2 flex-1">
//                   <div
//                     className={`size-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors flex-shrink-0 ${
//                       i < stepIdx
//                         ? "bg-primary text-white"
//                         : i === stepIdx
//                           ? "border-2 border-primary text-primary bg-white"
//                           : "border-2 border-slate-200 text-slate-400 bg-white"
//                     }`}
//                   >
//                     {i < stepIdx ? <CheckCircle size={16} /> : i + 1}
//                   </div>
//                   <div className="flex-1">
//                     <p
//                       className={`text-xs font-medium leading-tight ${i === stepIdx ? "text-slate-900" : "text-slate-400"}`}
//                     >
//                       {step.label}
//                     </p>
//                   </div>
//                   {i < STEPS.length - 1 && (
//                     <div
//                       className={`h-px w-6 ${i < stepIdx ? "bg-primary" : "bg-slate-200"} flex-shrink-0`}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Step form card */}
//             <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={stepIdx}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {stepIdx === 0 && (
//                     <ContactStep
//                       data={contact}
//                       onChange={(k, v) => setContact((p) => ({ ...p, [k]: v }))}
//                       errors={contactErrors}
//                       touched={contactTouched}
//                       onTouch={(k) =>
//                         setContactTouched((p) => ({ ...p, [k]: true }))
//                       }
//                     />
//                   )}
//                   {/* {stepIdx === 1 && (
//                     <BillingStep
//                       data={billing}
//                       onChange={(k, v) => setBilling(p => ({ ...p, [k]: v }))}
//                       errors={billingErrors}
//                       touched={billingTouched}
//                       onTouch={k => setBillingTouched(p => ({ ...p, [k]: true }))}
//                     />
//                   )} */}
//                   {stepIdx === 1 && (
//                     <PaymentStep
//                       data={payment}
//                       onChange={(k, v) => setPayment((p) => ({ ...p, [k]: v }))}
//                       errors={paymentErrors}
//                       touched={paymentTouched}
//                       onTouch={(k) =>
//                         setPaymentTouched((p) => ({ ...p, [k]: true }))
//                       }
//                       onPay={handlePay}
//                       loading={loading}
//                     />
//                   )}
//                 </motion.div>
//               </AnimatePresence>

//               {stepIdx < 1 && (
//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   type="button"
//                   onClick={handleNext}
//                   className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer mt-6 shadow-md"
//                 >
//                   Continue <ChevronRight size={16} />
//                 </motion.button>
//               )}
//             </div>
//           </div>

//           {/* Right: order summary */}
//           <div>
//             {/* <OrderSummary
//               cartItems={cartItems}
//               subtotal={subtotal}
//               discount={discount}
//               discountRate={discountRate}
//               total={total}
//             /> */}

//             <OrderSummary
//               cartItems={checkoutItems}
//               subtotal={checkoutSubtotal}
//               discount={checkoutDiscount}
//               discountRate={reportId ? 0 : discountRate}
//               total={checkoutTotal}
//               couponCode={couponCode}
//               couponError={couponError}
//               couponInput={couponInput}
//               setCouponInput={setCouponInput}
//               handleApplyCoupon={handleApplyCoupon}
//               handleRemoveCoupon={handleRemoveCoupon}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronRight,
//   CheckCircle,
//   Lock,
//   CreditCard,
//   MapPin,
//   User,
//   FileText,
//   Tag,
//   ShieldCheck,
//   ArrowLeft,
//   X,
// } from "lucide-react";
// import Logo from "../components/ui/Logo";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";
// import { useRazorpay } from "../hooks/useRazorpay";
// import { toast } from "react-toastify";

// import { useSearchParams } from "next/navigation";

// const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const STEPS = [
//   { id: "contact", label: "Contact Details" },
//   { id: "payment", label: "Payment Method" },
// ];

// function FieldError({ msg }) {
//   if (!msg) return null;
//   return (
//     <p
//       className="mt-1 text-xs text-red-500 flex items-center gap-1"
//       role="alert"
//     >
//       {msg}
//     </p>
//   );
// }

// function inputCls(touched, error) {
//   return `w-full px-4 py-3 bg-white border rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none transition-colors ${
//     touched && error
//       ? "border-red-400 focus:border-red-400"
//       : "border-slate-200 focus:border-primary"
//   }`;
// }

// // ── Step 1: Contact Details ───────────────────────────────────────────────────
// function ContactStep({ data, onChange, errors, touched, onTouch }) {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-bold text-slate-900 mb-5">Contact Details</h2>
//       <div className="grid grid-cols-1 gap-4">
//         <div>
//           <label
//             htmlFor="c-first"
//             className="block text-sm font-medium text-slate-700 mb-1.5"
//           >
//             First Name *
//           </label>
//           <input
//             id="c-first"
//             type="text"
//             placeholder="Alex"
//             value={data.firstName}
//             onChange={(e) => onChange("firstName", e.target.value)}
//             onBlur={() => onTouch("firstName")}
//             className={inputCls(touched.firstName, errors.firstName)}
//           />
//           <FieldError msg={touched.firstName ? errors.firstName : ""} />
//         </div>
//       </div>
//       <div>
//         <label
//           htmlFor="c-email"
//           className="block text-sm font-medium text-slate-700 mb-1.5"
//         >
//           Email Address *
//         </label>
//         <input
//           id="c-email"
//           type="email"
//           placeholder="alex@company.com"
//           value={data.email}
//           onChange={(e) => onChange("email", e.target.value)}
//           onBlur={() => onTouch("email")}
//           className={inputCls(touched.email, errors.email)}
//         />
//         <FieldError msg={touched.email ? errors.email : ""} />
//       </div>
//       <div>
//         <label
//           htmlFor="c-company"
//           className="block text-sm font-medium text-slate-700 mb-1.5"
//         >
//           Company Name *
//         </label>
//         <input
//           id="c-company"
//           type="text"
//           placeholder="Your company"
//           value={data.company}
//           onChange={(e) => onChange("company", e.target.value)}
//           onBlur={() => onTouch("company")}
//           className={inputCls(touched.company, errors.company)}
//         />
//         <FieldError msg={touched.company ? errors.company : ""} />
//       </div>
//       {/* <div className="flex items-center gap-2.5 p-3 bg-slate-50 border border-slate-200 rounded-xl">
//         <User
//           size={15}
//           className="text-primary flex-shrink-0"
//           aria-hidden="true"
//         />
//         <p className="text-sm text-slate-600">
//           Returning customer?{" "}
//           <Link
//             href="/login"
//             className="text-primary font-semibold hover:text-primary-dark transition-colors"
//           >
//             Click here to login
//           </Link>
//         </p>
//       </div> */}
//     </div>
//   );
// }

// // ── Step 2: Payment Method ────────────────────────────────────────────────────
// function PaymentStep({
//   data,
//   onChange,
//   errors,
//   touched,
//   onTouch,
//   onPay,
//   loading,
// }) {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-bold text-slate-900 mb-5">Payment Method</h2>
//       <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
//         <ShieldCheck size={18} className="text-blue-600 flex-shrink-0" />
//         <div>
//           <p className="text-sm font-semibold text-blue-800">
//             Secured by Razorpay International
//           </p>
//           <p className="text-xs text-blue-600 mt-0.5">
//             SSL secured · PCI DSS compliant
//           </p>
//         </div>
//       </div>

//       <motion.button
//         whileHover={{ scale: 1.01 }}
//         whileTap={{ scale: 0.99 }}
//         type="button"
//         onClick={onPay}
//         disabled={loading}
//         className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer shadow-lg text-base mt-2"
//       >
//         {loading ? (
//           <>
//             <svg
//               className="animate-spin size-5"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               />
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//               />
//             </svg>
//             Processing...
//           </>
//         ) : (
//           <>
//             <Lock size={16} />
//             Pay via Razorpay
//           </>
//         )}
//       </motion.button>
//       <p className="text-center text-xs text-slate-400">
//         Your payment is secured and encrypted. By completing this purchase you
//         agree to our{" "}
//         <Link href="/term-conditions" className="text-primary hover:underline">
//           Terms
//         </Link>
//         .
//       </p>
//     </div>
//   );
// }

// // ── Order summary sidebar ─────────────────────────────────────────────────────
// function OrderSummary({
//   cartItems,
//   subtotal,
//   discount,
//   discountRate,
//   total,
//   couponCode,
//   appliedCoupon,
//   couponError,
//   couponInput,
//   setCouponInput,
//   handleApplyCoupon,
//   handleRemoveCoupon,
//   checkoutDiscountRate,
// }) {

//   return (
//     <div className="bg-white border border-slate-100 rounded-2xl p-6 sticky top-24">
//       <h3 className="text-base font-bold text-slate-900 mb-4">Order Summary</h3>
//       <div className="space-y-3 mb-4">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-start gap-3 pb-3 border-b border-slate-50"
//           >
//             <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//               <FileText size={13} className="text-primary" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-sm font-medium text-slate-800 leading-snug line-clamp-2">
//                 {item.title}
//               </p>
//               <p className="text-xs text-slate-400 mt-0.5 font-bold">
//                 ${item.price_cents.toLocaleString()}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Coupon Section */}

//       <div className="mb-4">
//         {couponCode || appliedCoupon ? (
//           <div className="flex items-center justify-between px-3 py-2 bg-green-50 border border-green-200 rounded-xl">
//             <div>
//               <p className="text-sm font-semibold text-green-700">
//                 Coupon Applied
//               </p>
//               <p className="text-xs text-green-600">{couponCode}</p>
//             </div>

//             <button
//               onClick={handleRemoveCoupon}
//               className="text-red-500 text-xs font-semibold"
//             >
//               Remove
//             </button>
//           </div>
//         ) : (
//           <>
//             <label className="block text-sm font-medium text-slate-700 mb-2">
//               Coupon Code
//             </label>

//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Enter coupon"
//                 value={couponInput}
//                 onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
//                 className="border w-[75%] px-3 py-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
//               />

//               <button
//                 onClick={handleApplyCoupon}
//                 className="border w-[25%] px-2 py-2 bg-primary text-white rounded-xl text-sm font-semibold"
//               >
//                 Apply
//               </button>
//             </div>

//             {couponError && (
//               <p className="text-red-500 text-xs mt-1">{couponError}</p>
//             )}
//           </>
//         )}
//       </div>

//       {discount > 0 && (
//         <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl">
//           <Tag size={12} className="text-amber-600" />
//           <span className="text-xs text-amber-700 font-medium">
//             {discountRate}% bulk discount applied
//           </span>
//         </div>
//       )}

//       <div className="space-y-2 text-sm">
//         <div className="flex justify-between text-slate-600">
//           <span>Subtotal</span>
//           <span className="font-semibold">${subtotal.toLocaleString()}</span>
//         </div>
//         {discount > 0 && (
//           <div className="flex justify-between text-green-600">
//             <span>Discount</span>
//             <span className="font-semibold">-${discount.toLocaleString()}</span>
//           </div>
//         )}
//         <div className="flex justify-between text-slate-400 text-xs">
//           <span>Taxes</span>
//           <span>Calculated at checkout</span>
//         </div>
//         <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-slate-100 text-base">
//           <span>Total</span>
//           <span>${total}</span>
//         </div>
//       </div>

//       <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
//         <ShieldCheck size={14} className="text-green-500" />
//         <span className="text-xs text-slate-400">Secure SSL checkout</span>
//       </div>
//     </div>
//   );
// }

// // ── Main Checkout page ────────────────────────────────────────────────────────
// export default function Checkout() {
//   const {
//     cartItems,
//     subtotal,
//     discount,
//     discountRate,
//     total,
//     clearCart,
//     getCartItems,
//   } = useCart();

//   const { isAuthenticated } = useAuth();
//   const router = useRouter();

//   const [stepIdx, setStepIdx] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [buyNowReport, setBuyNowReport] = useState(null);

//   const [contact, setContact] = useState({
//     firstName: "",
//     email: "",
//     company: "",
//   });
//   const [contactTouched, setContactTouched] = useState({});

//   const searchParams = useSearchParams();
//   const reportId = searchParams.get("reportId");

//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     const userData = localStorage.getItem("user");

//     if (userData) {
//       const user = JSON.parse(userData);

//       setContact({
//         firstName: user.full_name || "",
//         email: user.email || "",
//         company: user.company_name || "",
//       });
//     }
//   }, []);

//   const fetchBuyNowSummary = async () => {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/checkout/buy-now/summary?seo_slug=${reportId}`,
//       );

//       if (response.status === 200) {
//         setBuyNowReport(response.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (!reportId) return;

//     fetchBuyNowSummary();
//   }, [reportId]);

//   const [payment, setPayment] = useState({
//     cardNumber: "",
//     cardName: "",
//     expiry: "",
//     cvv: "",
//   });
//   const [paymentTouched, setPaymentTouched] = useState({});

//   const [couponInput, setCouponInput] = useState("");

//   const [appliedCoupon, setAppliedCoupon] = useState("");

//   const contactErrors = {
//     firstName: !contact.firstName.trim() ? "Required" : "",
//     email: !contact.email
//       ? "Required"
//       : !EMAIL_RE.test(contact.email)
//         ? "Enter a valid email"
//         : "",
//     company: !contact.company.trim() ? "Required" : "",
//   };

//   const paymentErrors = {
//     cardNumber: !payment.cardNumber
//       ? "Required"
//       : payment.cardNumber.replace(/\s/g, "").length < 16
//         ? "Enter 16-digit card number"
//         : "",
//     cardName: !payment.cardName.trim() ? "Required" : "",
//     expiry: !payment.expiry
//       ? "Required"
//       : payment.expiry.length < 5
//         ? "Enter MM/YY"
//         : "",
//     cvv: !payment.cvv
//       ? "Required"
//       : payment.cvv.length < 3
//         ? "Enter 3-4 digit CVV"
//         : "",
//   };

//   const isContactValid = Object.values(contactErrors).every((e) => !e);
//   const isPaymentValid = Object.values(paymentErrors).every((e) => !e);

//   const touchAll = (setter, fields) => {
//     setter(Object.fromEntries(Object.keys(fields).map((k) => [k, true])));
//   };

//   const handleNext = () => {
//     touchAll(setContactTouched, contactErrors);

//     if (!isContactValid) return;

//     setStepIdx(1);
//   };

//   const { openCheckout } = useRazorpay();

//   const { couponCode, couponError, applyCoupon, removeCoupon, addToCart } =
//     useCart();

//   const handleApplyCoupon = async () => {
//     if (!couponInput.trim()) return;

//     if (reportId) {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await axios.post(
//           `${BASE_URL}/cart/apply-coupon`,
//           {
//             code: couponInput.trim().toUpperCase(),
//             seo_slug: reportId,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           },
//         );

//         setBuyNowReport((prev) => {
//           if (!prev) return prev;

//           return {
//             ...prev,
//             coupon_discount_cents: res.data.coupon_discount_cents,
//             total_cents: res.data.total_cents,
//             discount_value: res.data.discount_value,
//           };
//         });

//         setAppliedCoupon(res.data.code);

//         toast.success("Coupon applied successfully");
//         setCouponInput("");
//       } catch (err) {
//         console.log("Coupon error:", err);
//         toast.error(err.response?.data?.detail || "Invalid coupon code");
//       }
//     } else {
//       const ok = await applyCoupon(couponInput);

//       if (ok) {
//         toast.success("Coupon applied successfully");
//         setCouponInput("");
//       } else {
//         toast.error("Invalid coupon code");
//       }
//     }
//   };

//   const handleRemoveCoupon = async () => {
//     removeCoupon();

//     if (reportId) {
//       await fetchBuyNowSummary();
//       setAppliedCoupon("");
//     }

//     setCouponInput("");
//   };

//   const handlePay = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       const endpoint = reportId
//         ? `${BASE_URL}/checkout/buy-now/create-order`
//         : `${BASE_URL}/checkout/create-order`;

//       const payload = reportId
//         ? {
//             seo_slug: reportId,
//             coupon_code: reportId ? appliedCoupon : couponCode || "",
//           }
//         : {
//             coupon_code: reportId ? appliedCoupon : couponCode || "",
//           };

//       const response = await axios.post(endpoint, payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const order = response.data;

//       await openCheckout({
//         order,

//         customer: {
//           name: contact.firstName,
//           email: contact.email,
//           phone: contact.phone || "",
//         },

//         onSuccess: async (paymentResponse) => {
//           try {
//             const verifyResponse = await axios.post(
//               `${BASE_URL}/checkout/verify-payment`,
//               {
//                 razorpay_order_id: paymentResponse.razorpay_order_id,
//                 razorpay_payment_id: paymentResponse.razorpay_payment_id,
//                 razorpay_signature: paymentResponse.razorpay_signature,
//                 order_db_id: order.order_db_id,
//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               },
//             );

//             if (verifyResponse?.data?.success) {
//               await getCartItems();
//               toast.success("Payment successful, check email");
//               router.push("/dashboard");
//             } else {
//               toast.error("Payment verification failed");
//             }
//           } catch (err) {
//             console.log("Verify payment error:", err);
//             toast.error("Payment verification failed");
//           }
//         },

//         onDismiss: async (order) => {
//           if (!order?.order_db_id) return;

//           try {
//             await axios.post(
//               `${BASE_URL}/checkout/cancel-order`,
//               {
//                 order_db_id: order.order_db_id,
//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               },
//             );

//             if (reportId) {
//               await addToCart(reportId);
//               toast.success("Payment cancelled. Report added to cart.");
//               router.push(`/report-name/${reportId}`);
//             }
//           } catch (err) {
//             console.log("Cancel order error:", err);
//           }
//         },
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!reportId && cartItems.length === 0 && !success) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-50">
//         <div className="text-center">
//           <p className="text-xl font-bold text-slate-900 mb-2">
//             Your cart is empty
//           </p>
//           <p className="text-slate-500 mb-6">
//             Add some reports before checking out.
//           </p>
//           <Link
//             href="/report"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
//           >
//             Browse Reports
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const checkoutItems = reportId ? buyNowReport?.items || [] : cartItems;

//   const checkoutSubtotal = reportId
//     ? buyNowReport?.subtotal_cents || 0
//     : subtotal;

//   const checkoutTotal = reportId ? buyNowReport?.total_cents || 0 : total;

//   const checkoutDiscount = reportId
//     ? buyNowReport?.coupon_discount_cents || 0
//     : discount;

//   const checkoutDiscountRate = reportId ? buyNowReport?.discount_value : 0;

//   if (success) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.4 }}
//           className="bg-white rounded-2xl border border-slate-100 shadow-xl p-10 text-center max-w-md w-full"
//         >
//           <div className="size-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
//             <CheckCircle size={36} className="text-green-500" />
//           </div>
//           <h1 className="text-2xl font-bold text-slate-900 mb-2">
//             Order Confirmed!
//           </h1>
//           <p className="text-slate-500 mb-6">
//             Your reports are being processed and will be available for download
//             shortly. A confirmation has been sent to{" "}
//             <strong>{contact.email}</strong>.
//           </p>
//           <div className="flex flex-col gap-3">
//             <Link
//               href="/dashboard"
//               className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
//             >
//               Go to Dashboard
//             </Link>
//             <Link
//               href="/report"
//               className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
//             >
//               Continue shopping
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <div className="bg-white border-b border-slate-100 px-6 py-4">
//         <div className="max-w-6xl mx-auto flex items-center justify-between">
//           <Link href="/" aria-label="Integer Market home">
//             <Logo className="h-8 w-auto" />
//           </Link>
//           <div className="flex items-center gap-2 text-xs text-slate-400">
//             <Lock size={12} className="text-green-500" />
//             Secure Checkout
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <button
//               onClick={() =>
//                 stepIdx === 0 ? router.back() : setStepIdx((i) => i - 1)
//               }
//               className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer mb-6"
//             >
//               <ArrowLeft size={15} />
//               {stepIdx === 0 ? "Back to cart" : "Back"}
//             </button>
//             <div className="flex items-center gap-2 mb-8">
//               {STEPS.map((step, i) => (
//                 <div key={step.id} className="flex items-center gap-2 flex-1">
//                   <div
//                     className={`size-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors flex-shrink-0 ${
//                       i < stepIdx
//                         ? "bg-primary text-white"
//                         : i === stepIdx
//                           ? "border-2 border-primary text-primary bg-white"
//                           : "border-2 border-slate-200 text-slate-400 bg-white"
//                     }`}
//                   >
//                     {i < stepIdx ? <CheckCircle size={16} /> : i + 1}
//                   </div>
//                   <div className="flex-1">
//                     <p
//                       className={`text-xs font-medium leading-tight ${i === stepIdx ? "text-slate-900" : "text-slate-400"}`}
//                     >
//                       {step.label}
//                     </p>
//                   </div>
//                   {i < STEPS.length - 1 && (
//                     <div
//                       className={`h-px w-6 ${i < stepIdx ? "bg-primary" : "bg-slate-200"} flex-shrink-0`}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={stepIdx}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {stepIdx === 0 && (
//                     <ContactStep
//                       data={contact}
//                       onChange={(k, v) => setContact((p) => ({ ...p, [k]: v }))}
//                       errors={contactErrors}
//                       touched={contactTouched}
//                       onTouch={(k) =>
//                         setContactTouched((p) => ({ ...p, [k]: true }))
//                       }
//                     />
//                   )}

//                   {stepIdx === 1 && (
//                     <PaymentStep
//                       data={payment}
//                       onChange={(k, v) => setPayment((p) => ({ ...p, [k]: v }))}
//                       errors={paymentErrors}
//                       touched={paymentTouched}
//                       onTouch={(k) =>
//                         setPaymentTouched((p) => ({ ...p, [k]: true }))
//                       }
//                       onPay={handlePay}
//                       loading={loading}
//                     />
//                   )}
//                 </motion.div>
//               </AnimatePresence>

//               {stepIdx < 1 && (
//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   type="button"
//                   onClick={handleNext}
//                   className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer mt-6 shadow-md"
//                 >
//                   Continue <ChevronRight size={16} />
//                 </motion.button>
//               )}
//             </div>
//           </div>

//           <div>
//             <OrderSummary
//               cartItems={checkoutItems}
//               subtotal={checkoutSubtotal}
//               discount={checkoutDiscount}
//               discountRate={reportId ? checkoutDiscountRate : discountRate}
//               total={checkoutTotal}
//               couponCode={couponCode}
//               appliedCoupon={appliedCoupon}
//               couponError={couponError}
//               couponInput={couponInput}
//               setCouponInput={setCouponInput}
//               handleApplyCoupon={handleApplyCoupon}
//               handleRemoveCoupon={handleRemoveCoupon}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  CheckCircle,
  Lock,
  CreditCard,
  MapPin,
  User,
  FileText,
  Tag,
  ShieldCheck,
  ArrowLeft,
  X,
} from "lucide-react";
import Logo from "../components/ui/Logo";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useRazorpay } from "../hooks/useRazorpay";
import { toast } from "react-toastify";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STEPS = [
  { id: "contact", label: "Contact Details" },
  { id: "payment", label: "Payment Method" },
];

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p
      className="mt-1 text-xs text-red-500 flex items-center gap-1"
      role="alert"
    >
      {msg}
    </p>
  );
}

function inputCls(touched, error) {
  return `w-full px-4 py-3 bg-white border rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none transition-colors ${
    touched && error
      ? "border-red-400 focus:border-red-400"
      : "border-slate-200 focus:border-primary"
  }`;
}

// ── Step 1: Contact Details ───────────────────────────────────────────────────
function ContactStep({ data, onChange, errors, touched, onTouch }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 mb-5">Contact Details</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="c-first"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            First Name *
          </label>
          <input
            id="c-first"
            type="text"
            placeholder="Alex"
            value={data.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            onBlur={() => onTouch("firstName")}
            className={inputCls(touched.firstName, errors.firstName)}
          />
          <FieldError msg={touched.firstName ? errors.firstName : ""} />
        </div>
      </div>
      <div>
        <label
          htmlFor="c-email"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Email Address *
        </label>
        <input
          id="c-email"
          type="email"
          placeholder="alex@company.com"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          onBlur={() => onTouch("email")}
          className={inputCls(touched.email, errors.email)}
        />
        <FieldError msg={touched.email ? errors.email : ""} />
      </div>
      <div>
        <label
          htmlFor="c-company"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Company Name *
        </label>
        <input
          id="c-company"
          type="text"
          placeholder="Your company"
          value={data.company}
          onChange={(e) => onChange("company", e.target.value)}
          onBlur={() => onTouch("company")}
          className={inputCls(touched.company, errors.company)}
        />
        <FieldError msg={touched.company ? errors.company : ""} />
      </div>
      {/* <div className="flex items-center gap-2.5 p-3 bg-slate-50 border border-slate-200 rounded-xl">
        <User
          size={15}
          className="text-primary flex-shrink-0"
          aria-hidden="true"
        />
        <p className="text-sm text-slate-600">
          Returning customer?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Click here to login
          </Link>
        </p>
      </div> */}
    </div>
  );
}

// ── Step 2: Payment Method ────────────────────────────────────────────────────
function PaymentStep({
  data,
  onChange,
  errors,
  touched,
  onTouch,
  onPay,
  loading,
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 mb-5">Payment Method</h2>
      <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <ShieldCheck size={18} className="text-blue-600 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-blue-800">
            Secured by Razorpay International
          </p>
          <p className="text-xs text-blue-600 mt-0.5">
            SSL secured · PCI DSS compliant
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="button"
        onClick={onPay}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer shadow-lg text-base mt-2"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin size-5"
              viewBox="0 0 24 24"
              fill="none"
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
            Processing...
          </>
        ) : (
          <>
            <Lock size={16} />
            Pay via Razorpay
          </>
        )}
      </motion.button>
      <p className="text-center text-xs text-slate-400">
        Your payment is secured and encrypted. By completing this purchase you
        agree to our{" "}
        <Link href="/term-conditions" className="text-primary hover:underline">
          Terms
        </Link>
        .
      </p>
    </div>
  );
}

// ── Order summary sidebar ─────────────────────────────────────────────────────
function OrderSummary({
  cartItems,
  subtotal,
  discount,
  discountRate,
  total,
  couponCode,
  appliedCoupon,
  couponError,
  couponInput,
  setCouponInput,
  handleApplyCoupon,
  handleRemoveCoupon,
  checkoutDiscountRate,
}) {

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 sticky top-24">
      <h3 className="text-base font-bold text-slate-900 mb-4">Order Summary</h3>
      <div className="space-y-3 mb-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 pb-3 border-b border-slate-50"
          >
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText size={13} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 leading-snug line-clamp-2">
                {item.title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5 font-bold">
                ${item.price_cents.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon Section */}

      <div className="mb-4">
        {couponCode || appliedCoupon ? (
          <div className="flex items-center justify-between px-3 py-2 bg-green-50 border border-green-200 rounded-xl">
            <div>
              <p className="text-sm font-semibold text-green-700">
                Coupon Applied
              </p>
              <p className="text-xs text-green-600">{couponCode}</p>
            </div>

            <button
              onClick={handleRemoveCoupon}
              className="text-red-500 text-xs font-semibold"
            >
              Remove
            </button>
          </div>
        ) : (
          <>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Coupon Code
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                className="border w-[75%] px-3 py-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
              />

              <button
                onClick={handleApplyCoupon}
                className="border w-[25%] px-2 py-2 bg-primary text-white rounded-xl text-sm font-semibold"
              >
                Apply
              </button>
            </div>

            {couponError && (
              <p className="text-red-500 text-xs mt-1">{couponError}</p>
            )}
          </>
        )}
      </div>

      {discount > 0 && (
        <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl">
          <Tag size={12} className="text-amber-600" />
          <span className="text-xs text-amber-700 font-medium">
            {discountRate}% bulk discount applied
          </span>
        </div>
      )}

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toLocaleString()}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span className="font-semibold">-${discount.toLocaleString()}</span>
          </div>
        )}
        <div className="flex justify-between text-slate-400 text-xs">
          <span>Taxes</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-slate-100 text-base">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
        <ShieldCheck size={14} className="text-green-500" />
        <span className="text-xs text-slate-400">Secure SSL checkout</span>
      </div>
    </div>
  );
}

// ── Main Checkout page ────────────────────────────────────────────────────────
export default function Checkout({ reportId }) {
  const {
    cartItems,
    subtotal,
    discount,
    discountRate,
    total,
    clearCart,
    getCartItems,
  } = useCart();

  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const [stepIdx, setStepIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [buyNowReport, setBuyNowReport] = useState(null);

  const [contact, setContact] = useState({
    firstName: "",
    email: "",
    company: "",
  });
  const [contactTouched, setContactTouched] = useState({});

  // const searchParams = useSearchParams();
  // const reportId = searchParams.get("reportId");

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const user = JSON.parse(userData);

      setContact({
        firstName: user.full_name || "",
        email: user.email || "",
        company: user.company_name || "",
      });
    }
  }, []);

  const fetchBuyNowSummary = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/checkout/buy-now/summary?seo_slug=${reportId}`,
      );

      if (response.status === 200) {
        setBuyNowReport(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!reportId) return;

    fetchBuyNowSummary();
  }, [reportId]);

  const [payment, setPayment] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [paymentTouched, setPaymentTouched] = useState({});

  const [couponInput, setCouponInput] = useState("");

  const [appliedCoupon, setAppliedCoupon] = useState("");

  const contactErrors = {
    firstName: !contact.firstName.trim() ? "Required" : "",
    email: !contact.email
      ? "Required"
      : !EMAIL_RE.test(contact.email)
        ? "Enter a valid email"
        : "",
    company: !contact.company.trim() ? "Required" : "",
  };

  const paymentErrors = {
    cardNumber: !payment.cardNumber
      ? "Required"
      : payment.cardNumber.replace(/\s/g, "").length < 16
        ? "Enter 16-digit card number"
        : "",
    cardName: !payment.cardName.trim() ? "Required" : "",
    expiry: !payment.expiry
      ? "Required"
      : payment.expiry.length < 5
        ? "Enter MM/YY"
        : "",
    cvv: !payment.cvv
      ? "Required"
      : payment.cvv.length < 3
        ? "Enter 3-4 digit CVV"
        : "",
  };

  const isContactValid = Object.values(contactErrors).every((e) => !e);
  const isPaymentValid = Object.values(paymentErrors).every((e) => !e);

  const touchAll = (setter, fields) => {
    setter(Object.fromEntries(Object.keys(fields).map((k) => [k, true])));
  };

  const handleNext = () => {
    touchAll(setContactTouched, contactErrors);

    if (!isContactValid) return;

    setStepIdx(1);
  };

  const { openCheckout } = useRazorpay();

  const { couponCode, couponError, applyCoupon, removeCoupon, addToCart } =
    useCart();

  const handleApplyCoupon = async () => {
    if (!couponInput.trim()) return;

    if (reportId) {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.post(
          `${BASE_URL}/cart/apply-coupon`,
          {
            code: couponInput.trim().toUpperCase(),
            seo_slug: reportId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setBuyNowReport((prev) => {
          if (!prev) return prev;

          return {
            ...prev,
            coupon_discount_cents: res.data.coupon_discount_cents,
            total_cents: res.data.total_cents,
            discount_value: res.data.discount_value,
          };
        });

        setAppliedCoupon(res.data.code);

        toast.success("Coupon applied successfully");
        setCouponInput("");
      } catch (err) {
        console.log("Coupon error:", err);
        toast.error(err.response?.data?.detail || "Invalid coupon code");
      }
    } else {
      const ok = await applyCoupon(couponInput);

      if (ok) {
        toast.success("Coupon applied successfully");
        setCouponInput("");
      } else {
        toast.error("Invalid coupon code");
      }
    }
  };

  const handleRemoveCoupon = async () => {
    removeCoupon();

    if (reportId) {
      await fetchBuyNowSummary();
      setAppliedCoupon("");
    }

    setCouponInput("");
  };

  const handlePay = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const endpoint = reportId
        ? `${BASE_URL}/checkout/buy-now/create-order`
        : `${BASE_URL}/checkout/create-order`;

      const payload = reportId
        ? {
            seo_slug: reportId,
            coupon_code: reportId ? appliedCoupon : couponCode || "",
          }
        : {
            coupon_code: reportId ? appliedCoupon : couponCode || "",
          };

      const response = await axios.post(endpoint, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const order = response.data;

      await openCheckout({
        order,

        customer: {
          name: contact.firstName,
          email: contact.email,
          phone: contact.phone || "",
        },

        onSuccess: async (paymentResponse) => {
          try {
            const verifyResponse = await axios.post(
              `${BASE_URL}/checkout/verify-payment`,
              {
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
                order_db_id: order.order_db_id,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            if (verifyResponse?.data?.success) {
              await getCartItems();
              toast.success("Payment successful, check email");
              router.push("/dashboard");
            } else {
              toast.error("Payment verification failed");
            }
          } catch (err) {
            console.log("Verify payment error:", err);
            toast.error("Payment verification failed");
          }
        },

        onDismiss: async (order) => {
          if (!order?.order_db_id) return;

          try {
            await axios.post(
              `${BASE_URL}/checkout/cancel-order`,
              {
                order_db_id: order.order_db_id,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            if (reportId) {
              await addToCart(reportId);
              toast.success("Payment cancelled. Report added to cart.");
              router.push(`/report-name/${reportId}`);
            }
          } catch (err) {
            console.log("Cancel order error:", err);
          }
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!reportId && cartItems.length === 0 && !success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-xl font-bold text-slate-900 mb-2">
            Your cart is empty
          </p>
          <p className="text-slate-500 mb-6">
            Add some reports before checking out.
          </p>
          <Link
            href="/report"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
          >
            Browse Reports
          </Link>
        </div>
      </div>
    );
  }

  const checkoutItems = reportId ? buyNowReport?.items || [] : cartItems;

  const checkoutSubtotal = reportId
    ? buyNowReport?.subtotal_cents || 0
    : subtotal;

  const checkoutTotal = reportId ? buyNowReport?.total_cents || 0 : total;

  const checkoutDiscount = reportId
    ? buyNowReport?.coupon_discount_cents || 0
    : discount;

  const checkoutDiscountRate = reportId ? buyNowReport?.discount_value : 0;

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-slate-100 shadow-xl p-10 text-center max-w-md w-full"
        >
          <div className="size-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={36} className="text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-slate-500 mb-6">
            Your reports are being processed and will be available for download
            shortly. A confirmation has been sent to{" "}
            <strong>{contact.email}</strong>.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/report"
              className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              Continue shopping
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Integer Market home">
            <Logo className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Lock size={12} className="text-green-500" />
            Secure Checkout
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <button
              onClick={() =>
                stepIdx === 0 ? router.back() : setStepIdx((i) => i - 1)
              }
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer mb-6"
            >
              <ArrowLeft size={15} />
              {stepIdx === 0 ? "Back to cart" : "Back"}
            </button>
            <div className="flex items-center gap-2 mb-8">
              {STEPS.map((step, i) => (
                <div key={step.id} className="flex items-center gap-2 flex-1">
                  <div
                    className={`size-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors flex-shrink-0 ${
                      i < stepIdx
                        ? "bg-primary text-white"
                        : i === stepIdx
                          ? "border-2 border-primary text-primary bg-white"
                          : "border-2 border-slate-200 text-slate-400 bg-white"
                    }`}
                  >
                    {i < stepIdx ? <CheckCircle size={16} /> : i + 1}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-xs font-medium leading-tight ${i === stepIdx ? "text-slate-900" : "text-slate-400"}`}
                    >
                      {step.label}
                    </p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`h-px w-6 ${i < stepIdx ? "bg-primary" : "bg-slate-200"} flex-shrink-0`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stepIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {stepIdx === 0 && (
                    <ContactStep
                      data={contact}
                      onChange={(k, v) => setContact((p) => ({ ...p, [k]: v }))}
                      errors={contactErrors}
                      touched={contactTouched}
                      onTouch={(k) =>
                        setContactTouched((p) => ({ ...p, [k]: true }))
                      }
                    />
                  )}

                  {stepIdx === 1 && (
                    <PaymentStep
                      data={payment}
                      onChange={(k, v) => setPayment((p) => ({ ...p, [k]: v }))}
                      errors={paymentErrors}
                      touched={paymentTouched}
                      onTouch={(k) =>
                        setPaymentTouched((p) => ({ ...p, [k]: true }))
                      }
                      onPay={handlePay}
                      loading={loading}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {stepIdx < 1 && (
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  onClick={handleNext}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer mt-6 shadow-md"
                >
                  Continue <ChevronRight size={16} />
                </motion.button>
              )}
            </div>
          </div>

          <div>
            <OrderSummary
              cartItems={checkoutItems}
              subtotal={checkoutSubtotal}
              discount={checkoutDiscount}
              discountRate={reportId ? checkoutDiscountRate : discountRate}
              total={checkoutTotal}
              couponCode={couponCode}
              appliedCoupon={appliedCoupon}
              couponError={couponError}
              couponInput={couponInput}
              setCouponInput={setCouponInput}
              handleApplyCoupon={handleApplyCoupon}
              handleRemoveCoupon={handleRemoveCoupon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}