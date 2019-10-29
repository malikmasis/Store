import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Product } from "./models/product";
import { Shipping } from "./models/shipping";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
    ) {}

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

  getShippingPrices(): Observable<Shipping[]> {
    return this.http.get<Shipping[]>("/assets/shipping.json");
  }
}
