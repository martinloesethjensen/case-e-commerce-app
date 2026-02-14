import { computed, inject, Injectable } from '@angular/core';
import { ManageCartUseCase } from '../../domain/usecases/manage-cart.usecase';

@Injectable()
export class CartViewModel {
  private manageCartUsecase = inject(ManageCartUseCase);

  private cartCount = computed(() => this.manageCartUsecase.cartCount());

  public readonly isEmpty = computed(() => this.cartCount() === 0);
}
