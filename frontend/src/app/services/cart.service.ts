import { computed, Injectable, signal } from '@angular/core';
import { CartItem, Product } from '@common/shared-models';
import { MoneyUtils } from '@common/utils';

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
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0),
  );

  readonly totalPrice = computed(() =>
    this.cartItems().reduce(
      (sum, item) => sum + MoneyUtils.multiply(item.price, item.quantity).value,
      0,
    ),
  );

  addToCart(item: CartItem) {
    this.cartItems.update((items) => [...items, item]);
  }

  removeFromCart(item: CartItem) {
    this.cartItems.update((items) => items.filter((i) => i.productId !== item.productId));
  }

  updateQuantity(item: CartItem, quantity: number) {
    if (quantity <= 0) {
      return this.removeFromCart(item);
    }
    this.cartItems.update((items) =>
      items.map((i) => (i.productId === item.productId ? { ...i, quantity } : i)),
    );
  }

  // TODO: Implement cart methods
}
