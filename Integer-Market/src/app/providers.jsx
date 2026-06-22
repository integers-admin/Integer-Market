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
import { AuthProvider } from '../context/AuthContext'
import { CartProvider } from '../context/CartContext'

export function Providers({ children }) {
  return (
    <CartProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </CartProvider>
  )
}