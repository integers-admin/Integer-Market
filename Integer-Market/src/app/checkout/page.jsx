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




import { Suspense } from "react";
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

  const params = await searchParams;

  console.log("searchParams------------:", params);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checkout reportId={params?.reportId || null} />
    </Suspense>
  );
}