// import Login from '../../../views/auth/Login'

// export const metadata = {
//   title: 'Log In',
//   description: 'Log in to your Integer Market account to access your purchased reports and manage your subscription.',
//   robots: {
//     index: false,
//     follow: false,
//   },
// }

// export default function LoginPage() {
//   return <Login />
// }




import { Suspense } from "react";
import Login from "../../../views/auth/Login";
import { connection } from "next/server";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Log In",
  description:
    "Log in to your Integer Market account to access your purchased reports and manage your subscription.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LoginPage() {

  await connection();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}