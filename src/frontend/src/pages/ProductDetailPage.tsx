import { Link, useParams } from "@tanstack/react-router";
import {
  Award,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Shield,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ProductSkeleton from "../components/ProductSkeleton";
import { useShop } from "../context/ShopContext";
import { useGetProductById } from "../hooks/useQueries";
import { formatINR, getProductImage } from "../utils/productImages";

export default function ProductDetailPage() {
  const { id } = useParams({ from: "/product/$id" });
  const productId = BigInt(id);
  const { data: product, isLoading } = useGetProductById(productId);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [qty, setQty] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (isLoading) {
    return (
      <div
        className="pt-[72px] min-h-screen"
        style={{ background: "oklch(0.963 0.012 75)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div
              className="skeleton-shimmer rounded-lg"
              style={{ paddingBottom: "100%" }}
            />
          </div>
          <div className="space-y-4">
            <ProductSkeleton />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        className="pt-[72px] min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.963 0.012 75)" }}
      >
        <div className="text-center">
          <div className="text-4xl mb-4">💎</div>
          <h1
            className="font-serif text-2xl mb-3"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Product Not Found
          </h1>
          <Link
            to="/collections"
            className="font-sans text-sm underline"
            style={{ color: "oklch(0.68 0.1 75)" }}
          >
            Browse our collections
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  // Generate multiple thumbnails from category images
  const thumbnails = [0, 1, 2].map((i) => getProductImage(product, i));

  const handleAddToCart = () => {
    addToCart(product, qty);
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <main
      className="pt-[72px] min-h-screen"
      style={{ background: "oklch(0.963 0.012 75)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 mb-8 text-xs font-sans"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: "oklch(0.42 0.055 50)" }}
          >
            Home
          </Link>
          <ChevronRight
            size={12}
            style={{ color: "oklch(0.52 0.04 55)", opacity: 0.6 }}
          />
          <Link
            to="/collections"
            className="opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: "oklch(0.42 0.055 50)" }}
          >
            Collections
          </Link>
          <ChevronRight
            size={12}
            style={{ color: "oklch(0.52 0.04 55)", opacity: 0.6 }}
          />
          <Link
            to="/collections/$category"
            params={{ category: encodeURIComponent(product.category) }}
            className="opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: "oklch(0.42 0.055 50)" }}
          >
            {product.category}
          </Link>
          <ChevronRight
            size={12}
            style={{ color: "oklch(0.52 0.04 55)", opacity: 0.6 }}
          />
          <span style={{ color: "oklch(0.68 0.1 75)" }}>{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div
              className="relative rounded-lg overflow-hidden shadow-luxury-lg"
              style={{ paddingBottom: "100%" }}
            >
              <img
                src={thumbnails[selectedImageIndex] || thumbnails[0]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {thumbnails.map((thumb, i) => (
                <button
                  type="button"
                  key={thumb}
                  onClick={() => setSelectedImageIndex(i)}
                  className="relative rounded overflow-hidden flex-1 transition-all duration-200"
                  style={{
                    paddingBottom: "33.33%",
                    border:
                      selectedImageIndex === i
                        ? "2px solid oklch(0.72 0.1 75)"
                        : "2px solid transparent",
                  }}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={thumb}
                    alt={`${product.name} view ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category */}
            <p
              className="font-sans text-xs uppercase tracking-[0.2em]"
              style={{ color: "oklch(0.68 0.1 75)" }}
            >
              {product.category}
            </p>

            {/* Name */}
            <h1
              className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight"
              style={{ color: "oklch(0.24 0.04 45)" }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p
              className="font-sans text-2xl font-medium"
              style={{ color: "oklch(0.42 0.055 50)" }}
            >
              {formatINR(product.price)}
            </p>

            {/* Divider */}
            <div
              style={{ height: "1px", background: "oklch(0.868 0.022 75)" }}
            />

            {/* Description */}
            <p
              className="font-sans text-sm md:text-base leading-relaxed"
              style={{ color: "oklch(0.52 0.04 55)" }}
            >
              {product.description}
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "oklch(0.895 0.022 75)",
                  border: "1px solid oklch(0.868 0.022 75)",
                }}
              >
                <p
                  className="font-sans text-[10px] uppercase tracking-wider mb-1"
                  style={{ color: "oklch(0.68 0.1 75)" }}
                >
                  Material
                </p>
                <p
                  className="font-sans text-sm font-medium"
                  style={{ color: "oklch(0.24 0.04 45)" }}
                >
                  {product.material}
                </p>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{
                  background: "oklch(0.895 0.022 75)",
                  border: "1px solid oklch(0.868 0.022 75)",
                }}
              >
                <p
                  className="font-sans text-[10px] uppercase tracking-wider mb-1"
                  style={{ color: "oklch(0.68 0.1 75)" }}
                >
                  Weight
                </p>
                <p
                  className="font-sans text-sm font-medium"
                  style={{ color: "oklch(0.24 0.04 45)" }}
                >
                  {product.weight}
                </p>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: product.inStock ? "#22c55e" : "#ef4444" }}
              />
              <span
                className="font-sans text-xs font-medium"
                style={{ color: product.inStock ? "#22c55e" : "#ef4444" }}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Quantity */}
            {product.inStock && (
              <div className="flex items-center gap-4">
                <span
                  className="font-sans text-xs uppercase tracking-wider"
                  style={{ color: "oklch(0.42 0.055 50)" }}
                >
                  Qty
                </span>
                <div
                  className="flex items-center rounded overflow-hidden"
                  style={{ border: "1px solid oklch(0.868 0.022 75)" }}
                >
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-nayra-beige"
                    aria-label="Decrease quantity"
                    style={{ color: "oklch(0.42 0.055 50)" }}
                  >
                    <Minus size={14} />
                  </button>
                  <span
                    className="w-10 text-center font-sans text-sm font-medium"
                    style={{ color: "oklch(0.24 0.04 45)" }}
                  >
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-nayra-beige"
                    aria-label="Increase quantity"
                    style={{ color: "oklch(0.42 0.055 50)" }}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-gold py-4 rounded font-sans text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ letterSpacing: "0.1em" }}
              >
                <ShoppingBag size={16} />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
              <button
                type="button"
                onClick={handleWishlist}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded font-sans text-sm font-medium uppercase transition-all duration-200"
                style={{
                  border: "1.5px solid oklch(0.868 0.022 75)",
                  color: inWishlist
                    ? "oklch(0.68 0.1 75)"
                    : "oklch(0.42 0.055 50)",
                  background: inWishlist
                    ? "oklch(0.895 0.022 75)"
                    : "transparent",
                  letterSpacing: "0.1em",
                }}
                aria-label={
                  inWishlist ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Heart
                  size={16}
                  fill={inWishlist ? "oklch(0.68 0.1 75)" : "none"}
                />
                {inWishlist ? "Saved" : "Wishlist"}
              </button>
            </div>

            {/* Trust badges */}
            <div
              className="grid grid-cols-3 gap-3 p-4 rounded-lg"
              style={{
                background: "oklch(0.895 0.022 75)",
                border: "1px solid oklch(0.868 0.022 75)",
              }}
            >
              {[
                { icon: <Shield size={16} />, text: "BIS Hallmarked" },
                { icon: <Award size={16} />, text: "IGI Certified" },
                { icon: <Truck size={16} />, text: "Free Shipping" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  <div style={{ color: "oklch(0.68 0.1 75)" }}>
                    {badge.icon}
                  </div>
                  <span
                    className="font-sans text-[10px] uppercase tracking-wider"
                    style={{ color: "oklch(0.52 0.04 55)" }}
                  >
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
