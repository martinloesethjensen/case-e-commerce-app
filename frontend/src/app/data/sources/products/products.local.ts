import { Injectable } from '@angular/core';
import { Product } from '@common/shared-models';

@Injectable({
  providedIn: 'root',
})
export class ProductsLocal {
  private readonly KEY = 'cached_products';

  saveProducts(products: Product[]) {
    return localStorage.setItem(this.KEY, JSON.stringify(products));
  }

  getAll(): Product[] {
    const products = localStorage.getItem(this.KEY);
    return products ? JSON.parse(products) : [];
  }

  get(id: string): Product | undefined {
    const products = this.getAll();
    return products.find((product) => product.id === id);
  }
}
