import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { useShop } from "../context/ShopContext";
import { useGetProducts } from "../hooks/useQueries";

export default function WishlistPage() {
  const { wishlistIds } = useShop();
  const { data: allProducts, isLoading } = useGetProducts();

  const wishlistProducts = (allProducts ?? []).filter((p) =>
    wishlistIds.has(p.id.toString()),
  );

  return (
    <main
      className="pt-[72px] min-h-screen"
      style={{ background: "oklch(0.963 0.012 75)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-10">
          <h1
            className="font-serif text-3xl md:text-4xl"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Your Wishlist
          </h1>
          <p
            className="font-sans text-sm mt-1"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            {wishlistIds.size} {wishlistIds.size === 1 ? "piece" : "pieces"}{" "}
            saved
          </p>
        </div>

        {wishlistIds.size === 0 ? (
          <div className="text-center py-24">
            <Heart
              size={48}
              className="mx-auto mb-6 opacity-30"
              style={{ color: "oklch(0.68 0.1 75)" }}
            />
            <h2
              className="font-serif text-2xl mb-4"
              style={{ color: "oklch(0.24 0.04 45)" }}
            >
              Your wishlist is empty
            </h2>
            <p
              className="font-sans text-sm mb-8"
              style={{ color: "oklch(0.52 0.04 55)" }}
            >
              Save pieces you love and revisit them any time.
            </p>
            <Link
              to="/collections"
              className="inline-block btn-gold px-8 py-3.5 rounded font-sans text-sm font-medium uppercase"
              style={{ letterSpacing: "0.1em" }}
            >
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
              ? ["a", "b", "c", "d"].map((k) => <ProductSkeleton key={k} />)
              : wishlistProducts.map((product, i) => (
                  <ProductCard
                    key={product.id.toString()}
                    product={product}
                    index={i}
                  />
                ))}
          </div>
        )}
      </div>
    </main>
  );
}
