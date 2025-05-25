import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from "./top-header/top-header.component";
import { ContainerComponent } from "./container/container.component";
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true, // Required to use `imports`
  imports: [RouterOutlet, HeaderComponent, TopHeaderComponent, ContainerComponent],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ekart';
}
