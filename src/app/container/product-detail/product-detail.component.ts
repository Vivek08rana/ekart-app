import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { SetBackgroundDirective } from '../../custom-directives/set-background.directive';
import { HighlightDirective } from '../../custom-directives/app-hover.directive';

import { CartService } from '../../cart.service';
import { FallbackImageDirective } from '../../custom-directives/fallback-image.directive';

@Component({
  selector: 'product-detail',
  imports: [SetBackgroundDirective, HighlightDirective, FallbackImageDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent {
  // @Input()
  // productListComp: ProductListComponent = undefined;

  @Input() product!: Product;
  @Output() close = new EventEmitter<void>();

  // Needed to call the service
  constructor(private cartService: CartService) {

  }

  CloseView(){
    this.close.emit(); // notify parent to close this component
  }

  // When clicking add to cart trigger this method calling the same method within the service
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
