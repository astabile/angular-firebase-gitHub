import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  loading = true;
  product: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-firebase-github.firebaseio.com/products-idx.json')
      .subscribe((resp: Product[]) => {
        this.product = resp;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      })
  }
}
