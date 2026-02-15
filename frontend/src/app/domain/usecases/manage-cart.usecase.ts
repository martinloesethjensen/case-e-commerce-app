import { computed, inject, Injectable } from '@angular/core';
import { Product } from '@common/shared-models';
import { CartService } from '../../data/services/cart.service';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class ManageCartUseCase {
  private cartService = inject(CartService);

  public cartCount = computed(() => this.cartService.itemCount());

  itemCountOf(productId: string) {
    return this.cartService.countOf(productId);
  }

  private toCartItem(product: Product, quantity: number): CartItem {
    return { quantity, price: product.price, productId: product.id };
  }

  addItemToCart(product: Product): void {
    const currentItemCount = this.cartService.countOf(product.id);
    if (currentItemCount() >= product.numInStock) {
      // TODO: handle gracefully and tell UI to disable "Add to cart" button
      return;
    }
    this.cartService.addToCart(this.toCartItem(product, currentItemCount() + 1));
  }

  removeItemFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
