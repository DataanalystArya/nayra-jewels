import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import WhatsAppButton from "./components/WhatsAppButton";
import { ShopProvider } from "./context/ShopContext";
import BridalConsultationPage from "./pages/BridalConsultationPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CollectionsPage from "./pages/CollectionsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/WishlistPage";

// Root layout with header & footer
const rootRoute = createRootRoute({
  component: () => (
    <ShopProvider>
      <LoadingScreen />
      <div
        className="flex flex-col min-h-screen"
        style={{ background: "oklch(0.963 0.012 75)" }}
      >
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(0.98 0.006 75)",
            border: "1px solid oklch(0.868 0.022 75)",
            color: "oklch(0.24 0.04 45)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
          },
        }}
      />
    </ShopProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const collectionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/collections",
  component: CollectionsPage,
});

const collectionCategoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/collections/$category",
  component: CollectionsPage,
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$id",
  component: ProductDetailPage,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: CartPage,
});

const wishlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wishlist",
  component: WishlistPage,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
});

const bridalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bridal-consultation",
  component: BridalConsultationPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  collectionsRoute,
  collectionCategoryRoute,
  productDetailRoute,
  cartRoute,
  wishlistRoute,
  checkoutRoute,
  bridalRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
