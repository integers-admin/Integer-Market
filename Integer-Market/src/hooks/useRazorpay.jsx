"use client";
import { toast } from "react-toastify";
export const useRazorpay = () => {
  const loadScript = () =>
    new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });

  const openCheckout = async ({
    order,
    onSuccess,
    onDismiss,
    customer,
  }) => {
    const isLoaded = await loadScript();

    if (!isLoaded) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: order.key_id,
      amount: order.amount,
      currency: order.currency,
      name: "Integer Market",
      description: "Market Research Reports",
      order_id: order.razorpay_order_id,

      prefill: {
        name: customer?.name || "",
        email: customer?.email || "",
        contact: customer?.phone || "",
      },

      handler: async (response) => {
        await onSuccess?.(response);
      },

      modal: {
        ondismiss: async () => {
          await onDismiss?.(order);
        },
      },

      theme: {
        color: "#f5c518",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", (response) => {
      console.error(response.error);
      toast.error(response?.error?.description || "Payment failed");
    });

    rzp.open();
  };

  return { openCheckout };
};