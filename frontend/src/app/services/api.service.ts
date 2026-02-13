import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category, CheckoutRequest, OrderResponse, Product } from '@common/shared-models';

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
    private readonly baseUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Categories
    // ─────────────────────────────────────────────────────────────────────────────

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.baseUrl}/categories`);
    }

    getCategory(id: string): Observable<Category> {
        return this.http.get<Category>(`${this.baseUrl}/categories/${id}`);
    }

    getProductsByCategory(categoryId: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}/categories/${categoryId}/products`);
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Products
    // ─────────────────────────────────────────────────────────────────────────────

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}/products`);
    }

    getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Checkout
    // ─────────────────────────────────────────────────────────────────────────────

    submitOrder(order: CheckoutRequest): Observable<OrderResponse> {
        return this.http.post<OrderResponse>(`${this.baseUrl}/checkout`, order);
    }
}
