// import Checkout from '../../views/Checkout'

// export const metadata = {
//   title: 'Checkout',
//   description: 'Complete your market research report purchase securely.',
//   robots: {
//     index: false,
//     follow: false,
//   },
// }

// export default function CheckoutPage() {
//   return <Checkout />
// }


// import { Suspense } from "react";
// import Checkout from "../../views/Checkout";

// export const dynamic = "force-dynamic";

// export const metadata = {
//   title: "Checkout",
//   description: "Complete your market research report purchase securely.",
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

// export default function CheckoutPage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Checkout />
//     </Suspense>
//   );
// }



// wo
// import { Suspense } from "react";
// import Checkout from "../../views/Checkout";

// export const dynamic = "force-dynamic";

// export const metadata = {
//   title: "Checkout",
//   description: "Complete your market research report purchase securely.",
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

// export default async function CheckoutPage({ searchParams }) {

//   const params = await searchParams;

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Checkout reportId={params?.reportId || null} />
//     </Suspense>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Checkout from "../../views/Checkout";

function CheckoutWrapper() {
  const searchParams = useSearchParams();
  const reportId = searchParams.get("reportId");
  return <Checkout reportId={reportId} />;
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutWrapper />
    </Suspense>
  );
}