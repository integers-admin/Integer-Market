// "use client";

// import { GoogleLogin } from "@react-oauth/google";
// import { useRouter } from "next/navigation";
//  import { toast } from 'react-toastify';

// export default function GoogleAuthButton() {
//   const router = useRouter();

//   const base_url = process.env.NEXT_PUBLIC_API_URL;

//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       const response = await fetch(`${base_url}/auth/google`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id_token: credentialResponse.credential,
//         }),
//       });

//       const data = await response.json();

//       console.log("google login: ",data);

//       // if (data?.success) {
//       //   toast.success(data.message || "Successful");
//       //   router.push("/");
//       // }

//       // if (data.detail) {
//       //   toast.error(data.detail);
//       // }
//     } catch (error) {
//       console.error("Something went wrong:", error);
//       toast.error("Google login failed");
//     }
//   };

//   return (
//     <GoogleLogin
//       onSuccess={handleGoogleSuccess}
//       onError={() => {
//         toast.error("Google Login Failed");
//       }}
//       text="continue_with"
//       useOneTap={false}
//       auto_select={false}
//       type="standard"
//     />
//   );
// }

"use client";

import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function GoogleAuthButton() {

  const [redirect, setRedirect] = useState("/");
  const router = useRouter();

  const base_url = process.env.NEXT_PUBLIC_API_URL;

  const { getCartItems } = useCart();
  const { setUser } = useAuth();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(
        `${base_url}/auth/google`,
        {
          id_token: credentialResponse.credential,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Google Login:", response);

      if (response?.status === 200) {
        let userData = response?.data?.user;
        let token = response?.data?.token;
        toast.success(response?.data?.message || "Login successful");

        localStorage.setItem("1r#efp@G6*6dIBELf^8j", token);
        localStorage.setItem("&APl1#2CbnABK7xfX49b", JSON.stringify(userData));

        document.cookie = `1w8YJdmwOhRZylWbmcHX=${token}; path=/; max-age=172800`;

        setUser(userData);
        await getCartItems();

        router.replace(redirect);
       
      }

      // if (data?.success) {
      //   // toast.success(data.message || "Successful");

      //   // // Agar backend token return karta hai
      //   // localStorage.setItem("token", data.token);

      //   // router.push("/");
      // }
    } catch (error) {
      console.error("Google Login Error:", error);

      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Google login failed";

      toast.error(message);
    }
  };

  useEffect(() => {
      const value = new URLSearchParams(window.location.search).get("redirect");
      setRedirect(value || "/");
    }, []);

  return (
    <GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={() => toast.error("Google Login Failed")}
      text="continue_with"
      useOneTap={false}
      auto_select={false}
      type="standard"
    />
  );
}
