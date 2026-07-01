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



// import { Suspense } from "react";

// const Checkout = dynamic(
//   () => import("../../../views/Checkout"),
//   { ssr: false }
// );
// // import Checkout from "../../views/Checkout";
// import { connection } from "next/server";

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

//   await connection()

//   const params = await searchParams;

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Checkout reportId={params?.reportId || null} />
//     </Suspense>
//   );
// }



import { Suspense } from "react";
import dynamic from "next/dynamic";

const Checkout = dynamic(
  () => import("../../../views/Checkout"),
  { ssr: false }
);

import { connection } from "next/server";

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
  await connection();
  const params = await searchParams;

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <Checkout reportId={params?.reportId || null} />
    </Suspense>
  );
}
