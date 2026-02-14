import { Category, Currency, Product } from '@common/shared-models';

export const categories: Category[] = [
  { id: 'cat-electronics', name: 'Electronics' },
  { id: 'cat-clothing', name: 'Clothing' },
];

const icons = {
  headphones: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M16 36v12a4 4 0 0 0 4 4h4V32h-4a4 4 0 0 0-4 4zM48 36v12a4 4 0 0 1-4 4h-4V32h4a4 4 0 0 1 4 4z"/>
    <path d="M16 36v-4a16 16 0 1 1 32 0v4"/>
  </svg>`,

  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="18" y="8" width="28" height="48" rx="4"/>
    <line x1="28" y1="48" x2="36" y2="48"/>
    <circle cx="32" cy="16" r="1" fill="currentColor"/>
  </svg>`,

  laptop: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="12" y="12" width="40" height="28" rx="2"/>
    <path d="M8 44h48l-4 8H12l-4-8z"/>
    <line x1="28" y1="48" x2="36" y2="48"/>
  </svg>`,

  tshirt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M20 8l-12 8 6 6 6-4v34h24V18l6 4 6-6-12-8c0 4-4 8-12 8s-12-4-12-8z"/>
  </svg>`,

  pants: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 8h28v8c0 4-2 8-4 12l-4 28h-8l-2-28-2 28h-8l-4-28c-2-4-4-8-4-12V8z"/>
    <line x1="18" y1="16" x2="46" y2="16"/>
  </svg>`,

  shoes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M8 40c0-8 4-16 16-16h8c8 0 24 4 24 16v4H8v-4z"/>
    <path d="M24 24v-8c0-2 2-4 4-4h4"/>
    <line x1="8" y1="44" x2="56" y2="44"/>
  </svg>`,
};

export const currency: Record<string, Currency> = {
  DKK: {
    code: 'DKK',
    symbol: 'kr.',
    decimals: 2,
    name: 'Danish Krone',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    decimals: 2,
    name: 'Euro',
  },
  JPY: {
    code: 'JPY',
    symbol: '¥',
    decimals: 0,
    name: 'Japanese Yen',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    decimals: 2,
    name: 'US Dollar',
  },
};

export const products: Product[] = [
  // Electronics
  {
    id: 'prod-1',
    name: 'Wireless Headphones',
    icon: icons.headphones,
    price: {
      value: 50394, // 503,94 kr
      currency: currency['DKK'],
    },
    numInStock: 2,
    categoryId: 'cat-electronics',
  },
  {
    id: 'prod-2',
    name: 'Smartphone Pro',
    icon: icons.smartphone,
    price: {
      value: 566370, // 5.663,70 kr
      currency: currency['DKK'],
    },
    numInStock: 8,
    categoryId: 'cat-electronics',
  },
  {
    id: 'prod-3',
    name: 'Laptop Ultra',
    icon: icons.laptop,
    price: {
      value: 818370, // 8.183,70 kr
      currency: currency['DKK'],
    },
    numInStock: 5,
    categoryId: 'cat-electronics',
  },

  // Clothing
  {
    id: 'prod-4',
    name: 'Classic T-Shirt',
    icon: icons.tshirt,
    price: {
      value: 15744, // 157,44 kr
      currency: currency['DKK'],
    },
    numInStock: 50,
    categoryId: 'cat-clothing',
  },
  {
    id: 'prod-5',
    name: 'Slim Fit Jeans',
    icon: icons.pants,
    price: {
      value: 37794, // 377,94 kr
      currency: currency['DKK'],
    },
    numInStock: 25,
    categoryId: 'cat-clothing',
  },
  {
    id: 'prod-6',
    name: 'Running Shoes',
    icon: icons.shoes,
    price: {
      value: 75594, // 755,94 kr,
      currency: currency['DKK'],
    },
    numInStock: 12,
    categoryId: 'cat-clothing',
  },
];
