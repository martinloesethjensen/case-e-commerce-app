import { Injectable } from '@angular/core';
import { Category } from '@common/shared-models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesLocal {
  private readonly KEY = 'cached_categories';

  saveCategories(categories: Category[]) {
    return localStorage.setItem(this.KEY, JSON.stringify(categories));
  }

  getAll(): Category[] {
    const categories = localStorage.getItem(this.KEY);
    return categories ? JSON.parse(categories) : [];
  }

  get(id: string): Category | undefined {
    const categories = this.getAll();
    return categories.find((category) => category.id === id);
  }
}
