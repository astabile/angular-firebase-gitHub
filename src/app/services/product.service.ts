import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  loading = true;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-firebase-github.firebaseio.com/products-idx.json')
        .subscribe((resp: Product[]) => {
          this.products = resp;
          this.loading = false;
          resolve();
        });
    });
  }

  public getProduct(id: string) {
    return this.http.get(`https://angular-firebase-github.firebaseio.com/products/${id}.json`);
  }

  public searchProduct(entry: string) {
    if (this.products.length === 0) {
      this.loadProducts().then(() => {
        this.filterProducts(entry);
      })
    }
    else
      this.filterProducts(entry);
  }

  private filterProducts(entry: string) {
    console.log(this.products);
    this.filteredProducts = [];
    entry = entry.toLocaleLowerCase();

    this.products.forEach(prod => {
      const toLowerTitle = prod.title.toLocaleLowerCase();
      const toLowerCategory = prod.category.toLocaleLowerCase();

      if (toLowerCategory.indexOf(entry) >= 0 || toLowerTitle.indexOf(entry) >= 0)
        this.filteredProducts.push(prod);
    });
  }
}