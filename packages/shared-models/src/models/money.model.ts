export interface Money {
  value: number;
  currency: Currency;
}

// String literal type for currency codes
export type CurrencyCode = 'DKK' | 'USD' | 'EUR' | 'GBP' | 'JPY';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  decimals: number;
  name: string;
}
