import { Component } from '@angular/core';
import { ProductService, Product } from '../products.service';
import { CartService } from '../cart.service';
import { FallbackImageDirective } from '../custom-directives/fallback-image.directive';

@Component({
  selector: 'app-on-sale',
  imports: [FallbackImageDirective],
  templateUrl: './on-sale.component.html',
  styleUrl: './on-sale.component.css'
})
export class OnSaleComponent {
    onSaleProducts: Product[] = [];

    // We want to immediately getOnSaleProducts to render the list 
    constructor(private productService: ProductService, private cartService: CartService) {
      this.onSaleProducts = this.productService.getOnSaleProducts(); // get latest 5 products by ID
    }

    // When clicking add to cart trigger this method calling the same method within the service
    addToCart(product: Product) {
      this.cartService.addToCart(product);
    }

    getDiscountPercentage(product: Product): number {
        if (!product.discountPrice) return 0;
        const discount = product.price - product.discountPrice;
        return Math.round((discount / product.price) * 100);
      }
  
    onImageError(event: Event){
      const target = event.target as HTMLImageElement;
      target.src = 'https://t3.ftcdn.net/jpg/01/30/14/60/240_F_130146011_64algBC3Kz91zzdht7qeW2fEnUipEtwB.jpg';
      console.log('attempting to fetch temp image')
    }
}
