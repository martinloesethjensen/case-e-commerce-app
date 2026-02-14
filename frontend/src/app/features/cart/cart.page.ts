import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CartService } from '../../data/services/cart.service';

/**
 * Cart Page
 *
 * TODO: Implement the shopping cart page.
 *
 * Requirements:
 * - Display cart items with product info and quantity
 * - Allow adjusting quantity (respecting stock limits)
 * - Allow removing items
 * - Show line totals and cart total
 * - Checkout button (navigates to /checkout)
 * - Handle empty cart state
 */
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/products"></ion-back-button>
        </ion-buttons>
        <ion-title>Cart</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p>TODO: Implement cart view</p>

      <!-- Hint: Show empty state when cart has no items -->
      <!-- Hint: Use IonItemSliding for swipe-to-delete -->
    </ion-content>
  `,
})
export class CartPage {
  constructor(public cartService: CartService) {}
}
