import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { DisableProductDirective } from '../../../custom-directives/disable-product.directive';

import { FallbackImageDirective } from '../../../custom-directives/fallback-image.directive';

@Component({
  selector: 'app-product',
  imports: [CommonModule, DisableProductDirective, FallbackImageDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: Product;
}
