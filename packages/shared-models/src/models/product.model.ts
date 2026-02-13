import { Money } from './money.model';

export interface Product {
  id: string;
  name: string;
  icon: string; // SVG string
  price: Money;
  numInStock: number;
  categoryId: string;
}
