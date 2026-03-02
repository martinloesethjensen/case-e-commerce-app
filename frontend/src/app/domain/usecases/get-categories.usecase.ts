import { inject, Injectable } from '@angular/core';
import { Category } from '@common/shared-models';
import { catchError, Observable, of } from 'rxjs';
import { CategoriesRepository } from '../repositories/categories.repository';

@Injectable({
  providedIn: 'root',
})
export class GetCategoriesUseCase {
  private repository = inject(CategoriesRepository);

  execute(): Observable<Category[]> {
    return this.repository.getCategories().pipe(
      catchError((error) => {
        console.error('Error fetching categories:', error);
        return of([]);
      }),
    );
  }
}
