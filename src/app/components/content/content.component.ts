import { Component, Input } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HomeComponent, LoginComponent, ProductsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() component:string = 'home'
}
