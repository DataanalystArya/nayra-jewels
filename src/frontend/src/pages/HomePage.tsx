import { Link } from "@tanstack/react-router";
import { Award, ChevronRight, Shield, Star, Truck } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { useGetFeaturedProducts } from "../hooks/useQueries";

const collections = [
  {
    name: "Bridal Heritage",
    tagline: "Heirloom jewellery for your most sacred day",
    image: "/assets/generated/collection-bridal-heritage.dim_800x600.jpg",
  },
  {
    name: "Diamond Collection",
    tagline: "IGI certified brilliance, forever yours",
    image: "/assets/generated/collection-diamond.dim_800x600.jpg",
  },
  {
    name: "Contemporary Gold",
    tagline: "Modern silhouettes in 22k heritage gold",
    image: "/assets/generated/collection-contemporary-gold.dim_800x600.jpg",
  },
  {
    name: "Polki & Kundan",
    tagline: "Royal courts of Rajasthan reimagined",
    image: "/assets/generated/collection-polki-kundan.dim_800x600.jpg",
  },
  {
    name: "Everyday Fine Jewellery",
    tagline: "Refined pieces for every beautiful moment",
    image: "/assets/generated/collection-everyday.dim_800x600.jpg",
  },
  {
    name: "Custom Creations",
    tagline: "Your story, crafted in gold",
    image: "/assets/generated/collection-custom.dim_800x600.jpg",
  },
  {
    name: "Bridal Sets",
    tagline: "Complete ensembles for your most precious day",
    image: "/assets/generated/collection-bridal-sets.dim_800x600.jpg",
  },
  {
    name: "Statement Necklaces",
    tagline: "Bold heritage necklaces that command every room",
    image: "/assets/generated/collection-statement-necklaces.dim_800x600.jpg",
  },
  {
    name: "Temple Jewellery",
    tagline: "Sacred gold, blessed by generations of craft",
    image: "/assets/generated/collection-temple-jewellery.dim_800x600.jpg",
  },
  {
    name: "Diamond Rings",
    tagline: "IGI certified brilliance for every milestone",
    image: "/assets/generated/collection-diamond-rings.dim_800x600.jpg",
  },
  {
    name: "Polki Collection",
    tagline: "Uncut diamonds from the royal courts of Rajasthan",
    image: "/assets/generated/collection-polki.dim_800x600.jpg",
  },
  {
    name: "Kundan Collection",
    tagline: "Mughal artistry reborn in timeless stone settings",
    image: "/assets/generated/collection-kundan.dim_800x600.jpg",
  },
  {
    name: "Limited Edition Collection",
    tagline: "Rare, numbered, extraordinary — crafted once",
    image: "/assets/generated/collection-limited-edition.dim_800x600.jpg",
  },
  {
    name: "Heirloom Collection",
    tagline: "Pieces designed to outlive generations",
    image: "/assets/generated/collection-heirloom.dim_800x600.jpg",
  },
  {
    name: "Festive Collection",
    tagline: "Celebrate every occasion in luminous gold",
    image: "/assets/generated/collection-festive.dim_800x600.jpg",
  },
];

const testimonials = [
  {
    text: "Nayra Jewels made my wedding day unforgettable. The bridal set was beyond my dreams — so intricate and so beautiful.",
    name: "Priya Malhotra",
    location: "New Delhi",
  },
  {
    text: "The quality is exceptional. You can feel the craftsmanship in every piece. I wear my Nayra necklace every day.",
    name: "Anika Sharma",
    location: "Gurugram",
  },
  {
    text: "From the first consultation to the final delivery, the entire experience felt like couture. Truly a heritage jewellery house.",
    name: "Meera Kapoor",
    location: "Mumbai",
  },
];

export default function HomePage() {
  const { data: featuredProducts, isLoading: featLoading } =
    useGetFeaturedProducts();

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "90vh" }}
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bridal.dim_1600x900.jpg')",
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(20, 12, 8, 0.35)" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto animate-fade-in">
          {/* Gold ornament */}
          <div className="flex items-center justify-center mb-6">
            <div
              className="h-px w-12"
              style={{ background: "oklch(0.72 0.1 75)" }}
            />
            <svg
              className="mx-3"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              role="img"
              aria-label="Decorative diamond ornament"
            >
              <circle cx="10" cy="10" r="3" fill="oklch(0.72 0.1 75)" />
              <circle
                cx="10"
                cy="10"
                r="6"
                stroke="oklch(0.72 0.1 75)"
                strokeWidth="0.75"
                fill="none"
              />
            </svg>
            <div
              className="h-px w-12"
              style={{ background: "oklch(0.72 0.1 75)" }}
            />
          </div>

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            style={{ color: "oklch(0.975 0.008 75)" }}
          >
            Timeless Jewellery for Life's Most Precious Moments.
          </h1>

          <p
            className="font-sans text-base md:text-lg mb-8 leading-relaxed opacity-90 max-w-xl mx-auto"
            style={{ color: "oklch(0.895 0.022 75)" }}
          >
            Three generations of master craftsmen. BIS hallmarked gold. Heritage
            designs from the heart of New Delhi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/collections"
              className="btn-gold px-8 py-3.5 rounded text-sm font-sans font-medium tracking-wider uppercase"
              style={{ letterSpacing: "0.12em" }}
            >
              Explore Collection
            </Link>
            <Link
              to="/bridal-consultation"
              className="btn-gold-outline px-8 py-3.5 rounded text-sm font-sans font-medium tracking-wider uppercase"
              style={{ letterSpacing: "0.12em" }}
            >
              Book Bridal Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badge Bar */}
      <div
        className="py-4 overflow-x-auto"
        style={{ background: "oklch(0.895 0.022 75)" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 md:gap-12 min-w-max md:min-w-0">
          {[
            { icon: "🏅", text: "BIS Hallmarked Gold" },
            { icon: "💎", text: "IGI Certified Diamonds" },
            { icon: "🔒", text: "Secure Payment" },
            { icon: "✨", text: "Free Shipping Above ₹50,000" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2">
              <span className="text-lg">{badge.icon}</span>
              <span
                className="font-sans text-xs md:text-sm font-medium whitespace-nowrap"
                style={{ color: "oklch(0.42 0.055 50)" }}
              >
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Signature Collections */}
      <section
        className="section-py section-px max-w-7xl mx-auto"
        id="collections"
        aria-labelledby="collections-heading"
      >
        <div className="text-center mb-12">
          <span
            className="gold-divider mb-6 block mx-auto"
            style={{
              width: "60px",
              height: "1.5px",
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.1 75), transparent)",
            }}
          />
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            id="collections-heading"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Our Signature Collections
          </h2>
          <p
            className="font-sans text-sm md:text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            From elaborate bridal sets to everyday elegance — each collection
            tells a story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.name}
              to="/collections/$category"
              params={{ category: encodeURIComponent(col.name) }}
              className="group relative overflow-hidden rounded-lg hover-lift shadow-luxury"
              style={{ paddingBottom: "66%" }}
            >
              <img
                src={col.image}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(30, 18, 12, 0.75) 0%, rgba(30, 18, 12, 0.1) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3
                  className="font-serif text-xl md:text-2xl mb-1"
                  style={{ color: "oklch(0.975 0.008 75)" }}
                >
                  {col.name}
                </h3>
                <p
                  className="font-sans text-xs md:text-sm opacity-80"
                  style={{ color: "oklch(0.895 0.022 75)" }}
                >
                  {col.tagline}
                </p>
                <div
                  className="mt-3 flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider opacity-80 transition-opacity group-hover:opacity-100"
                  style={{
                    color: "oklch(0.84 0.075 75)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Explore <ChevronRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section
        id="our-story"
        className="section-py"
        style={{ background: "oklch(0.895 0.022 75)" }}
        aria-labelledby="story-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="rounded-lg overflow-hidden shadow-luxury-lg"
              style={{ paddingBottom: "77%" }}
            >
              <img
                src="/assets/generated/our-story-store.dim_900x700.jpg"
                alt="Nayra Jewels store interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-lg -z-10"
              style={{ border: "1.5px solid oklch(0.72 0.1 75)", opacity: 0.4 }}
            />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px w-8"
                style={{ background: "oklch(0.72 0.1 75)" }}
              />
              <span
                className="font-sans text-xs uppercase tracking-[0.2em]"
                style={{ color: "oklch(0.68 0.1 75)" }}
              >
                Our Legacy
              </span>
            </div>
            <h2
              className="font-serif text-3xl md:text-4xl mb-6 leading-tight"
              id="story-heading"
              style={{ color: "oklch(0.24 0.04 45)" }}
            >
              A Legacy of Craftsmanship
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.42 0.055 50)" }}
            >
              Founded in the heart of South Extension, New Delhi, Nayra Jewels
              has been crafting heirloom-quality jewellery for over two decades.
              Every piece begins as a sketch, is shaped by master goldsmiths
              trained in traditional Indian techniques, and finished by hand. We
              source only ethically-mined diamonds and certified gold — because
              the stories behind your jewellery matter as much as the jewellery
              itself.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "20+", label: "Years" },
                { value: "5000+", label: "Brides" },
                { value: "100%", label: "BIS Hallmarked" },
                { value: "Ethical", label: "Sourcing" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-serif text-2xl md:text-3xl mb-1"
                    style={{ color: "oklch(0.68 0.1 75)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-sans text-xs uppercase tracking-wider"
                    style={{ color: "oklch(0.52 0.04 55)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="section-py section-px max-w-7xl mx-auto"
        aria-labelledby="featured-heading"
      >
        <div className="text-center mb-12">
          <span
            className="block mx-auto mb-6"
            style={{
              width: "60px",
              height: "1.5px",
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.1 75), transparent)",
            }}
          />
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            id="featured-heading"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Featured Pieces
          </h2>
          <p
            className="font-sans text-sm md:text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            Handpicked by our curators — exceptional pieces worthy of your
            moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featLoading
            ? ["a", "b", "c", "d"].map((k) => <ProductSkeleton key={k} />)
            : (featuredProducts ?? []).map((product, i) => (
                <ProductCard
                  key={product.id.toString()}
                  product={product}
                  index={i}
                />
              ))}
        </div>

        {!featLoading && (
          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider transition-all duration-200"
              style={{ color: "oklch(0.68 0.1 75)", letterSpacing: "0.12em" }}
            >
              View All Collections <ChevronRight size={16} />
            </Link>
          </div>
        )}
      </section>

      {/* Craftsmanship Section */}
      <section
        className="relative section-py text-center"
        aria-labelledby="craftsmanship-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/craftsmanship-artisan.dim_1200x700.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(20, 12, 8, 0.72)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span
            className="block mx-auto mb-6"
            style={{
              width: "60px",
              height: "1px",
              background: "oklch(0.72 0.1 75)",
            }}
          />
          <h2
            className="font-serif text-3xl md:text-4xl mb-6"
            id="craftsmanship-heading"
            style={{ color: "oklch(0.975 0.008 75)" }}
          >
            The Art of Fine Jewellery
          </h2>
          <p
            className="font-sans text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-80"
            style={{ color: "oklch(0.895 0.022 75)" }}
          >
            Every Nayra piece passes through the hands of master artisans who
            have dedicated their lives to the craft of fine Indian jewellery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={28} />,
                title: "Hand-Crafted",
                desc: "Each piece shaped and finished by hand by master goldsmiths with decades of experience.",
              },
              {
                icon: <Shield size={28} />,
                title: "Ethically Sourced",
                desc: "All diamonds and gemstones are ethically mined and responsibly sourced.",
              },
              {
                icon: <Star size={28} />,
                title: "Hallmark Certified",
                desc: "100% BIS hallmarked gold ensures purity you can trust for every piece.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center gap-4 p-6 rounded-lg"
                style={{
                  background: "rgba(246, 241, 235, 0.08)",
                  border: "1px solid rgba(198, 167, 94, 0.2)",
                }}
              >
                <div style={{ color: "oklch(0.72 0.1 75)" }}>{pillar.icon}</div>
                <h3
                  className="font-serif text-lg"
                  style={{ color: "oklch(0.975 0.008 75)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed opacity-75"
                  style={{ color: "oklch(0.895 0.022 75)" }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-py section-px"
        style={{ background: "oklch(0.963 0.012 75)" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="block mx-auto mb-6"
              style={{
                width: "60px",
                height: "1.5px",
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.1 75), transparent)",
              }}
            />
            <h2
              className="font-serif text-3xl md:text-4xl"
              id="testimonials-heading"
              style={{ color: "oklch(0.24 0.04 45)" }}
            >
              Words from Our Brides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="p-6 md:p-8 rounded-lg shadow-luxury"
                style={{
                  background: "oklch(0.98 0.006 75)",
                  border: "1px solid oklch(0.868 0.022 75)",
                }}
              >
                {/* Quote mark */}
                <div
                  className="font-serif text-5xl leading-none mb-4"
                  style={{ color: "oklch(0.84 0.075 75)", lineHeight: "0.8" }}
                >
                  "
                </div>
                <p
                  className="font-sans text-sm md:text-base leading-relaxed mb-6 italic"
                  style={{ color: "oklch(0.42 0.055 50)" }}
                >
                  {t.text}
                </p>
                <footer>
                  <div
                    className="font-serif text-base font-medium"
                    style={{ color: "oklch(0.24 0.04 45)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="font-sans text-xs mt-1"
                    style={{ color: "oklch(0.68 0.1 75)" }}
                  >
                    {t.location}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Consultation CTA */}
      <section
        className="section-py section-px text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.895 0.022 75) 0%, oklch(0.87 0.04 70) 100%)",
        }}
        aria-label="Bridal consultation call to action"
      >
        <div className="max-w-2xl mx-auto">
          <span
            className="block mx-auto mb-6"
            style={{
              width: "60px",
              height: "1.5px",
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.1 75), transparent)",
            }}
          />
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Begin Your Bridal Journey
          </h2>
          <p
            className="font-sans text-base leading-relaxed mb-8"
            style={{ color: "oklch(0.42 0.055 50)" }}
          >
            Book a private consultation with our bridal experts. We'll craft the
            jewellery of your dreams.
          </p>
          <Link
            to="/bridal-consultation"
            className="inline-block btn-gold px-10 py-4 rounded text-sm font-sans font-medium uppercase"
            style={{ letterSpacing: "0.12em" }}
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="section-py section-px"
        id="contact"
        style={{ background: "oklch(0.963 0.012 75)" }}
        aria-labelledby="contact-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl md:text-4xl"
              id="contact-heading"
              style={{ color: "oklch(0.24 0.04 45)" }}
            >
              Visit Us
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h3
                  className="font-serif text-lg mb-3"
                  style={{ color: "oklch(0.24 0.04 45)" }}
                >
                  Nayra Jewels — South Extension
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "oklch(0.42 0.055 50)" }}
                >
                  South Extension, New Delhi – 110049
                  <br />
                  Mon–Sat, 10:00 AM – 8:00 PM
                </p>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:+919351469466"
                  className="flex items-center gap-2 font-sans text-sm"
                  style={{ color: "oklch(0.42 0.055 50)" }}
                >
                  📞 +91 93514 69466
                </a>
                <a
                  href="https://wa.me/919351469466"
                  className="flex items-center gap-2 font-sans text-sm"
                  style={{ color: "oklch(0.42 0.055 50)" }}
                >
                  💬 WhatsApp: +91 93514 69466
                </a>
              </div>
              {/* QR Code */}
              <div
                className="inline-flex flex-col items-center p-4 rounded-lg"
                style={{
                  border: "1px solid oklch(0.868 0.022 75)",
                  background: "white",
                }}
              >
                <img
                  src="/assets/uploads/image-1.png"
                  alt="PhonePe payment QR code"
                  className="w-32 h-32 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const placeholder = document.createElement("div");
                      placeholder.className =
                        "w-32 h-32 flex items-center justify-center";
                      placeholder.style.background = "oklch(0.895 0.022 75)";
                      placeholder.style.borderRadius = "4px";
                      placeholder.innerHTML =
                        '<span style="font-size:11px;color:oklch(0.52 0.04 55);text-align:center">QR Code<br/>Placeholder</span>';
                      parent.insertBefore(placeholder, e.currentTarget);
                    }
                  }}
                />
                <p
                  className="font-sans text-xs mt-2"
                  style={{ color: "oklch(0.52 0.04 55)" }}
                >
                  Scan to Pay via PhonePe
                </p>
                <p
                  className="font-sans text-xs font-medium mt-1"
                  style={{ color: "oklch(0.42 0.055 50)" }}
                >
                  UPI: 9351469466@ibl
                </p>
              </div>
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-luxury">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0!2d77.21722!3d28.56802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f0000000!2sSouth+Extension%2C+New+Delhi!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Nayra Jewels location on Google Maps"
                />
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
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
    <form
      onSubmit={handleSubmit}
      className="p-6 md:p-8 rounded-lg shadow-luxury"
      style={{
        background: "oklch(0.98 0.006 75)",
        border: "1px solid oklch(0.868 0.022 75)",
      }}
    >
      <h3
        className="font-serif text-xl mb-6"
        style={{ color: "oklch(0.24 0.04 45)" }}
      >
        Send Us a Message
      </h3>
      {submitted ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">✨</div>
          <h4
            className="font-serif text-lg mb-2"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Thank you!
          </h4>
          <p
            className="font-sans text-sm"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            We'll be in touch with you shortly.
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
        <div className="space-y-4">
          <FormField
            label="Full Name"
            required
            value={form.name}
            onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            placeholder="Your name"
          />
          <FormField
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={(v) => setForm((f) => ({ ...f, email: v }))}
            placeholder="your@email.com"
          />
          <FormField
            label="Phone"
            type="tel"
            value={form.phone}
            onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
            placeholder="+91 XXXXX XXXXX"
          />
          <div>
            <label
              htmlFor="contact-message"
              className="block font-sans text-xs uppercase tracking-wider mb-1.5"
              style={{ color: "oklch(0.42 0.055 50)" }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              rows={4}
              placeholder="Tell us how we can help..."
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
          <button
            type="submit"
            disabled={isPending}
            className="w-full btn-gold py-3.5 rounded font-sans text-sm font-medium uppercase tracking-wider disabled:opacity-60"
            style={{ letterSpacing: "0.1em" }}
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </div>
      )}
    </form>
  );
}

// Imports needed at the end for ContactForm
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactMessage } from "../hooks/useQueries";

interface FormFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}

function FormField({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
}: FormFieldProps) {
  const fieldId = `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
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
