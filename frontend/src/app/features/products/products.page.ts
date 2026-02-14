import { Component, inject, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, cartOutline, removeCircleOutline } from 'ionicons/icons';

import { ProductsViewModel } from './products.vm';
import { Money, Product } from '@common/shared-models';
import { MoneyUtils } from '@common/utils';

/**
 * Products Page
 *
 * TODO: Implement the product listing page.
 *
 * - Display and organize products how you see fit
 * - Show cart icon with item count in header
 */
@Component({
  selector: 'app-products',
  standalone: true,
  providers: [ProductsViewModel],
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
    IonList,
    IonItem,
    IonLabel,
  ],
  templateUrl: './products.page.html',
})
export class ProductsPage implements OnInit {
  public vm = inject(ProductsViewModel);
  private locale = inject(LOCALE_ID);

  constructor() {
    addIcons({ cartOutline, addCircleOutline, removeCircleOutline });
  }

  ngOnInit() {
    this.vm.loadProducts();
  }

  formatPrice(money: Money): string {
    return MoneyUtils.toPrice(money, this.locale);
  }

  addToCart(product: Product) {
    this.vm.addToCart(product);
  }

  removeFromCart(productId: string) {
    this.vm.removeFromCart(productId);
  }
}
