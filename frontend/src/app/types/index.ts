/**
 * Shared types matching (?) the backend API.
 */

export interface Category {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    name: string;
    icon: string; // SVG string
    price: number; // in cents
    numInStock: number;
    categoryId: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface CheckoutRequest {
    customer: {
        email: string;
        name: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
    };
    items: CartItem[];
}

export interface OrderResponse {
    orderId: string;
    customer: CheckoutRequest['customer'];
    items: Array<{
        product: Product;
        quantity: number;
        lineTotal: number;
    }>;
    total: number;
    createdAt: string;
}
