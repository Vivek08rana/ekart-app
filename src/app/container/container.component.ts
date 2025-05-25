import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from "./featured-brands/featured-brands.component";

@Component({
  selector: 'app-container',
  imports: [SearchComponent, ProductListComponent, ProductDetailComponent, FeaturedBrandsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})

export class ContainerComponent {
  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  listOfString: string[] = [];

  searchText: string = ''

  setSearchText(value: string){
    this.searchText = value;
    console.log(this.searchText)

    // Now tell the product list to update
    // Only when the search button is pressed will the product counts update to reflect that search
    if (this.productListComponent) {
      this.productListComponent.searchText = value;
      this.productListComponent.updateFilteredProducts();
      this.productListComponent.updateProductCounts();
    }
  }
}

