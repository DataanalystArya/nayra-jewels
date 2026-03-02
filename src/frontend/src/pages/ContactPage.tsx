import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactMessage } from "../hooks/useQueries";

export default function ContactPage() {
  const { mutateAsync, isPending } = useSubmitContactMessage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <main
      className="pt-[72px] min-h-screen"
      style={{ background: "oklch(0.963 0.012 75)" }}
    >
      {/* Page Header */}
      <div
        className="py-16 text-center"
        style={{
          background: "oklch(0.895 0.022 75)",
          borderBottom: "1px solid oklch(0.868 0.022 75)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <span
            className="block mx-auto mb-5"
            style={{
              width: "60px",
              height: "1.5px",
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.1 75), transparent)",
            }}
          />
          <h1
            className="font-serif text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Contact Us
          </h1>
          <p
            className="font-sans text-sm md:text-base mt-4"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            We'd love to hear from you. Visit us, call us, or send a message.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2
                className="font-serif text-2xl mb-6"
                style={{ color: "oklch(0.24 0.04 45)" }}
              >
                Visit Our Boutique
              </h2>
              <div className="space-y-4">
                <InfoItem icon="📍" label="Address">
                  South Extension, New Delhi – 110049
                </InfoItem>
                <InfoItem icon="⏰" label="Hours">
                  Monday – Saturday: 10:00 AM – 8:00 PM
                </InfoItem>
                <InfoItem icon="📞" label="Phone">
                  <a
                    href="tel:+919351469466"
                    className="hover:underline"
                    style={{ color: "oklch(0.42 0.055 50)" }}
                  >
                    +91 93514 69466
                  </a>
                </InfoItem>
                <InfoItem icon="💬" label="WhatsApp">
                  <a
                    href="https://wa.me/919351469466"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: "oklch(0.42 0.055 50)" }}
                  >
                    +91 93514 69466
                  </a>
                </InfoItem>
              </div>
            </div>

            {/* Payment QR */}
            <div>
              <h3
                className="font-serif text-lg mb-4"
                style={{ color: "oklch(0.24 0.04 45)" }}
              >
                Pay Online
              </h3>
              <div
                className="inline-flex flex-row items-center gap-6 p-5 rounded-lg"
                style={{
                  background: "oklch(0.98 0.006 75)",
                  border: "1px solid oklch(0.868 0.022 75)",
                }}
              >
                <img
                  src="/assets/uploads/image-1.png"
                  alt="PhonePe QR Code"
                  className="w-28 h-28 object-contain rounded"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const div = document.createElement("div");
                    div.style.cssText =
                      "width:112px;height:112px;background:oklch(0.895 0.022 75);border-radius:4px;display:flex;align-items:center;justify-content:center;";
                    div.innerHTML =
                      '<span style="font-size:11px;color:oklch(0.52 0.04 55);text-align:center;padding:8px">QR Code<br/>Coming Soon</span>';
                    el.parentElement?.insertBefore(div, el);
                  }}
                />
                <div>
                  <p
                    className="font-sans text-xs uppercase tracking-wider mb-2"
                    style={{ color: "oklch(0.68 0.1 75)" }}
                  >
                    Scan to Pay via PhonePe
                  </p>
                  <p
                    className="font-sans text-sm font-medium mb-1"
                    style={{ color: "oklch(0.24 0.04 45)" }}
                  >
                    UPI ID:
                  </p>
                  <code
                    className="font-mono text-base font-semibold"
                    style={{ color: "oklch(0.68 0.1 75)" }}
                  >
                    9351469466@ibl
                  </code>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3
                className="font-serif text-lg mb-4"
                style={{ color: "oklch(0.24 0.04 45)" }}
              >
                Find Us
              </h3>
              <div className="rounded-lg overflow-hidden shadow-luxury">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0!2d77.21722!3d28.56802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f0000000!2sSouth+Extension%2C+New+Delhi!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Nayra Jewels — South Extension, New Delhi"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div
              className="p-8 rounded-lg shadow-luxury"
              style={{
                background: "oklch(0.98 0.006 75)",
                border: "1px solid oklch(0.868 0.022 75)",
              }}
            >
              <h2
                className="font-serif text-2xl mb-6"
                style={{ color: "oklch(0.24 0.04 45)" }}
              >
                Send a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✨</div>
                  <h3
                    className="font-serif text-xl mb-3"
                    style={{ color: "oklch(0.24 0.04 45)" }}
                  >
                    Message Received!
                  </h3>
                  <p
                    className="font-sans text-sm"
                    style={{ color: "oklch(0.52 0.04 55)" }}
                  >
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-sans text-sm underline"
                    style={{ color: "oklch(0.68 0.1 75)" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <ContactField
                    label="Full Name"
                    required
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    placeholder="Your name"
                  />
                  <ContactField
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    placeholder="your@email.com"
                  />
                  <ContactField
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  <div>
                    <label
                      htmlFor="contact-page-message"
                      className="block font-sans text-xs uppercase tracking-wider mb-1.5"
                      style={{ color: "oklch(0.42 0.055 50)" }}
                    >
                      Message{" "}
                      <span style={{ color: "oklch(0.68 0.1 75)" }}>*</span>
                    </label>
                    <textarea
                      id="contact-page-message"
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded text-sm font-sans resize-none focus:outline-none transition-all duration-200"
                      style={{
                        background: "oklch(0.963 0.012 75)",
                        border: "1px solid oklch(0.868 0.022 75)",
                        color: "oklch(0.24 0.04 45)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "oklch(0.72 0.1 75)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "oklch(0.868 0.022 75)";
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full btn-gold py-4 rounded font-sans text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoItem({
  icon,
  label,
  children,
}: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p
          className="font-sans text-[10px] uppercase tracking-wider mb-0.5"
          style={{ color: "oklch(0.68 0.1 75)" }}
        >
          {label}
        </p>
        <div
          className="font-sans text-sm"
          style={{ color: "oklch(0.42 0.055 50)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

interface ContactFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}

function ContactField({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
}: ContactFieldProps) {
  const fieldId = `contact-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <label
        htmlFor={fieldId}
        className="block font-sans text-xs uppercase tracking-wider mb-1.5"
        style={{ color: "oklch(0.42 0.055 50)" }}
      >
        {label}{" "}
        {required && <span style={{ color: "oklch(0.68 0.1 75)" }}>*</span>}
      </label>
      <input
        id={fieldId}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded text-sm font-sans focus:outline-none transition-all duration-200"
        style={{
          background: "oklch(0.963 0.012 75)",
          border: "1px solid oklch(0.868 0.022 75)",
          color: "oklch(0.24 0.04 45)",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "oklch(0.72 0.1 75)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "oklch(0.868 0.022 75)";
        }}
      />
    </div>
  );
}

import type React from "react";
