import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2100); // fade out completes at 2.1s (1.6 + 0.5)
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="loading-fade-out fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: "oklch(0.963 0.012 75)" }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Ornament */}
        <div className="loading-title opacity-0 mb-2">
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="none"
            role="img"
            aria-label="Nayra Jewels ornament"
          >
            <circle cx="20" cy="10" r="3" fill="oklch(0.72 0.1 75)" />
            <line
              x1="0"
              y1="10"
              x2="14"
              y2="10"
              stroke="oklch(0.72 0.1 75)"
              strokeWidth="1"
            />
            <line
              x1="26"
              y1="10"
              x2="40"
              y2="10"
              stroke="oklch(0.72 0.1 75)"
              strokeWidth="1"
            />
            <circle cx="7" cy="10" r="1.5" fill="oklch(0.72 0.1 75)" />
            <circle cx="33" cy="10" r="1.5" fill="oklch(0.72 0.1 75)" />
          </svg>
        </div>

        <h1
          className="loading-title opacity-0 font-serif tracking-widest text-3xl md:text-4xl"
          style={{
            color: "oklch(0.24 0.04 45)",
            animationDelay: "0.1s",
            letterSpacing: "0.18em",
          }}
        >
          NAYRA JEWELS
        </h1>

        <div
          className="loading-line h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.1 75), transparent)",
          }}
        />

        <p
          className="loading-title opacity-0 font-sans text-xs tracking-[0.3em] uppercase"
          style={{
            color: "oklch(0.52 0.04 55)",
            animationDelay: "0.3s",
          }}
        >
          New Delhi · Est. 2003
        </p>
      </div>
    </div>
  );
}
