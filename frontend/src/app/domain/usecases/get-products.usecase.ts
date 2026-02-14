import { inject, Injectable } from '@angular/core';
import { Product } from '@common/shared-models';
import { catchError, Observable, of } from 'rxjs';
import { ProductsRepository } from '../repositories/products.repository';

@Injectable({
  providedIn: 'root',
})
export class GetProductsUseCase {
  private repository = inject(ProductsRepository);

  execute(): Observable<Product[]> {
    return this.repository.getProducts().pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        // TODO: Throw an error so the UI can handle it.
        return of([]);
      }),
    );
  }
}
