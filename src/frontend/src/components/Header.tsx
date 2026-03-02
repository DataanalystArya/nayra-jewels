import { Link, useLocation } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";

const navLinks = [
  { label: "Collections", to: "/collections" },
  { label: "Our Story", to: "/#our-story" },
  { label: "Bridal", to: "/bridal-consultation" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const { cartCount, wishlistIds } = useShop();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const wishCount = wishlistIds.size;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: "72px",
          background: scrolled
            ? "rgba(246, 241, 235, 0.97)"
            : "rgba(246, 241, 235, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid oklch(0.868 0.022 75)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 16px rgba(62, 47, 39, 0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/assets/generated/nayra-jewels-logo-premium-transparent.dim_600x180.png"
              alt="Nayra Jewels"
              className="h-10 md:h-11 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <span
              className="hidden font-serif text-xl tracking-wider"
              style={{ color: "oklch(0.24 0.04 45)" }}
            >
              Nayra Jewels
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="font-sans text-sm tracking-widest uppercase transition-colors duration-200"
                  style={{
                    color: "oklch(0.42 0.055 50)",
                    letterSpacing: "0.1em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "oklch(0.68 0.1 75)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "oklch(0.42 0.055 50)";
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-sm uppercase transition-colors duration-200"
                  style={{
                    color: "oklch(0.42 0.055 50)",
                    letterSpacing: "0.1em",
                  }}
                  activeProps={{
                    style: { color: "oklch(0.68 0.1 75)" },
                  }}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              aria-label="Search"
              className="p-2 rounded-full transition-colors duration-200 hover:bg-nayra-beige"
              style={{ color: "oklch(0.42 0.055 50)" }}
            >
              <Search size={18} />
            </button>

            <Link
              to="/wishlist"
              aria-label={`Wishlist (${wishCount} items)`}
              className="relative p-2 rounded-full transition-colors duration-200 hover:bg-nayra-beige"
              style={{ color: "oklch(0.42 0.055 50)" }}
            >
              <Heart size={18} />
              {wishCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-semibold text-white"
                  style={{ background: "oklch(0.68 0.1 75)" }}
                >
                  {wishCount}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              aria-label={`Cart (${cartCount} items)`}
              className="relative p-2 rounded-full transition-colors duration-200 hover:bg-nayra-beige"
              style={{ color: "oklch(0.42 0.055 50)" }}
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-semibold text-white"
                  style={{ background: "oklch(0.68 0.1 75)" }}
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-full transition-colors duration-200 hover:bg-nayra-beige"
              style={{ color: "oklch(0.42 0.055 50)" }}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          role="button"
          tabIndex={0}
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
          aria-label="Close menu overlay"
          style={{ background: "rgba(62, 47, 39, 0.3)" }}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
        style={{
          width: "280px",
          background: "oklch(0.963 0.012 75)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          boxShadow: "-4px 0 24px rgba(62, 47, 39, 0.12)",
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: "oklch(0.868 0.022 75)" }}
        >
          <span
            className="font-serif text-lg tracking-wider"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Menu
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-full hover:bg-nayra-beige"
            aria-label="Close menu"
          >
            <X size={18} style={{ color: "oklch(0.42 0.055 50)" }} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-base tracking-widest uppercase"
                style={{
                  color: "oklch(0.42 0.055 50)",
                  letterSpacing: "0.12em",
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="font-sans text-base uppercase"
                style={{
                  color: "oklch(0.42 0.055 50)",
                  letterSpacing: "0.12em",
                }}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="mt-auto px-6 pb-8 flex flex-col gap-3">
          <Link
            to="/wishlist"
            className="flex items-center gap-3 py-3 px-4 rounded-lg"
            style={{
              background: "oklch(0.895 0.022 75)",
              color: "oklch(0.24 0.04 45)",
            }}
          >
            <Heart size={16} />
            <span className="text-sm font-sans">
              Wishlist {wishCount > 0 && `(${wishCount})`}
            </span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-3 py-3 px-4 rounded-lg"
            style={{
              background: "oklch(0.68 0.1 75)",
              color: "oklch(0.24 0.04 45)",
            }}
          >
            <ShoppingBag size={16} />
            <span className="text-sm font-sans font-medium">
              Cart {cartCount > 0 && `(${cartCount})`}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
