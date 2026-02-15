import { computed, Injectable, signal } from '@angular/core';

import { MoneyUtils } from '@common/utils';
import { CartItem } from '../../domain/models/cart-item.model';

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
  private cartItems = signal<Map<string, CartItem>>(new Map());

  // Computed value (derives from cartItems)
  // Similar to Riverpod's computed/select
  readonly itemCount = computed(() => {
    var total = 0;
    for (const item of this.cartItems().values()) {
      total += item.quantity;
    }
    return total;
  });

  readonly totalPrice = computed(() => {
    var total = 0;
    for (const item of this.cartItems().values()) {
      if (item.quantity > 0) {
        total += MoneyUtils.multiply(item.price, item.quantity).value;
      }
    }
    return total;
  });

  countOf(productId: string) {
    return computed(() => this.cartItems().get(productId)?.quantity ?? 0);
  }

  addToCart(item: CartItem) {
    this.cartItems.update((items) => {
      const existingItem = items.get(item.productId);
      if (existingItem) {
        return new Map(items).set(item.productId, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        });
      } else {
        return new Map(items).set(item.productId, item);
      }
    });
  }

  removeFromCart(productId: string) {
    this.cartItems.update((items) => {
      const existingItem = items.get(productId);
      if (existingItem && existingItem.quantity > 1) {
        return new Map(items).set(productId, {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        });
      } else {
        items.delete(productId);
        return new Map(items);
      }
    });
  }

  clearCart() {
    this.cartItems.update(() => new Map());
  }
}
