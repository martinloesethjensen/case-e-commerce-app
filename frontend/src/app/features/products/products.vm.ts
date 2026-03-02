import { computed, inject, Injectable, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Category, Product } from '@common/shared-models';
import { GetProductsUseCase } from '../../domain/usecases/get-products.usecase';
import { GetCategoriesUseCase } from '../../domain/usecases/get-categories.usecase';
import { ManageCartUseCase } from '../../domain/usecases/manage-cart.usecase';

export interface ProductGroup {
  category: Category;
  products: Product[];
}

@Injectable()
export class ProductsViewModel {
  private getProductsUsecase = inject(GetProductsUseCase);
  private getCategoriesUsecase = inject(GetCategoriesUseCase);
  private manageCartUsecase = inject(ManageCartUseCase);
  private sanitizer = inject(DomSanitizer);

  private _products = signal<Product[]>([]);
  private _categories = signal<Category[]>([]);

  public products = this._products.asReadonly();

  public productGroups = computed<ProductGroup[]>(() => {
    const products = this._products();
    const categories = this._categories();

    return categories
      .map((category) => ({
        category,
        products: products.filter((p) => p.categoryId === category.id),
      }))
      .filter((group) => group.products.length > 0);
  });

  public cartCount = computed(() => this.manageCartUsecase.cartCount());

  public itemCountOf(productId: string) {
    return this.manageCartUsecase.itemCountOf(productId);
  }

  loadProducts() {
    this.getProductsUsecase.execute().subscribe((products) => this._products.set(products));
    this.getCategoriesUsecase.execute().subscribe((categories) => this._categories.set(categories));
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
}
