import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Product } from "../backend.d";

export interface CartProduct {
  productId: bigint;
  quantity: number;
  product: Product;
}

interface ShopContextValue {
  cartItems: CartProduct[];
  wishlistIds: Set<string>;
  cartCount: number;
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (productId: bigint) => void;
  updateQuantity: (productId: bigint, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: bigint) => boolean;
  cartTotal: bigint;
}

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(new Set());

  // Persist cart to localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nayra_cart");
      if (saved) {
        const parsed = JSON.parse(saved) as Array<{
          productId: string;
          quantity: number;
          product: {
            id: string;
            price: string;
            featured: boolean;
            inStock: boolean;
            name: string;
            description: string;
            category: string;
            material: string;
            weight: string;
          };
        }>;
        setCartItems(
          parsed.map((item) => ({
            productId: BigInt(item.productId),
            quantity: item.quantity,
            product: {
              ...item.product,
              id: BigInt(item.product.id),
              price: BigInt(item.product.price),
            },
          })),
        );
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      const serializable = cartItems.map((item) => ({
        productId: item.productId.toString(),
        quantity: item.quantity,
        product: {
          ...item.product,
          id: item.product.id.toString(),
          price: item.product.price.toString(),
        },
      }));
      localStorage.setItem("nayra_cart", JSON.stringify(serializable));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Persist wishlist
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nayra_wishlist");
      if (saved) {
        setWishlistIds(new Set(JSON.parse(saved) as string[]));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("nayra_wishlist", JSON.stringify([...wishlistIds]));
    } catch {
      // ignore
    }
  }, [wishlistIds]);

  const addToCart = useCallback((product: Product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.productId === product.id);
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id ? { ...i, quantity: i.quantity + qty } : i,
        );
      }
      return [...prev, { productId: product.id, quantity: qty, product }];
    });
  }, []);

  const removeFromCart = useCallback((productId: bigint) => {
    setCartItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: bigint, qty: number) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.productId !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((i) =>
          i.productId === productId ? { ...i, quantity: qty } : i,
        ),
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const toggleWishlist = useCallback((product: Product) => {
    const key = product.id.toString();
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, []);

  const isInWishlist = useCallback(
    (productId: bigint) => wishlistIds.has(productId.toString()),
    [wishlistIds],
  );

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const cartTotal = cartItems.reduce(
    (sum, i) => sum + i.product.price * BigInt(i.quantity),
    BigInt(0),
  );

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        wishlistIds,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
