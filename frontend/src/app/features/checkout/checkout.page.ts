import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { ApiService } from '../../services/api.service';
import { CartService } from '../../data/services/cart.service';

/**
 * Checkout Page
 *
 * TODO: Implement the checkout form.
 *
 * Requirements:
 * - Collect customer info: email, name, address (street, city, postal code, country)
 * - Validate all fields (email format, name min 2 chars, all address fields required)
 * - Show validation errors
 * - Submit order to API
 * - Handle API errors (display to user)
 * - On success, navigate to /confirmation with order data
 */
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/cart"></ion-back-button>
        </ion-buttons>
        <ion-title>Checkout</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p>TODO: Implement checkout form</p>

      <!-- Hint: Use Angular Reactive Forms (FormGroup is already imported) -->
      <!-- Hint: ion-input with type="email" for email validation UX -->
      <!-- Hint: Consider grouping address fields visually -->
    </ion-content>
  `,
})
export class CheckoutPage {
  // Example form setup - expand as needed
  checkoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private cartService: CartService,
    private router: Router,
  ) {
    // TODO: Build the form with proper validators
    this.checkoutForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      // TODO: Add address fields
    });
  }

  onSubmit() {
    // TODO: Validate, build CheckoutRequest, submit to API
    // On success: this.router.navigate(['/confirmation'], { state: { order: response } });
  }
}
