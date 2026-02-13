export interface Product {
    id: string;
    name: string;
    icon: string; // SVG string
    price: number; // in cents
    numInStock: number;
    categoryId: string;
}
