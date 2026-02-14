import { inject, Injectable } from '@angular/core';
import { Product } from '@common/shared-models';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class GetProductsUseCase {
  private api = inject(ApiService);

  execute(): Observable<Product[]> {
    return this.api.getProducts();
  }
}
