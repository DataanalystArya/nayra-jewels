import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { BridalAppointment, ContactMessage, Product } from "../backend.d";
import { staticProducts } from "../utils/staticProducts";
import { useActor } from "./useActor";

// Merge backend + static products, preferring backend products on id conflict
function mergeProducts(
  backendProducts: Product[],
  statics: Product[],
): Product[] {
  const backendIds = new Set(backendProducts.map((p) => p.id));
  const staticFiltered = statics.filter((p) => !backendIds.has(p.id));
  return [...backendProducts, ...staticFiltered];
}

export function useGetProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", !!actor],
    queryFn: async () => {
      if (!actor) return staticProducts;
      try {
        const backendProducts = await actor.getProducts();
        return mergeProducts(backendProducts, staticProducts);
      } catch {
        return staticProducts;
      }
    },
    // Always run — show static products immediately, enhance with backend when ready
    enabled: !isFetching,
    placeholderData: staticProducts,
  });
}

export function useGetFeaturedProducts() {
  const { actor, isFetching } = useActor();
  const staticFeatured = staticProducts.filter((p) => p.featured);
  return useQuery<Product[]>({
    queryKey: ["featured-products", !!actor],
    queryFn: async () => {
      if (!actor) return staticFeatured;
      try {
        const backendFeatured = await actor.getFeaturedProducts();
        return mergeProducts(backendFeatured, staticFeatured);
      } catch {
        return staticFeatured;
      }
    },
    enabled: !isFetching,
    placeholderData: staticFeatured,
  });
}

export function useGetProductsByCategory(category: string) {
  const { actor, isFetching } = useActor();
  const staticFiltered =
    category === "all"
      ? staticProducts
      : staticProducts.filter((p) => p.category === category);
  return useQuery<Product[]>({
    queryKey: ["products-by-category", category, !!actor],
    queryFn: async () => {
      if (!actor) return staticFiltered;
      try {
        const backendProducts =
          category === "all"
            ? await actor.getProducts()
            : await actor.getProductsByCategory(category);
        return mergeProducts(backendProducts, staticFiltered);
      } catch {
        return staticFiltered;
      }
    },
    enabled: !isFetching,
    placeholderData: staticFiltered,
  });
}

export function useGetProductById(id: bigint | undefined) {
  const { actor, isFetching } = useActor();
  return useQuery<Product | null>({
    queryKey: ["product", id?.toString(), !!actor],
    queryFn: async () => {
      if (id === undefined) return null;
      // Static products have IDs >= 1000n — resolve without actor call
      if (id >= 1000n) {
        return staticProducts.find((p) => p.id === id) ?? null;
      }
      if (!actor) return staticProducts.find((p) => p.id === id) ?? null;
      try {
        return await actor.getProductById(id);
      } catch {
        return staticProducts.find((p) => p.id === id) ?? null;
      }
    },
    enabled: id !== undefined && !isFetching,
    placeholderData:
      id !== undefined
        ? (staticProducts.find((p) => p.id === id) ?? null)
        : null,
  });
}

export function useBookBridalAppointment() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      preferredDate: string;
      occasion: string;
      budget: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.bookBridalAppointment(
        data.name,
        data.email,
        data.phone,
        data.preferredDate,
        data.occasion,
        data.budget,
        data.message,
      );
    },
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactMessage(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
    },
  });
}
