import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../common.api';
import { Observable } from 'rxjs';
import { Product } from '@common/shared-models';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductsApi {
  private readonly baseUrl = `${BASE_URL}/products`;

  private http = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  get(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
