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

import { Suspense } from "react";
import { connection } from "next/server";
import Checkout from "../../views/Checkout";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Checkout",
  description: "Complete your market research report purchase securely.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CheckoutPage({ searchParams }) {
  await connection(); // ✅ Force dynamic rendering
  
  const params = await searchParams;
  const reportId = params?.reportId || null;

  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <Checkout reportId={reportId} />
    </Suspense>
  );
}