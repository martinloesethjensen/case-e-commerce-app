import { inject, Injectable } from '@angular/core';
import { CategoriesRepository } from '../../../domain/repositories/categories.repository';
import { HttpClient } from '@angular/common/http';
import { Category, Product } from '@common/shared-models';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../common.api';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApi {
  private readonly baseUrl = `${BASE_URL}/categories`;

  private http = inject(HttpClient);

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`);
  }

  get(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  getProductsByCategory(categoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/${categoryId}/products`);
  }
}
