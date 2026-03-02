import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919351469466"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-luxury-lg wa-pulse"
      style={{
        background: "#25D366",
        color: "white",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)",
      }}
    >
      <SiWhatsapp size={26} />
    </a>
  );
}
