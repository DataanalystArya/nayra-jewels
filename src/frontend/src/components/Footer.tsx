import { Link } from "@tanstack/react-router";
import { SiFacebook, SiInstagram, SiPinterest } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      style={{
        background: "oklch(0.24 0.04 45)",
        color: "oklch(0.895 0.022 75)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3
              className="font-serif text-xl tracking-widest mb-4"
              style={{ color: "oklch(0.72 0.1 75)", letterSpacing: "0.15em" }}
            >
              NAYRA JEWELS
            </h3>
            <p className="font-sans text-sm leading-relaxed opacity-70 mb-6">
              Timeless Indian luxury jewellery from South Extension, New Delhi.
              Three generations of master craftsmen.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-100 opacity-60"
                style={{
                  border: "1px solid oklch(0.72 0.1 75)",
                  color: "oklch(0.72 0.1 75)",
                }}
              >
                <SiInstagram size={14} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-100 opacity-60"
                style={{
                  border: "1px solid oklch(0.72 0.1 75)",
                  color: "oklch(0.72 0.1 75)",
                }}
              >
                <SiFacebook size={14} />
              </a>
              <a
                href="https://pinterest.com"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-100 opacity-60"
                style={{
                  border: "1px solid oklch(0.72 0.1 75)",
                  color: "oklch(0.72 0.1 75)",
                }}
              >
                <SiPinterest size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-sans text-xs tracking-[0.2em] uppercase mb-5 font-medium"
              style={{ color: "oklch(0.72 0.1 75)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Collections", to: "/collections" },
                { label: "Our Story", to: "/#our-story" },
                { label: "Bridal Consultation", to: "/bridal-consultation" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  {link.to.startsWith("/#") ? (
                    <a
                      href={link.to}
                      className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4
              className="font-sans text-xs tracking-[0.2em] uppercase mb-5 font-medium"
              style={{ color: "oklch(0.72 0.1 75)" }}
            >
              Policies
            </h4>
            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Return Policy",
                "Shipping Policy",
              ].map((policy) => (
                <li key={policy}>
                  <a
                    href="/contact"
                    className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    {policy}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-sans text-xs tracking-[0.2em] uppercase mb-5 font-medium"
              style={{ color: "oklch(0.72 0.1 75)" }}
            >
              Visit Us
            </h4>
            <div className="space-y-3 opacity-70">
              <p className="font-sans text-sm leading-relaxed">
                South Extension
                <br />
                New Delhi – 110049
              </p>
              <p className="font-sans text-sm">Mon–Sat, 10:00 AM – 8:00 PM</p>
              <a
                href="tel:+919351469466"
                className="font-sans text-sm hover:opacity-100 transition-opacity duration-200 block"
              >
                +91 93514 69466
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(198, 167, 94, 0.2)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-sans text-xs opacity-50">
              © {new Date().getFullYear()} Nayra Jewels. All rights reserved.
            </p>
            <p className="font-sans text-xs opacity-40">
              BIS Hallmarked Gold · IGI Certified Diamonds · Secure Payments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
