import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CartService } from '../../data/services/cart.service';
import { CartViewModel } from './cart.vm';

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
  providers: [CartViewModel],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton],
  templateUrl: './cart.page.html',
})
export class CartPage {
  public vm = inject(CartViewModel);
}
