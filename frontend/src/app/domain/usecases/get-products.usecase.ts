import { inject, Injectable } from '@angular/core';
import { Product } from '@common/shared-models';
import { catchError, Observable, of } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class GetProductsUseCase {
  private api = inject(ApiService);

  execute(): Observable<Product[]> {
    return this.api.getProducts().pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        // TODO: Throw an error so the UI can handle it.
        return of([]);
      }),
    );
  }
}
