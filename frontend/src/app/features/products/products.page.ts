import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

import { ApiService } from '@app/services/api.service';
import { CartService } from '@app/services/cart.service';

/**
 * Products Page
 *
 * TODO: Implement the product listing page.
 *
 * - Display and organize products how you see fit
 * - Allow adding products to cart
 * - Show cart icon with item count in header
 */
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonBadge,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Products</ion-title>
        <ion-buttons slot="end">
          <ion-button routerLink="/cart">
            <ion-icon slot="icon-only" name="cart-outline"></ion-icon>
            @if (cartService.itemCount() > 0) {
              <ion-badge color="danger">{{ cartService.itemCount() }}</ion-badge>
            }
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p>TODO: Implement product listing</p>

      <!-- Hint: Use IonList, IonCard, or IonGrid to display products -->
      <!-- Hint: HTML can be rendered using [innerHTML] -->
    </ion-content>
  `,
})
export class ProductsPage implements OnInit {
  constructor(
    private apiService: ApiService,
    public cartService: CartService,
  ) {
    addIcons({ cartOutline });
  }

  ngOnInit() {
    // TODO: Load products and categories from API
  }
}
