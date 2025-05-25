import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products.service';

// Extend the existing defined properties of Product
export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() { }

  // Adding and Deleteing From Cart

  addToCart(product: Product) {
    const existing = this.cartItems.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.cartItems);
  }

  deleteFromCart(product: Product){
    // We assign cartItems a new version of cartItems
    // The new version keeps every item whose id is not equal to the one we're trying to delete
    this.cartItems = this.cartItems.filter(item => item.id !== product.id)
    //update cart display
    this.cartSubject.next(this.cartItems);
  }

  // Calculating Item Total and Cart Total

  calculateSubtotal(items: CartItem[]): number {
    let subtotal = 0;
    for (let item of items) {
      subtotal += item.price * item.quantity;
    }
    return subtotal
  }

  calculateTotal(items: CartItem[]): number {
    let subtotal = this.calculateSubtotal(items)
    return subtotal * 1.13;
  }

  calculateItemTotal(item: CartItem) {
    return item.price * item.quantity;
  }

  // Increasing and Decreasing Item Quantity

  increaseQuantity(item: CartItem) {
    item.quantity += 1;
    this.cartSubject.next(this.cartItems);
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1){
      item.quantity -= 1;
      this.cartSubject.next(this.cartItems);
    }
  }
}