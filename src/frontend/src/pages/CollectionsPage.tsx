import { useParams } from "@tanstack/react-router";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { useGetProductsByCategory } from "../hooks/useQueries";

const categories = [
  "All",
  "Bridal Heritage",
  "Bridal Sets",
  "Diamond Collection",
  "Diamond Rings",
  "Engagement Rings",
  "Cocktail Rings",
  "Contemporary Gold",
  "Polki & Kundan",
  "Polki Collection",
  "Kundan Collection",
  "Temple Jewellery",
  "Statement Necklaces",
  "Heritage Bangles",
  "Gold Chains",
  "Pendant Sets",
  "Luxury Earrings",
  "Everyday Fine Jewellery",
  "Festive Collection",
  "Heirloom Collection",
  "Limited Edition Collection",
  "Custom Creations",
];

interface CollectionsPageProps {
  initialCategory?: string;
}

export default function CollectionsPage({
  initialCategory,
}: CollectionsPageProps) {
  const params = useParams({ strict: false }) as { category?: string };
  const decodedCategory = params.category
    ? decodeURIComponent(params.category)
    : undefined;
  const [selected, setSelected] = useState<string>(
    initialCategory || decodedCategory || "All",
  );

  const apiCategory = selected === "All" ? "all" : selected;
  const { data: products, isLoading } = useGetProductsByCategory(apiCategory);

  const pageTitle = selected === "All" ? "Our Collections" : selected;
  const pageDesc =
    selected === "All"
      ? "Explore our complete range of handcrafted Indian luxury jewellery."
      : `Explore our ${selected} collection — handcrafted with heritage artistry.`;

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
            {pageTitle}
          </h1>
          <p
            className="font-sans text-sm md:text-base mt-4 max-w-xl mx-auto"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            {pageDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelected(cat)}
              className="px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all duration-200"
              style={
                selected === cat
                  ? {
                      background: "oklch(0.68 0.1 75)",
                      color: "oklch(0.24 0.04 45)",
                      letterSpacing: "0.1em",
                    }
                  : {
                      background: "oklch(0.895 0.022 75)",
                      color: "oklch(0.42 0.055 50)",
                      border: "1px solid oklch(0.868 0.022 75)",
                      letterSpacing: "0.1em",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? ["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
                <ProductSkeleton key={k} />
              ))
            : (products ?? []).map((product, i) => (
                <ProductCard
                  key={product.id.toString()}
                  product={product}
                  index={i}
                />
              ))}
        </div>

        {!isLoading && (products ?? []).length === 0 && (
          <div className="text-center py-24">
            <div className="text-4xl mb-4">💎</div>
            <h3
              className="font-serif text-xl mb-2"
              style={{ color: "oklch(0.24 0.04 45)" }}
            >
              No pieces found
            </h3>
            <p
              className="font-sans text-sm"
              style={{ color: "oklch(0.52 0.04 55)" }}
            >
              This collection is being curated. Please check back soon.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
