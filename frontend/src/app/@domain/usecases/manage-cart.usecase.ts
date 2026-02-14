import { computed, inject, Injectable } from '@angular/core';
import { Product } from '@common/shared-models';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class ManageCartUseCase {
  private cartService = inject(CartService);

  public cartCount = computed(() => this.cartService.itemCount());

  private toCartItem(product: Product, quantity: number): CartItem {
    return { quantity, price: product.price, productId: product.id };
  }

  addItemToCart(product: Product): void {
    this.cartService.addToCart(this.toCartItem(product, 1));
  }

  removeItemFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  updateCartItemQuantity(productId: string, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
