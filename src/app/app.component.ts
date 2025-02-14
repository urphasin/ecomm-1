import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('angular-ecommerce-app');
}
