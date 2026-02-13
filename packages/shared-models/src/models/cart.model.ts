import { Money } from './money.model';

export interface CartItem {
  productId: string;
  quantity: number;
  price: Money;
}
