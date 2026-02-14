import { Product } from '@common/shared-models';
import { catchError, concat, EMPTY, Observable, of, tap } from 'rxjs';
import { ProductsRepository } from '../../domain/repositories/products.repository';
import { inject, Injectable } from '@angular/core';
import { ProductsApi } from '../sources/products/products.api';
import { ProductsLocal } from '../sources/products/products.local';

@Injectable({ providedIn: 'root' })
export class ProductsRepositoryImpl implements ProductsRepository {
  private api = inject(ProductsApi);
  private local = inject(ProductsLocal);

  getProducts(): Observable<Product[]> {
    const localData = this.local.getAll();
    const local$ = of(localData);
    const remote$ = this.api.getAll().pipe(
      tap((products) => this.local.saveProducts(products)),
      // TODO: handle error propagation
      catchError(() => EMPTY),
    );
    console.log('remote$:', remote$);
    return concat(local$, remote$);
  }

  getProduct(id: string): Observable<Product> {
    const localData = this.local.get(id);
    const local$ = !localData ? EMPTY : of(localData);
    // TODO: handle error propagation
    const remote$ = this.api.get(id).pipe(catchError(() => EMPTY));
    return concat(local$, remote$);
  }
}
