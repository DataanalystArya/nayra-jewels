import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CartItem {
    productId: bigint;
    quantity: bigint;
}
export interface ContactMessage {
    id: bigint;
    name: string;
    createdAt: bigint;
    email: string;
    message: string;
    phone: string;
}
export interface BridalAppointment {
    id: bigint;
    status: string;
    name: string;
    createdAt: bigint;
    email: string;
    message: string;
    preferredDate: string;
    occasion: string;
    phone: string;
    budget: string;
}
export interface Product {
    id: bigint;
    weight: string;
    featured: boolean;
    inStock: boolean;
    name: string;
    description: string;
    category: string;
    price: bigint;
    material: string;
}
export interface backendInterface {
    addProduct(name: string, category: string, description: string, price: bigint, inStock: boolean, featured: boolean, material: string, weight: string): Promise<bigint>;
    addToCart(productId: bigint, quantity: bigint): Promise<void>;
    addToWishlist(productId: bigint): Promise<void>;
    bookBridalAppointment(name: string, email: string, phone: string, preferredDate: string, occasion: string, budget: string, message: string): Promise<bigint>;
    clearCart(): Promise<void>;
    getAllAppointments(): Promise<Array<BridalAppointment>>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getCart(): Promise<Array<CartItem>>;
    getFeaturedProducts(): Promise<Array<Product>>;
    getProductById(id: bigint): Promise<Product | null>;
    getProducts(): Promise<Array<Product>>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    getWishlist(): Promise<Array<bigint>>;
    isInWishlist(productId: bigint): Promise<boolean>;
    removeFromCart(productId: bigint): Promise<void>;
    removeFromWishlist(productId: bigint): Promise<void>;
    submitContactMessage(name: string, email: string, phone: string, message: string): Promise<bigint>;
    updateAppointmentStatus(id: bigint, status: string): Promise<void>;
}
