import { useState } from "react";
import { toast } from "sonner";
import { useBookBridalAppointment } from "../hooks/useQueries";

const occasions = ["Wedding", "Engagement", "Anniversary", "Other"];
const budgets = ["Under ₹1 Lakh", "₹1L – ₹5L", "₹5L – ₹15L", "Above ₹15L"];

export default function BridalConsultationPage() {
  const { mutateAsync, isPending } = useBookBridalAppointment();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    occasion: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.occasion) {
      toast.error("Please select an occasion");
      return;
    }
    if (!form.budget) {
      toast.error("Please select a budget range");
      return;
    }
    try {
      await mutateAsync(form);
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    }
  };

  const updateField = <K extends keyof typeof form>(key: K, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  if (submitted) {
    return (
      <main
        className="pt-[72px] min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.963 0.012 75)" }}
      >
        <div
          className="text-center max-w-md mx-auto px-8 py-16 rounded-lg shadow-luxury animate-fade-in"
          style={{
            background: "oklch(0.98 0.006 75)",
            border: "1px solid oklch(0.868 0.022 75)",
          }}
        >
          <div className="text-5xl mb-6">💎</div>
          <h1
            className="font-serif text-2xl md:text-3xl mb-4"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Consultation Booked!
          </h1>
          <p
            className="font-sans text-base leading-relaxed mb-4"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            Thank you,{" "}
            <strong style={{ color: "oklch(0.24 0.04 45)" }}>
              {form.name}
            </strong>
            . We're excited to begin your bridal journey.
          </p>
          <p
            className="font-sans text-sm leading-relaxed mb-8"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            Our bridal expert will call you at{" "}
            <strong style={{ color: "oklch(0.24 0.04 45)" }}>
              {form.phone}
            </strong>{" "}
            within 24 hours to confirm your appointment details.
          </p>
          <div
            className="p-4 rounded-lg mb-8"
            style={{ background: "oklch(0.895 0.022 75)" }}
          >
            <p
              className="font-sans text-xs"
              style={{ color: "oklch(0.52 0.04 55)" }}
            >
              Preferred Date:{" "}
              <strong style={{ color: "oklch(0.24 0.04 45)" }}>
                {new Date(form.preferredDate).toLocaleDateString("en-IN", {
                  dateStyle: "long",
                })}
              </strong>
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                email: "",
                phone: "",
                preferredDate: "",
                occasion: "",
                budget: "",
                message: "",
              });
            }}
            className="font-sans text-sm underline"
            style={{ color: "oklch(0.68 0.1 75)" }}
          >
            Book another consultation
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className="pt-[72px] min-h-screen"
      style={{ background: "oklch(0.963 0.012 75)" }}
    >
      {/* Hero Banner */}
      <div
        className="relative py-20 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.895 0.022 75) 0%, oklch(0.87 0.04 70) 100%)",
        }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c6a75e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
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
            className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Book Your Bridal Consultation
          </h1>
          <p
            className="font-sans text-base leading-relaxed"
            style={{ color: "oklch(0.42 0.055 50)" }}
          >
            A private, one-on-one session with our senior bridal expert. We'll
            understand your vision and present curated designs tailored just for
            you.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-14">
        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-10 rounded-lg shadow-luxury"
          style={{
            background: "oklch(0.98 0.006 75)",
            border: "1px solid oklch(0.868 0.022 75)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BridalField
              label="Full Name"
              required
              value={form.name}
              onChange={(v) => updateField("name", v)}
              placeholder="Your name"
            />
            <BridalField
              label="Email Address"
              type="email"
              required
              value={form.email}
              onChange={(v) => updateField("email", v)}
              placeholder="your@email.com"
            />
            <BridalField
              label="Phone Number"
              type="tel"
              required
              value={form.phone}
              onChange={(v) => updateField("phone", v)}
              placeholder="+91 XXXXX XXXXX"
            />
            <BridalField
              label="Preferred Date"
              type="date"
              required
              value={form.preferredDate}
              onChange={(v) => updateField("preferredDate", v)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Occasion */}
            <div>
              <label
                htmlFor="bridal-occasion"
                className="block font-sans text-xs uppercase tracking-wider mb-1.5"
                style={{ color: "oklch(0.42 0.055 50)" }}
              >
                Occasion <span style={{ color: "oklch(0.68 0.1 75)" }}>*</span>
              </label>
              <select
                id="bridal-occasion"
                required
                value={form.occasion}
                onChange={(e) => updateField("occasion", e.target.value)}
                className="w-full px-4 py-3 rounded text-sm font-sans focus:outline-none transition-all duration-200 appearance-none"
                style={{
                  background: "oklch(0.963 0.012 75)",
                  border: "1px solid oklch(0.868 0.022 75)",
                  color: form.occasion
                    ? "oklch(0.24 0.04 45)"
                    : "oklch(0.52 0.04 55)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.72 0.1 75)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.868 0.022 75)";
                }}
              >
                <option value="" disabled>
                  Select occasion
                </option>
                {occasions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label
                htmlFor="bridal-budget"
                className="block font-sans text-xs uppercase tracking-wider mb-1.5"
                style={{ color: "oklch(0.42 0.055 50)" }}
              >
                Budget Range{" "}
                <span style={{ color: "oklch(0.68 0.1 75)" }}>*</span>
              </label>
              <select
                id="bridal-budget"
                required
                value={form.budget}
                onChange={(e) => updateField("budget", e.target.value)}
                className="w-full px-4 py-3 rounded text-sm font-sans focus:outline-none transition-all duration-200 appearance-none"
                style={{
                  background: "oklch(0.963 0.012 75)",
                  border: "1px solid oklch(0.868 0.022 75)",
                  color: form.budget
                    ? "oklch(0.24 0.04 45)"
                    : "oklch(0.52 0.04 55)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.72 0.1 75)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.868 0.022 75)";
                }}
              >
                <option value="" disabled>
                  Select budget
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              htmlFor="bridal-message"
              className="block font-sans text-xs uppercase tracking-wider mb-1.5"
              style={{ color: "oklch(0.42 0.055 50)" }}
            >
              Your Vision / Message
            </label>
            <textarea
              id="bridal-message"
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              rows={4}
              placeholder="Tell us about your dream bridal jewellery, the wedding theme, colours you love..."
              className="w-full px-4 py-3 rounded text-sm font-sans resize-none focus:outline-none transition-all duration-200"
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

          {/* Note */}
          <div
            className="mt-6 p-4 rounded-lg"
            style={{ background: "oklch(0.895 0.022 75)" }}
          >
            <p
              className="font-sans text-xs leading-relaxed"
              style={{ color: "oklch(0.52 0.04 55)" }}
            >
              Our bridal consultations are held at our South Extension boutique,
              New Delhi. We offer complimentary tea/coffee and a curated
              jewellery presentation. Our expert will contact you within 24
              hours.
            </p>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full mt-8 btn-gold py-4 rounded font-sans text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
            style={{ letterSpacing: "0.12em" }}
          >
            {isPending ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Booking...
              </>
            ) : (
              "Book My Consultation"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}

interface BridalFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  min?: string;
}

function BridalField({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
  min,
}: BridalFieldProps) {
  const fieldId = `bridal-${label.toLowerCase().replace(/\s+/g, "-")}`;
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
        min={min}
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
