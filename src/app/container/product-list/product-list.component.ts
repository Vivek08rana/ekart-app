import { Component, Input } from '@angular/core';
import { ProductService, Product } from '../../products.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { ProductComponent } from "./product/product.component";
import { FilterComponent } from "./filter/filter.component";
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'product-list',
  imports: [CommonModule, HeaderComponent, ProductComponent, FilterComponent, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  products: Product[] = [];
  inStock_products: Product[] = [];
  outOfStock_products: Product[] = [];

  selectedProduct: Product;
  totalProductCount = 0;
  totalProductInStock = 0;
  totalProductOutOfStock = 0;

  @Input()
  searchText: string = '';

  selectedFilterRadioButton: string = 'All'

  onFilterChanged(value: string){
    this.selectedFilterRadioButton = value
    this.updateFilteredProducts(); // triggers the filtering and updates filteredProducts array
  }

  //sets list to either this.in stock or this.outOfStock or products
  //this.selectedFilterRadioButton = XYZ then set list to this else set to this else set to this
  //Runs when change is detected from radio button being pressed

  // Declaring and initializing the property filteredProducts as an empty array of Product objects.
  filteredProducts: Product[] = [];
  allFilteredProducts: Product[] = [];

  updateFilteredProducts() {
    console.log('Change detected')
    const list = 
      this.selectedFilterRadioButton === 'In Stock' ? this.inStock_products :
      this.selectedFilterRadioButton === 'Out of Stock' ? this.outOfStock_products :
      this.products;

    // Returns filtered list of products based on search text always
    this.filteredProducts = this.productService.getFilteredSearchProducts(list, this.searchText);
  }

  updateProductCounts() {
    this.allFilteredProducts = this.productService.getFilteredSearchProducts(this.products, this.searchText);
    this.totalProductCount = this.productService.getTotalProductCount(this.allFilteredProducts);
    this.totalProductInStock = this.productService.getProductInStockCount(this.allFilteredProducts);
    this.totalProductOutOfStock = this.productService.getProductOutOfStockCount(this.allFilteredProducts);
  }

  //Called once on page load to load the intial products because the method is only called on button press
  //So by default we need to trigger a button press using this
  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Get all, in stock, out of stock products so we can render them on page
    this.products = this.productService.getAllProducts();   
    this.inStock_products = this.productService.getInStockProducts();
    this.outOfStock_products = this.productService.getOutOfStockProducts();

    // Inital Prouct List and Counts
    this.updateFilteredProducts(); // to apply the default filter on load which is 'all'
    this.updateProductCounts(); // to apply the default product counts on load
  }
}
