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

'use client'

import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";

export function Providers({ children }) {

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

