import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Product } from "../backend.d";
import { useShop } from "../context/ShopContext";
import {
  formatINR,
  getProductImage,
  getProductTag,
} from "../utils/productImages";

interface ProductCardProps {
  product: Product;
  index?: number;
}

function getTagStyle(tag: string): React.CSSProperties {
  switch (tag) {
    case "Limited Edition":
      return {
        background: "rgba(62, 47, 39, 0.88)",
        color: "oklch(0.895 0.022 75)",
        border: "1px solid rgba(62, 47, 39, 0.5)",
      };
    case "Bridal Favourite":
      return {
        background: "rgba(220, 168, 168, 0.28)",
        color: "oklch(0.32 0.06 10)",
        border: "1px solid rgba(180, 100, 100, 0.38)",
      };
    case "Bestseller":
    case "Signature Piece":
      return {
        background: "rgba(198, 167, 94, 0.18)",
        color: "oklch(0.28 0.05 50)",
        border: "1px solid oklch(0.72 0.1 75)",
      };
    default:
      return {
        background: "rgba(246, 241, 235, 0.95)",
        color: "oklch(0.28 0.05 50)",
        border: "1px solid oklch(0.72 0.1 75)",
      };
  }
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const inWishlist = isInWishlist(product.id);
  const image = getProductImage(product, index);
  const tag = getProductTag(product);
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <Link
      to="/product/$id"
      params={{ id: product.id.toString() }}
      className="group block"
    >
      <article
        className="bg-card rounded-lg overflow-hidden hover-lift shadow-luxury transition-all duration-300"
        style={{
          border: hovered
            ? "1px solid oklch(0.72 0.1 75)"
            : "1px solid transparent",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div
          className="relative product-img-zoom"
          style={{ paddingBottom: "100%" }}
        >
          <img
            src={image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Premium Tag Badge */}
          {tag && (
            <div
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full"
              style={{
                fontSize: "9px",
                fontFamily: "inherit",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                lineHeight: 1,
                backdropFilter: "blur(4px)",
                ...getTagStyle(tag),
              }}
            >
              {tag}
            </div>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={handleWishlist}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-luxury"
            style={{
              background: "rgba(246, 241, 235, 0.92)",
              color: inWishlist ? "oklch(0.68 0.1 75)" : "oklch(0.52 0.04 55)",
            }}
          >
            <Heart
              size={16}
              fill={inWishlist ? "oklch(0.68 0.1 75)" : "none"}
            />
          </button>

          {/* Out of stock badge */}
          {!product.inStock && (
            <div
              className="absolute bottom-3 left-3 px-2 py-1 rounded text-xs font-sans"
              style={{
                background: "rgba(62, 47, 39, 0.8)",
                color: "oklch(0.895 0.022 75)",
              }}
            >
              Out of Stock
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <p
            className="font-sans text-[10px] uppercase tracking-[0.15em] mb-1.5"
            style={{ color: "oklch(0.68 0.1 75)" }}
          >
            {product.category}
          </p>
          <h3
            className="font-serif text-base leading-snug mb-2 line-clamp-2"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            {product.name}
          </h3>
          <p
            className="font-sans text-sm font-medium mb-3"
            style={{ color: "oklch(0.42 0.055 50)" }}
          >
            {formatINR(product.price)}
          </p>
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full py-2.5 px-4 rounded text-sm font-sans font-medium flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: product.inStock
                ? "oklch(0.68 0.1 75)"
                : "oklch(0.868 0.022 75)",
              color: "oklch(0.24 0.04 45)",
            }}
            onMouseEnter={(e) => {
              if (product.inStock) {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "oklch(0.65 0.1 75)";
              }
            }}
            onMouseLeave={(e) => {
              if (product.inStock) {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "oklch(0.68 0.1 75)";
              }
            }}
          >
            <ShoppingBag size={14} />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </article>
    </Link>
  );
}
