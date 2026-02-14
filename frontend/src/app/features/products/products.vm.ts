import { computed, inject, Injectable, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Product } from '@common/shared-models';
import { GetProductsUseCase } from '../../domain/usecases/get-products.usecase';
import { ManageCartUseCase } from '../../domain/usecases/manage-cart.usecase';

@Injectable()
export class ProductsViewModel {
  private getProductsUsecase = inject(GetProductsUseCase);
  private manageCartUsecase = inject(ManageCartUseCase);
  private sanitizer = inject(DomSanitizer);

  private _products = signal<Product[]>([]);
  public products = this._products.asReadonly();

  public cartCount = computed(() => this.manageCartUsecase.cartCount());

  loadProducts() {
    this.getProductsUsecase.execute().subscribe((products) => this._products.set(products));
  }

  getSafeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  addToCart(product: Product) {
    this.manageCartUsecase.addItemToCart(product);
  }

  removeFromCart(productId: string) {
    this.manageCartUsecase.removeItemFromCart(productId);
  }

  // TODO(mlj): implement quantity like increment & decrement
}
