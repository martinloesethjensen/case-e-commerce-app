import { inject, Injectable } from '@angular/core';
import { CategoriesRepository } from '../../domain/repositories/categories.repository';
import { Category, Product } from '@common/shared-models';
import { catchError, concat, EMPTY, Observable, of, tap } from 'rxjs';
import { CategoriesApi } from '../sources/categories/categories.api';
import { CategoriesLocal } from '../sources/categories/categories.local';

@Injectable({ providedIn: 'root' })
export class CategoriesRepositoryImpl implements CategoriesRepository {
  private api = inject(CategoriesApi);
  private local = inject(CategoriesLocal);

  getCategories(): Observable<Category[]> {
    const localData = this.local.getAll();
    const local$ = of(localData);
    const remote$ = this.api.getAll().pipe(
      tap((categories) => this.local.saveCategories(categories)),
      catchError(() => EMPTY),
    );
    return concat(local$, remote$);
  }

  getCategory(id: string): Observable<Category> {
    const localData = this.local.get(id);
    const local$ = !localData ? EMPTY : of(localData);
    const remote$ = this.api.get(id).pipe(catchError(() => EMPTY));
    return concat(local$, remote$);
  }

  getProductsByCategory(categoryId: string): Observable<Product[]> {
    return this.api.getProductsByCategory(categoryId).pipe(catchError(() => EMPTY));
  }
}
