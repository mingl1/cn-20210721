import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
    window.alert('Your product has been added to the cart!');
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}

}