import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductsListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('angular-ecommerce-app');
}
