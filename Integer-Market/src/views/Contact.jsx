"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import Badge from "../components/ui/Badge";
import ScrollReveal from "../components/ui/ScrollReveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import axios from "axios";
import { toast } from "react-toastify";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@integermarket.com",
    href: "mailto:info@integermarket.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8976993084",
    href: "tel:+91 8976993084",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Mumbai Maharashtra, India",
    href: null,
  },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9AM–6PM IST", href: null },
];

const inquiryTypes = [
  "Report inquiry",
  "Custom research request",
  "Subscription plans",
  "Partnership",
  "Press/Media",
  "General inquiry",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   console.log("form: ",form);
  //   await new Promise(r => setTimeout(r, 1200))
  //   setLoading(false)
  //   setSubmitted(true)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(`${BASE_URL}/contact/submit`, form);

      // console.log("contact response:", response);

      if (response.status === 200) {
        toast.success(response.data.message);
        setSubmitted(true);
      }
    } catch (error) {
      console.log("Contact form error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-white border-b border-slate-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Breadcrumb
              items={[{ label: "Contact Us" }]}
              className="mb-5 justify-center"
            />
            <Badge variant="white" className="mb-5">
              Get in Touch
            </Badge>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
              Contact Us
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Have a question about a report, custom research request, or
              partnership? We typically respond within 4 business hours.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <ScrollReveal key={label}>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 flex gap-4">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-slate-800 hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-800">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal>
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-slate-800 mb-2">
                  Custom Research
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Need research on a market not in our catalog? Our team can
                  design a custom research project tailored to your specific
                  needs.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-100 rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle
                      size={28}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    Message Received!
                  </h2>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you
                    within 4 business hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs text-slate-500 mb-2 font-medium"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={update("name")}
                          placeholder="Alex Johnson"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs text-slate-500 mb-2 font-medium"
                        >
                          Work Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={update("email")}
                          placeholder="alex@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-xs text-slate-500 mb-2 font-medium"
                        >
                          Company
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          value={form.company}
                          onChange={update("company")}
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-type"
                          className="block text-xs text-slate-500 mb-2 font-medium"
                        >
                          Inquiry Type
                        </label>
                        <select
                          id="contact-type"
                          value={form.type}
                          onChange={update("type")}
                          className={inputClass + " cursor-pointer"}
                        >
                          <option value="">Select type...</option>
                          {inquiryTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs text-slate-500 mb-2 font-medium"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell us how we can help you..."
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
