import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        loadComponent: () =>
            import('./pages/products/products.page').then((m) => m.ProductsPage),
    },
    {
        path: 'cart',
        loadComponent: () =>
            import('./pages/cart/cart.page').then((m) => m.CartPage),
    },
    {
        path: 'checkout',
        loadComponent: () =>
            import('./pages/checkout/checkout.page').then((m) => m.CheckoutPage),
    },
    {
        path: 'confirmation',
        loadComponent: () =>
            import('./pages/confirmation/confirmation.page').then((m) => m.ConfirmationPage),
    },
];
