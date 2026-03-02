import { Link } from "@tanstack/react-router";
import { ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useShop } from "../context/ShopContext";
import { formatINR, getProductImage } from "../utils/productImages";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useShop();

  const shipping = cartTotal >= BigInt(5000000) ? BigInt(0) : BigInt(50000); // 50000 paise = ₹500
  const total = cartTotal + shipping;
  const freeShippingThreshold = BigInt(5000000); // ₹50,000 in paise

  if (cartItems.length === 0) {
    return (
      <main
        className="pt-[72px] min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.963 0.012 75)" }}
      >
        <div className="text-center px-4">
          <ShoppingBag
            size={48}
            className="mx-auto mb-6 opacity-30"
            style={{ color: "oklch(0.68 0.1 75)" }}
          />
          <h1
            className="font-serif text-2xl md:text-3xl mb-4"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Your Cart is Empty
          </h1>
          <p
            className="font-sans text-sm mb-8"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            Discover our handcrafted jewellery collections
          </p>
          <Link
            to="/collections"
            className="inline-block btn-gold px-8 py-3.5 rounded font-sans text-sm font-medium uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            Explore Collections
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
        <div className="mb-8">
          <h1
            className="font-serif text-3xl md:text-4xl"
            style={{ color: "oklch(0.24 0.04 45)" }}
          >
            Shopping Cart
          </h1>
          <p
            className="font-sans text-sm mt-1"
            style={{ color: "oklch(0.52 0.04 55)" }}
          >
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.productId.toString()}
                className="flex gap-4 p-4 rounded-lg shadow-luxury"
                style={{
                  background: "oklch(0.98 0.006 75)",
                  border: "1px solid oklch(0.868 0.022 75)",
                }}
              >
                {/* Image */}
                <Link
                  to="/product/$id"
                  params={{ id: item.productId.toString() }}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded overflow-hidden">
                    <img
                      src={getProductImage(item.product)}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-sans text-[10px] uppercase tracking-wider mb-1"
                    style={{ color: "oklch(0.68 0.1 75)" }}
                  >
                    {item.product.category}
                  </p>
                  <Link
                    to="/product/$id"
                    params={{ id: item.productId.toString() }}
                  >
                    <h3
                      className="font-serif text-base leading-tight mb-2 hover:underline"
                      style={{ color: "oklch(0.24 0.04 45)" }}
                    >
                      {item.product.name}
                    </h3>
                  </Link>
                  <p
                    className="font-sans text-sm font-medium mb-3"
                    style={{ color: "oklch(0.42 0.055 50)" }}
                  >
                    {formatINR(item.product.price)}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Qty Controls */}
                    <div
                      className="flex items-center rounded overflow-hidden"
                      style={{ border: "1px solid oklch(0.868 0.022 75)" }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center hover:bg-nayra-beige transition-colors"
                        aria-label="Decrease"
                        style={{ color: "oklch(0.42 0.055 50)" }}
                      >
                        <Minus size={12} />
                      </button>
                      <span
                        className="w-8 text-center font-sans text-sm"
                        style={{ color: "oklch(0.24 0.04 45)" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center hover:bg-nayra-beige transition-colors"
                        aria-label="Increase"
                        style={{ color: "oklch(0.42 0.055 50)" }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Item total */}
                    <div className="flex items-center gap-3">
                      <span
                        className="font-sans text-sm font-medium"
                        style={{ color: "oklch(0.42 0.055 50)" }}
                      >
                        {formatINR(item.product.price * BigInt(item.quantity))}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          removeFromCart(item.productId);
                          toast.success("Item removed from cart");
                        }}
                        className="p-1.5 rounded-full transition-colors hover:bg-red-50"
                        aria-label="Remove item"
                        style={{ color: "oklch(0.52 0.04 55)" }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/collections"
              className="inline-flex items-center gap-2 font-sans text-sm mt-4 transition-colors"
              style={{ color: "oklch(0.68 0.1 75)" }}
            >
              ← Continue Shopping
            </Link>
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

              <div className="space-y-3 mb-6">
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
                {shipping > BigInt(0) && (
                  <p
                    className="font-sans text-[10px]"
                    style={{ color: "oklch(0.68 0.1 75)" }}
                  >
                    Add {formatINR(freeShippingThreshold - cartTotal)} more for
                    free shipping
                  </p>
                )}
                <div
                  style={{ height: "1px", background: "oklch(0.868 0.022 75)" }}
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

              <Link
                to="/checkout"
                className="w-full btn-gold py-4 rounded font-sans text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2"
                style={{ letterSpacing: "0.1em" }}
              >
                Proceed to Checkout <ChevronRight size={16} />
              </Link>

              <div
                className="mt-4 p-3 rounded-lg text-center"
                style={{ background: "oklch(0.895 0.022 75)" }}
              >
                <p
                  className="font-sans text-[10px] uppercase tracking-wider"
                  style={{ color: "oklch(0.52 0.04 55)" }}
                >
                  🔒 Secure & Encrypted Checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
