import { computed, inject, Injectable, LOCALE_ID } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ManageCartUseCase } from '../../domain/usecases/manage-cart.usecase';
import { CartItem } from '../../domain/models/cart-item.model';
import { MoneyUtils } from '@common/utils';

@Injectable()
export class CartViewModel {
  private manageCartUsecase = inject(ManageCartUseCase);
  private sanitizer = inject(DomSanitizer);
  private locale = inject(LOCALE_ID);

  public readonly isEmpty = computed(() => this.manageCartUsecase.cartCount() === 0);

  public readonly items = this.manageCartUsecase.cartItems;

  public readonly totalPrice = computed(() => {
    const items = this.manageCartUsecase.cartItems();
    if (items.length === 0) return null;
    const total = items.reduce(
      (sum, item) => MoneyUtils.add(sum, MoneyUtils.multiply(item.price, item.quantity)),
      MoneyUtils.zero(items[0].price.currency),
    );
    return MoneyUtils.toPrice(total, this.locale);
  });

  getSafeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  formatPrice(item: CartItem): string {
    return MoneyUtils.toPrice(item.price, this.locale);
  }

  lineTotal(item: CartItem): string {
    return MoneyUtils.toPrice(MoneyUtils.multiply(item.price, item.quantity), this.locale);
  }

  increase(item: CartItem): void {
    this.manageCartUsecase.increaseCartItem(item);
  }

  decrease(item: CartItem): void {
    this.manageCartUsecase.removeItemFromCart(item.productId);
  }

  removeItem(productId: string): void {
    this.manageCartUsecase.removeItemCompletely(productId);
  }

  clearCart(): void {
    this.manageCartUsecase.clearCart();
  }
}
