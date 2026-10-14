import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly httpClient = inject(HttpClient);

  getALlProducts(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/v1/products`);
  }

  getSpecificProduct(productId: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/v1/products/${productId}`);
  }
}
