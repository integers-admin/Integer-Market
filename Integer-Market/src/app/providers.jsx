// 'use client'
// import { AuthProvider } from '../context/AuthContext'
// import { CartProvider } from '../context/CartContext'

// export function Providers({ children }) {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         {children}
//       </CartProvider>
//     </AuthProvider>
//   )
// }


// wo
// 'use client'
// import { AuthProvider } from '../context/AuthContext'
// import { CartProvider } from '../context/CartContext'

// export function Providers({ children }) {
//   return (
//     <CartProvider>
//       <AuthProvider>
//         {children}
//       </AuthProvider>
//     </CartProvider>
//   )
// }


'use client'

import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";

export function Providers({ children }) {


  console.log("env data: ",{
  api: process.env.NEXT_PUBLIC_API_URL,
  google: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
});


  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
    >
      <CartProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </CartProvider>
    </GoogleOAuthProvider>
  );
}

