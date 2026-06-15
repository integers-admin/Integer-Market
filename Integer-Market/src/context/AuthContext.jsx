"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

const MOCK_USER = {
  id: 1,
  name: "Alex Johnson",
  email: "alex@company.com",
  company: "NutriCorp Ltd.",
  avatar: null,
  purchasedReports: [1, 3, 5],
  // Rich metadata for each purchased report
  purchasedReportsMeta: [
    {
      reportId: 1,
      purchasedAt: "2025-11-15T10:24:00Z",
      price: 299,
      expiryDate: null,
      orderId: "ORD-10041",
    },
    {
      reportId: 3,
      purchasedAt: "2025-12-02T14:09:00Z",
      price: 249,
      expiryDate: null,
      orderId: "ORD-10078",
    },
    {
      reportId: 5,
      purchasedAt: "2026-01-18T08:55:00Z",
      price: 299,
      expiryDate: null,
      orderId: "ORD-10154",
    },
  ],
  joinDate: "2025-11-01",
  // Mock password for demo validation
  _password: "password123",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  // const checkAuth = async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/auth/me`, {
  //       withCredentials: true,
  //     });

  //     console.log("response check auth: ",response);
  //     // setUser(response.data);
  //   } catch (error) {
  //     console.log("Auth Error:", error);
  //   console.log("Status:", error.response?.status);
  //   console.log("Data:", error.response?.data);

  //     setUser(null);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  // const login = async (email, _password) => {
  //   setIsLoading(true)
  //   await new Promise(r => setTimeout(r, 900))
  //   setUser({ ...MOCK_USER, email })
  //   setIsLoading(false)
  //   return true
  // }

  const login = async (data) => {
    try {
      setIsLoading(true);

      const response = await axios.post(`${BASE_URL}/checkout/login`, data);

      // console.log("login response:", response);

      if (response?.status === 200) {
        let userData = response?.data?.user;
        let token = response?.data?.token;
        toast.success(response?.data?.message || "Login successful");

        // console.log("userName: ",userName);
        // console.log("token: ",token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        return true;
      }

      // if (response?.status === 200) {

      //   return true;
      // }
    } catch (error) {
      console.log("login Error:" || error.detail);

      toast.error(
        error.response?.data?.detail || error.message || "Something went wrong",
      );

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    // console.log("user use: ",user);

    if (token && user) {
      setUser(user);
    }

    setIsLoading(false);
  }, []);

  // const signup = async (data) => {
  //   setIsLoading(true)
  //   await new Promise(r => setTimeout(r, 1200))
  //   setUser({
  //     ...MOCK_USER,
  //     name: data.name || MOCK_USER.name,
  //     email: data.email,
  //     company: data.company || '',
  //     purchasedReports: [],
  //     purchasedReportsMeta: [],
  //   })
  //   setIsLoading(false)
  //   return true
  // }

  const signup = async (data) => {
    try {
      setIsLoading(true);

      const response = await axios.post(`${BASE_URL}/checkout/register`, data);

      // console.log("signup response:", response);

      if (response?.status === 200) {
        toast.success(
          response?.data?.message ||
            "Registration successful! Please check your email for the verification link.",
        );
        return true;
      }
      return false;
    } catch (error) {
      console.log("Signup Error:", error);
      toast.error(
        error.response?.data?.detail || error.message || "Something went wrong",
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // const logout = () => setUser(null);

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  /**
   * updateProfile - handles both profile edits and password changes.
   * If `currentPassword` is provided, validates it before allowing a password reset.
   * Returns: { ok: true } or { ok: false, error: string }
   */
  // const updateProfile = async (updates) => {
  //   setIsLoading(true);
  //   console.log("updates: ",updates);
  //   alert("update profile");
  //   await new Promise((r) => setTimeout(r, 700));

  //   // Password change: validate current password
  //   if (updates.newPassword) {
  //     if (updates.currentPassword !== user._password) {
  //       setIsLoading(false);
  //       return { ok: false, error: "Current password is incorrect." };
  //     }
  //     setUser((prev) => ({ ...prev, _password: updates.newPassword }));
  //     setIsLoading(false);
  //     return { ok: true };
  //   }

  //   setUser((prev) => ({ ...prev, ...updates }));
  //   setIsLoading(false);
  //   return { ok: true };
  // };

  // const updateProfile = async (updates) => {
  //   try {
  //     setIsLoading(true);

  //     console.log("updates:", updates);

  //     const token = localStorage.getItem("token");

  //     const response = await axios.put(`${BASE_URL}/update-profile`, updates, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     console.log("update profile response:", response);

  //     if (response.status === 200) {
  //       if (response?.data?.force_logout === true) {
  //         localStorage.removeItem("token");
  //         localStorage.removeItem("user");
  //       }
  //       console.log("response: ", response);
  //       // const updatedUser = response.data.user;

  //       // // Update local state
  //       // setUser(updatedUser);

  //       alert(response.data.message || "Profile updated successfully");

  //       // return { ok: true };
  //     }

  //     return { ok: false, error: "Failed to update profile" };
  //   } catch (error) {
  //     console.log("Update Profile Error:", error);

  //     const errorMessage =
  //       error.response?.data?.detail ||
  //       error.response?.data?.message ||
  //       error.message ||
  //       "Something went wrong";

  //     alert(errorMessage);

  //     return {
  //       ok: false,
  //       error: errorMessage,
  //     };
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const updateProfile = async (updates) => {
    try {
      setIsLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.put(`${BASE_URL}/update-profile`, updates, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // console.log("response: ", response);

      if (response.status === 200) {
        // Password/email change ke baad force logout
        if (response?.data?.force_logout === true) {
          toast.success(response?.data?.message);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);

          return {
            ok: true,
            forceLogout: true,
            message: response.data.message,
          };
        }

        return {
          ok: true,
          forceLogout: false,
          message: response.data.message,
        };
      }

      return {
        ok: false,
        error: "Failed to update profile",
      };
    } catch (error) {
      return {
        ok: false,
        error:
          error.response?.data?.detail ||
          error.response?.data?.message ||
          error.message,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfilePass = async (updates) => {
    try {
      setIsLoading(true);

      const token = localStorage.getItem("token");

      let payloadData = {
        current_password: updates.currentPassword,
        new_password: updates.newPassword,
        confirm_password: updates.newPassword,
      };

      const response = await axios.post(
        `${BASE_URL}/change-password`,
        payloadData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        // Password/email change ke baad force logout
        if (response?.data?.force_logout === true) {
          toast.success(response?.data?.message);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);

          return {
            ok: true,
            forceLogout: true,
            message: response.data.message,
          };
        }

        return {
          ok: true,
          forceLogout: false,
          message: response.data.message,
        };
      }

      return {
        ok: false,
        error: "Failed to update Password",
      };
    } catch (error) {
      return {
        ok: false,
        error:
          error.response?.data?.detail ||
          error.response?.data?.message ||
          error.message,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const hasReport = (reportId) =>
    user?.purchasedReports?.includes(reportId) ?? false;

  const purchaseReport = (reportId, price = 299) => {
    if (!user) return;
    const meta = {
      reportId,
      purchasedAt: new Date().toISOString(),
      price,
      expiryDate: null,
      orderId: `ORD-${Math.floor(10000 + Math.random() * 89999)}`,
    };
    setUser((prev) => ({
      ...prev,
      purchasedReports: [
        ...new Set([...(prev.purchasedReports || []), reportId]),
      ],
      purchasedReportsMeta: [...(prev.purchasedReportsMeta || []), meta],
      downloadsUsed: prev.downloadsUsed + 1,
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        updateProfile,
        updateProfilePass,
        hasReport,
        purchaseReport,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const defaultAuthContext = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  updateProfile: async () => ({ ok: true }),
  updateProfilePass: async () => ({ ok: true }),
  hasReport: () => false,
  purchaseReport: () => {},
};

export function useAuth() {
  return useContext(AuthContext) ?? defaultAuthContext;
}
