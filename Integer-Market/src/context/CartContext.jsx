// "use client";
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const CartContext = createContext(null);

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [couponCode, setCouponCode] = useState(""); // applied code
//   const [couponError, setCouponError] = useState("");

//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//   const getCartItems = async () => {

//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.get(`${BASE_URL}/cart`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (response?.status === 200) {
//         setCartItems(response?.data.items || []);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addToCart = async (slug) => {

//     try {
//       const token = localStorage.getItem("token");

//       if (isInCart(slug)) {
//         setCartOpen(true);
//         return;
//       }

//       // console.log("report data: ", report);

//       const response = await axios.post(
//         `${BASE_URL}/cart/add`,
//         {
//           seo_slug: slug,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       // console.log("add cart response: ", response);

//       if (response?.status === 200) {
//         // setCartItems((prev) => [...prev, report]);
//         await getCartItems();
//         setCartOpen(true);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const removeFromCart = (reportId) => {
//   //   setCartItems((prev) => prev.filter((i) => i.id !== reportId));
//   // };

//   const removeFromCart = async (reportId, seo_slug) => {

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.delete(
//         `${BASE_URL}/cart/items/${reportId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       if (response?.status === 200) {
//         await getCartItems();
//       }
//     } catch (error) {
//       console.log("Remove error:", error);
//     }
//   };

//   const clearCart = () => setCartItems([]);

//   // const isInCart = (slug) =>
//   // cartItems.some((item) => item.slug === slug);

//   // const isInCart = (slug) => {
//   //   console.log("Checking:", slug);
//   //   console.log(
//   //     "Cart Slugs:",
//   //     cartItems.map((item) => item.slug),
//   //   );

//   //   return cartItems.some((item) => item.slug === slug);
//   // };

//   const isInCart = (slug) => {
//   // console.log("Checking:", slug);
//   // console.log(
//   //   "Cart Slugs:",
//   //   cartItems.map((item) => item.seo_slug),
//   // );

//   return cartItems.some((item) => item.seo_slug === slug);
// };

//   // Coupon actions
//   const applyCoupon = (raw) => {
//     const code = raw.trim().toUpperCase();
//     if (!code) {
//       setCouponError("Please enter a coupon code.");
//       return false;
//     }
//     if (COUPONS[code]) {
//       setCouponCode(code);
//       setCouponError("");
//       return true;
//     }
//     setCouponError("Invalid coupon code. Please try again.");
//     return false;
//   };

//   const removeCoupon = () => {
//     setCouponCode("");
//     setCouponError("");
//   };

//   // Pricing
//   const cartCount = cartItems.length;
//   const subtotal = cartItems.reduce((sum, r) => sum + r.price_cents, 0);

//   useEffect(() => {
//     getCartItems();
//   }, []);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartOpen,
//         setCartOpen,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         cartCount,
//         subtotal,
//         isInCart,
//         getCartItems,
//         couponCode,
//         couponError,
//         // appliedCouponLabel,
//         applyCoupon,
//         removeCoupon,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// const defaultCartContext = {
//   cartItems: [],
//   cartOpen: false,
//   setCartOpen: () => {},
//   addToCart: () => {},
//   removeFromCart: () => {},
//   clearCart: () => {},
//   cartCount: 0,
//   subtotal: 0,
//   discount: 0,
//   discountRate: 0,
//   total: 0,
//   isInCart: () => false,
//   getCartItems: async () => {},
//   couponCode: "",
//   couponError: "",
//   // appliedCouponLabel: "",
//   applyCoupon: () => false,
//   removeCoupon: () => {},
// };

// export function useCart() {
//   return useContext(CartContext) ?? defaultCartContext;
// }

"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState(""); // applied code
  const [couponError, setCouponError] = useState("");

  const [discount, setDiscount] = useState(0);
  const [discountRate,setDiscountRate] = useState("");
  const [total, setTotal] = useState(0);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const getCartItems = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${BASE_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200) {
        setCartItems(response?.data.items || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (slug) => {
    try {
      const token = localStorage.getItem("token");

      if (isInCart(slug)) {
        setCartOpen(true);
        return;
      }

      // console.log("report data: ", report);

      const response = await axios.post(
        `${BASE_URL}/cart/add`,
        {
          seo_slug: slug,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      // console.log("add cart response: ", response);

      if (response?.status === 200) {
        // setCartItems((prev) => [...prev, report]);
        await getCartItems();
        setCartOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const removeFromCart = (reportId) => {
  //   setCartItems((prev) => prev.filter((i) => i.id !== reportId));
  // };

  const removeFromCart = async (reportId, seo_slug) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `${BASE_URL}/cart/items/${reportId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (response?.status === 200) {
        await getCartItems();
      }
    } catch (error) {
      console.log("Remove error:", error);
    }
  };

  const clearCart = () => setCartItems([]);

  // const isInCart = (slug) =>
  // cartItems.some((item) => item.slug === slug);

  // const isInCart = (slug) => {
  //   console.log("Checking:", slug);
  //   console.log(
  //     "Cart Slugs:",
  //     cartItems.map((item) => item.slug),
  //   );

  //   return cartItems.some((item) => item.slug === slug);
  // };

  const isInCart = (slug) => {
    // console.log("Checking:", slug);
    // console.log(
    //   "Cart Slugs:",
    //   cartItems.map((item) => item.seo_slug),
    // );

    return cartItems.some((item) => item.seo_slug === slug);
  };

  // Coupon actions
  const applyCoupon = async (raw) => {
    const code = raw.trim().toUpperCase();

    if (!code) {
      setCouponError("Please enter a coupon code.");
      return false;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${BASE_URL}/cart/apply-coupon`,
        {
          code,
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (response?.status === 200) {
        // setCouponError("");
        // setCouponCode(code);

        const data = response.data;

        setCouponCode(data.code);

        setDiscount(data.coupon_discount_cents || 0);
        setDiscountRate(data.discount_value || 0)

        setTotal(data.total_cents || subtotal);

        setCouponError("");
      }

      return true;
    } catch (error) {
      console.log("Coupon Error:", error.response?.data);
      setCouponError(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Invalid coupon code",
      );

      return false;
    }
  };

  // const removeCoupon = () => {
  //   setCouponCode("");
  //   setCouponError("");
  // };

  const removeCoupon = () => {
  setCouponCode("");
  setCouponError("");
  setDiscount(0);
  setTotal(subtotal);
};

  // Pricing
  const cartCount = cartItems.length;
  const subtotal = cartItems.reduce((sum, r) => sum + r.price_cents, 0);

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
  if (!couponCode) {
    setTotal(subtotal);
  }
}, [subtotal, couponCode]);

  return (
    <CartContext.Provider
      value={{
         cartItems,
    cartOpen,
    setCartOpen,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    subtotal,
    discount,
    discountRate,
    total,
    isInCart,
    getCartItems,
    couponCode,
    couponError,
    applyCoupon,
    removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const defaultCartContext = {
  cartItems: [],
  cartOpen: false,
  setCartOpen: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartCount: 0,
  subtotal: 0,
  discount: 0,
  discountRate: 0,
  total: 0,
  isInCart: () => false,
  getCartItems: async () => {},
  couponCode: "",
  couponError: "",
  // appliedCouponLabel: "",
  applyCoupon: () => false,
  removeCoupon: () => {},
};

export function useCart() {
  return useContext(CartContext) ?? defaultCartContext;
}
