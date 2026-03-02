import { Money } from '@common/shared-models';

export interface CartItem {
  productId: string;
  quantity: number;
  price: Money;
  name: string;
  icon: string;
  numInStock: number;
}
