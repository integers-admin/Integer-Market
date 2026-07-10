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
      clientId="186821146219-uat41cnd1031d7iouab3u7vmkck2bn5e.apps.googleusercontent.com"
    >
      <CartProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </CartProvider>
    </GoogleOAuthProvider>
  );
}

