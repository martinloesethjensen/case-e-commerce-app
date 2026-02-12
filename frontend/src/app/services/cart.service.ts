import {computed, Injectable, signal} from '@angular/core';
import {CartItem} from '../types';

/**
 * Cart Service - manages shopping cart state.
 *
 * TODO: Implement the cart functionality.
 *
 * This service should:
 * - Store cart items (product + quantity)
 * - Add items to cart
 * - Remove items from cart
 * - Update item quantities
 * - Calculate totals
 * - Enforce stock limits (quantity <= numInStock)
 *
 * Hint: Angular signals are set up below for reactive state management.
 */
@Injectable({
    providedIn: 'root',
})
export class CartService {
    // Example of Angular signals (reactive state)
    // Similar to ValueNotifier in Flutter
    private cartItems = signal<CartItem[]>([]);

    // Computed value (derives from cartItems)
    // Similar to Riverpod's computed/select
    readonly itemCount = computed(() =>
        this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
    );

    // TODO: Implement cart methods
}
