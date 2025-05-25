import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'main-menu',
  imports: [RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  mainMenuItems: string[] = ['Home', 'On Sale', 'New Arrivals', 'Contact', 'Services']
  NumItemsInCart = 0

  getLink(item: string): string {
    
      const routeMap: Record<string, string> = {
        'Home': '/home',
        'Products': '/products',
        'On Sale': '/on-sale',
        'New Arrivals': '/new-arrivals',
        'Contact': '/contact',
        'Services': '/services',
        'Cart': '/cart'
      };

      return routeMap[item] || '/';
    }

    constructor(private cartService: CartService){
      this.cartService.cart$.subscribe(items => {
        this.NumItemsInCart = items.reduce((total, item) => total + item.quantity, 0);
      }); 
    }
  }
