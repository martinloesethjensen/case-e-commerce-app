import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  arrowForwardOutline,
  cartOutline,
  removeCircleOutline,
  trashOutline,
} from 'ionicons/icons';
import { CartViewModel } from './cart.vm';

@Component({
  selector: 'app-cart',
  standalone: true,
  providers: [CartViewModel],
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonLabel,
    IonText,
  ],
  templateUrl: './cart.page.html',
})
export class CartPage {
  public vm = inject(CartViewModel);

  constructor() {
    addIcons({
      cartOutline,
      addCircleOutline,
      removeCircleOutline,
      trashOutline,
      arrowForwardOutline,
    });
  }
}
