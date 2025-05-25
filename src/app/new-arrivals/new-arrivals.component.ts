import { Component } from '@angular/core';

import { ProductService, Product } from '../products.service';
import { CartService } from '../cart.service';

import { FallbackImageDirective } from '../custom-directives/fallback-image.directive';

@Component({
  selector: 'app-new-arrivals',
  imports: [FallbackImageDirective],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent {
  newestProducts: Product[] = [];

   constructor(private productService: ProductService, private cartService: CartService) {
    this.newestProducts = this.productService.getNewest(5); // get latest 5 products by ID
  }

  // When clicking add to cart trigger this method calling the same method within the service
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
