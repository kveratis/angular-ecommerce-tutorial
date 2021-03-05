import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Product from './product';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Array<Product> = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
