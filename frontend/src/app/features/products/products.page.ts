import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, cartOutline, pricetag, removeCircleOutline } from 'ionicons/icons';

import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { products } from '../../../../../backend/src/data/seed';
import { CartItem, Category, Product } from '@common/shared-models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    IonList,
    IonItem,
    IonLabel,
  ],
  templateUrl: './products.page.html',
})
export class ProductsPage implements OnInit {
  constructor() {
    addIcons({ cartOutline, addCircleOutline, removeCircleOutline });
  }

  public cartService = inject(CartService);
  private apiService = inject(ApiService);
  private sanitizer = inject(DomSanitizer);

  products: Product[] = [];
  private categories: Category[] = [];

  getSafeIcon(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }

  private toCartItem(product: Product, quantity: number): CartItem {
    return { quantity, price: product.price, productId: product.id };
  }

  addToCart(product: Product) {
    this.cartService.addToCart(this.toCartItem(product, 1));
  }

  decrement(product: Product) {
    const cartItem = this.toCartItem(product, 1);
    this.cartService.updateQuantity(cartItem, cartItem.quantity--);
  }

  increment(product: Product) {
    const cartItem = this.toCartItem(product, 1);
    this.cartService.updateQuantity(cartItem, cartItem.quantity++);
  }

  ngOnInit() {
    this.apiService.getProducts().subscribe((products) => {
      this.products = [...products, ...products, ...products];
    });
    this.apiService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
