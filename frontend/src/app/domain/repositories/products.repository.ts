import { Product } from '@common/shared-models';
import { Observable } from 'rxjs';

export abstract class ProductsRepository {
  abstract getProducts(): Observable<Product[]>;
  abstract getProduct(id: string): Observable<Product>;
}
