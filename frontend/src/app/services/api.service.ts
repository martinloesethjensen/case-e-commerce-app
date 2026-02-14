import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckoutRequest, OrderResponse } from '@common/shared-models';

/**
 * API Service for communicating with the backend.
 *
 * All endpoints are ready to use. The backend runs on http://localhost:$PORT
 * See http://localhost:$PORT/api-docs for full Swagger documentation.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:4000/api';

  private http = inject(HttpClient);

  // ─────────────────────────────────────────────────────────────────────────────
  // Checkout
  // ─────────────────────────────────────────────────────────────────────────────

  submitOrder(order: CheckoutRequest): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${this.baseUrl}/checkout`, order);
  }
}
