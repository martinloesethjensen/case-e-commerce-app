import { Category, Product } from '@common/shared-models';
import { Observable } from 'rxjs';

export abstract class CategoriesRepository {
  abstract getCategories(): Observable<Category[]>;
  abstract getCategory(id: string): Observable<Category>;
  abstract getProductsByCategory(categoryId: string): Observable<Product[]>;
}
