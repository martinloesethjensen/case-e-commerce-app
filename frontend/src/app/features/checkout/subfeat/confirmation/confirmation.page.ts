import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { OrderResponse } from '@common/shared-models';

/**
 * Confirmation Page
 *
 * TODO: Implement the order confirmation page.
 *
 * Requirements:
 * - Display order ID
 * - Show customer details
 * - List ordered items with quantities and prices
 * - Show order total
 * - "Continue Shopping" button to go back to products
 *
 * Note: Order data is passed via router state from checkout page
 */
@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent],
  templateUrl: './confirmation.page.html',
})
export class ConfirmationPage implements OnInit {
  order?: OrderResponse;

  constructor(private router: Router) {}

  ngOnInit() {
    // Get order data passed from checkout page
    const navigation = this.router.currentNavigation();
    this.order = navigation?.extras?.state?.['order'] as OrderResponse | undefined;

    // If no order data, redirect to products
    if (!this.order) {
      // Handle missing order data
      // this.router.navigate(['/products']);
    }
  }

  continueShopping() {
    this.router.navigate(['/products']);
  }
}
