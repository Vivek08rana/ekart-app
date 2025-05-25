import { Injectable } from '@angular/core';
import { PRODUCTS } from './container/product-list/product-list.data';

Injectable({
  providedIn: 'root'
})

export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  gender: string;
  category: string;
  size: number[];
  color: string[];
  price: number;
  discountPrice?: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
}

export class ProductService {
  private products: Product[] = PRODUCTS;

  getNewest(count: number = 5): Product[] {
    // Sort by id descending, highest id means newest product
    return [...this.products]
      .sort((a, b) => b.id - a.id)
      .slice(0, count);
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(product => product.slug === slug);
  }

  getFilteredSearchProducts(list: Product[], searchText: string): Product[] {
    return list.filter(p =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  getOnSaleProducts(): Product[] {
    return this.products.filter(product => product.discountPrice !== undefined);
  }

  // Return the number of products that are all, in stock, out of stock
  getTotalProductCount(products: Product[]): number {
    return products.length;
  }

  getProductInStockCount(products: Product[]): number {
    return products.filter(p => p.is_in_inventory).length;
  }

  getProductOutOfStockCount(products: Product[]): number {
    return products.filter(p => !p.is_in_inventory).length;
  }

  // Returns the actual product list based on same coditions as above
  getAllProducts(): Product[] {
    return this.products;
  }

  getInStockProducts(): Product[] {
    return this.products.filter(p => p.is_in_inventory);
  }

  getOutOfStockProducts(): Product[] {
    return this.products.filter(p => !p.is_in_inventory);
  }
}
