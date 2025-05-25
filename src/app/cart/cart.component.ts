import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { AsyncPipe  } from '@angular/common';
import { Observable } from 'rxjs';
import { CartItem } from '../cart.service';
import { FallbackImageDirective } from '../custom-directives/fallback-image.directive';

@Component({
  selector: 'app-cart',
  imports: [AsyncPipe, FallbackImageDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  cartItems$: Observable<CartItem[]>;
   
  constructor(private cartService: CartService) {
      this.cartItems$ = this.cartService.cart$;
    }

  calculateSubtotal(cartItems: CartItem[]): number {
    return this.cartService.calculateSubtotal(cartItems);
  }

  calculateTotal(cartItems: CartItem[]): number {
    return this.cartService.calculateTotal(cartItems);
  }

  calculateItemTotal(item: CartItem){
    return this.cartService.calculateItemTotal(item)
  }

  deleteFromCart(item: CartItem){
    this.cartService.deleteFromCart(item)
  }

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item)
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item)
  }
}
