import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { OnSaleComponent } from './on-sale/on-sale.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContainerComponent },  // <-- use your home component here
  { path: 'contact', component: ContactComponent },
  { path: 'new-arrivals', component: NewArrivalsComponent},
  { path: 'on-sale', component: OnSaleComponent},
  { path: 'cart', component: CartComponent}
];
