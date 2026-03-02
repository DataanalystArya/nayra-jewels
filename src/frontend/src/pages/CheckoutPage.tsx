import { Link } from "@tanstack/react-router";
import { ChevronRight, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useShop } from "../context/ShopContext";
import { formatINR, getProductImage } from "../utils/productImages";

type PaymentMethod = "upi" | "card" | "cod";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useShop();
  const [step, setStep] = useState<"form" | "success">("form");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [isPlacing, setIsPlacing] = useState(false);

  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [address, setAddress] = useState({
    line1: "",
    city: "",
    state: "",
    pincode: "",
  });

  const shipping = cartTotal >= BigInt(5000000) ? BigInt(0) : BigInt(50000);
  const total = cartTotal + shipping;

  if (cartItems.length === 0 && step !== "success") {
    return (
      <main
        className="pt-[72px] min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.963 0.012 75)" }}
      >
        <div className="text-center px-4">
          <h1
            className="font-serif text-2xl mb-4"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Your cart is empty
          </h1>
          <Link
            to="/collections"
            className="inline-block btn-gold px-8 py-3 rounded font-sans text-sm font-medium uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            Browse Collections
          </Link>
        </div>
      </main>
    );
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlacing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsPlacing(false);
    clearCart();
    setStep("success");
  };

  if (step === "success") {
    return (
      <main
        className="pt-[72px] min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.963 0.012 75)" }}
      >
        <div
          className="text-center max-w-md mx-auto px-8 py-12 rounded-lg shadow-luxury"
          style={{
            background: "oklch(0.98 0.006 75)",
            border: "1px solid oklch(0.868 0.022 75)",
          }}
        >
          <div className="text-5xl mb-6">✨</div>
          <h1
            className="font-serif text-2xl md:text-3xl mb-4"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Order Placed Successfully!
          </h1>
          <p
            className="font-sans text-sm leading-relaxed mb-6"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            Thank you for choosing Nayra Jewels. Our team will contact you at{" "}
            {contact.email} to confirm your order and arrange delivery.
          </p>
          <div
            className="p-4 rounded-lg mb-8"
            style={{ background: "oklch(0.895 0.022 75)" }}
          >
            <p
              className="font-sans text-xs"
              style={{ color: "oklch(0.52 0.04 55)" }}
            >
              For queries, call or WhatsApp us at{" "}
              <a
                href="tel:+919351469466"
                className="font-medium"
                style={{ color: "oklch(0.68 0.1 75)" }}
              >
                +91 93514 69466
              </a>
            </p>
          </div>
          <Link
            to="/"
            className="inline-block btn-gold px-8 py-3.5 rounded font-sans text-sm font-medium uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="pt-[72px] min-h-screen"
      style={{ background: "oklch(0.963 0.012 75)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <h1
          className="font-serif text-3xl md:text-4xl mb-8"
          style={{ color: "oklch(0.24 0.04 45)" }}
        >
          Checkout
        </h1>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact */}
              <FormSection title="Contact Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CheckoutField
                    label="Full Name"
                    required
                    value={contact.name}
                    onChange={(v) => setContact((c) => ({ ...c, name: v }))}
                    placeholder="Your full name"
                  />
                  <CheckoutField
                    label="Email"
                    type="email"
                    required
                    value={contact.email}
                    onChange={(v) => setContact((c) => ({ ...c, email: v }))}
                    placeholder="your@email.com"
                  />
                </div>
                <CheckoutField
                  label="Phone"
                  type="tel"
                  required
                  value={contact.phone}
                  onChange={(v) => setContact((c) => ({ ...c, phone: v }))}
                  placeholder="+91 XXXXX XXXXX"
                />
              </FormSection>

              {/* Address */}
              <FormSection title="Delivery Address">
                <CheckoutField
                  label="Address Line"
                  required
                  value={address.line1}
                  onChange={(v) => setAddress((a) => ({ ...a, line1: v }))}
                  placeholder="House/Flat No., Street, Area"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <CheckoutField
                    label="City"
                    required
                    value={address.city}
                    onChange={(v) => setAddress((a) => ({ ...a, city: v }))}
                    placeholder="City"
                  />
                  <CheckoutField
                    label="State"
                    required
                    value={address.state}
                    onChange={(v) => setAddress((a) => ({ ...a, state: v }))}
                    placeholder="State"
                  />
                  <CheckoutField
                    label="Pincode"
                    required
                    value={address.pincode}
                    onChange={(v) => setAddress((a) => ({ ...a, pincode: v }))}
                    placeholder="110049"
                  />
                </div>
              </FormSection>

              {/* Payment */}
              <FormSection title="Payment Method">
                <div className="space-y-3">
                  {(
                    [
                      {
                        value: "upi" as const,
                        label: "UPI / PhonePe / GPay",
                        icon: "📱",
                      },
                      {
                        value: "card" as const,
                        label: "Credit / Debit Card",
                        icon: "💳",
                      },
                      {
                        value: "cod" as const,
                        label: "Cash on Delivery (Delhi only)",
                        icon: "💰",
                      },
                    ] as const
                  ).map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200"
                      style={{
                        border:
                          paymentMethod === option.value
                            ? "1.5px solid oklch(0.72 0.1 75)"
                            : "1px solid oklch(0.868 0.022 75)",
                        background:
                          paymentMethod === option.value
                            ? "oklch(0.895 0.022 75)"
                            : "oklch(0.98 0.006 75)",
                      }}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={option.value}
                        checked={paymentMethod === option.value}
                        onChange={() => setPaymentMethod(option.value)}
                        className="sr-only"
                      />
                      <div
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                        style={{
                          borderColor:
                            paymentMethod === option.value
                              ? "oklch(0.72 0.1 75)"
                              : "oklch(0.868 0.022 75)",
                        }}
                      >
                        {paymentMethod === option.value && (
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: "oklch(0.72 0.1 75)" }}
                          />
                        )}
                      </div>
                      <span className="text-lg">{option.icon}</span>
                      <span
                        className="font-sans text-sm font-medium"
                        style={{ color: "oklch(0.24 0.04 45)" }}
                      >
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* UPI details */}
                {paymentMethod === "upi" && (
                  <div
                    className="mt-4 p-5 rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-6"
                    style={{
                      background: "oklch(0.895 0.022 75)",
                      border: "1px solid oklch(0.868 0.022 75)",
                    }}
                  >
                    <div>
                      <p
                        className="font-sans text-xs uppercase tracking-wider mb-2"
                        style={{ color: "oklch(0.68 0.1 75)" }}
                      >
                        Scan QR or Pay via UPI ID
                      </p>
                      <img
                        src="/assets/uploads/image-1.png"
                        alt="PhonePe QR Code"
                        className="w-28 h-28 object-contain rounded"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display =
                            "none";
                        }}
                      />
                    </div>
                    <div>
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
                      <p
                        className="font-sans text-xs mt-2"
                        style={{ color: "oklch(0.52 0.04 55)" }}
                      >
                        After payment, send screenshot to WhatsApp +91 93514
                        69466
                      </p>
                    </div>
                  </div>
                )}
              </FormSection>
            </div>

            {/* Order Summary */}
            <div>
              <div
                className="p-6 rounded-lg shadow-luxury sticky top-24"
                style={{
                  background: "oklch(0.98 0.006 75)",
                  border: "1px solid oklch(0.868 0.022 75)",
                }}
              >
                <h2
                  className="font-serif text-xl mb-6"
                  style={{ color: "oklch(0.24 0.04 45)" }}
                >
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.productId.toString()}
                      className="flex gap-3 items-center"
                    >
                      <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={getProductImage(item.product)}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-sans text-xs leading-tight line-clamp-1"
                          style={{ color: "oklch(0.24 0.04 45)" }}
                        >
                          {item.product.name}
                        </p>
                        <p
                          className="font-sans text-[10px]"
                          style={{ color: "oklch(0.52 0.04 55)" }}
                        >
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p
                        className="font-sans text-xs font-medium flex-shrink-0"
                        style={{ color: "oklch(0.42 0.055 50)" }}
                      >
                        {formatINR(item.product.price * BigInt(item.quantity))}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{ height: "1px", background: "oklch(0.868 0.022 75)" }}
                  className="mb-4"
                />

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span
                      className="font-sans text-sm"
                      style={{ color: "oklch(0.52 0.04 55)" }}
                    >
                      Subtotal
                    </span>
                    <span
                      className="font-sans text-sm font-medium"
                      style={{ color: "oklch(0.24 0.04 45)" }}
                    >
                      {formatINR(cartTotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className="font-sans text-sm"
                      style={{ color: "oklch(0.52 0.04 55)" }}
                    >
                      Shipping
                    </span>
                    <span
                      className="font-sans text-sm font-medium"
                      style={{
                        color:
                          shipping === BigInt(0)
                            ? "#22c55e"
                            : "oklch(0.24 0.04 45)",
                      }}
                    >
                      {shipping === BigInt(0) ? "Free" : formatINR(shipping)}
                    </span>
                  </div>
                  <div
                    style={{
                      height: "1px",
                      background: "oklch(0.868 0.022 75)",
                    }}
                    className="my-2"
                  />
                  <div className="flex justify-between">
                    <span
                      className="font-sans text-base font-medium"
                      style={{ color: "oklch(0.24 0.04 45)" }}
                    >
                      Total
                    </span>
                    <span
                      className="font-sans text-lg font-semibold"
                      style={{ color: "oklch(0.24 0.04 45)" }}
                    >
                      {formatINR(total)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isPlacing}
                  className="w-full btn-gold py-4 rounded font-sans text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {isPlacing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Placing Order...
                    </>
                  ) : (
                    <>
                      Place Order <ChevronRight size={16} />
                    </>
                  )}
                </button>

                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <Shield size={12} style={{ color: "oklch(0.68 0.1 75)" }} />
                  <p
                    className="font-sans text-[10px]"
                    style={{ color: "oklch(0.52 0.04 55)" }}
                  >
                    Secure & Encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

function FormSection({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="p-6 md:p-8 rounded-lg shadow-luxury"
      style={{
        background: "oklch(0.98 0.006 75)",
        border: "1px solid oklch(0.868 0.022 75)",
      }}
    >
      <h2
        className="font-serif text-lg mb-6"
        style={{ color: "oklch(0.24 0.04 45)" }}
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

interface CheckoutFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}

function CheckoutField({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
}: CheckoutFieldProps) {
  const fieldId = `checkout-${label.toLowerCase().replace(/\s+/g, "-")}`;
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
