import { CartItem } from "./cart.model";
import { Product } from "./product.model";

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
