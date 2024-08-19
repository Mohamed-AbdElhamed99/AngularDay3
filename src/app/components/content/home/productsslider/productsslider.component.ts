import { Component } from '@angular/core';
import { IProduct } from '../../../../models/iproduct';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-productsslider',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './productsslider.component.html',
  styleUrl: './productsslider.component.css'
})
export class ProductssliderComponent
 {
    products:IProduct[] = [
      {
        id: 1,
        name: 'Laptop',
        image: 'images/img-2.png',
        price: 999.99,
        description: 'A high-performance laptop for all your computing needs.'
      },
      {
        id: 2,
        name: 'Smartphone',
        image: 'images/img-3.png',
        price: 699.99,
        description: 'A sleek smartphone with cutting-edge features.'
      },
      {
        id: 3,
        name: 'Headphones',
        image: 'images/img-4.png',
        price: 199.99,
        description: 'Noise-cancelling headphones for immersive sound experience.'
      },
      {
        id: 4,
        name: 'Smartwatch',
        image: 'images/img-5.png',
        price: 249.99,
        description: 'A stylish smartwatch with fitness tracking capabilities.'
      }
    ];


}
