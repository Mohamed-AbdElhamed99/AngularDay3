import { Component } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:IProduct[] = [
    {
      id: 1,
      name: 'Espresso',
      image: 'images/img-2.png',
      price: 999.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 2,
      name: 'Americano',
      image: 'images/img-3.png',
      price: 699.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 3,
      name: 'Latte',
      image: 'images/img-4.png',
      price: 199.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 4,
      name: 'Latte',
      image: 'images/img-5.png',
      price: 249.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 5,
      name: 'Latte',
      image: 'images/img-2.png',
      price: 999.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 6,
      name: 'Mocha',
      image: 'images/img-3.png',
      price: 699.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 7,
      name: 'Flat White',
      image: 'images/img-4.png',
      price: 199.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 8,
      name: 'Cortado',
      image: 'images/img-5.png',
      price: 249.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    },
    {
      id: 9,
      name: 'Affogato',
      image: 'images/img-5.png',
      price: 249.99,
      description: 'Noise-cancelling headphones for immersive sound experience.'
    }
  ];

  // editProduct(id:any)
  // {
  //    this.products.forEach((p) => {
  //     if(p.id == id)
  //     {
  //       p.price = Math.round(p.price - p.price*0.25)
  //     }
  //   });
  // }

  editProduct(id:any)
  {
    for(var i = 0 ; i< this.products.length; i++)
    {
        
        if(this.products[i].id == id)
        {
          let product:IProduct = this.products[i];
          this.products[i] = {
            name : product.name,
            price : Math.round(product.price - product.price*0.25),
            description : product.description,
            image:product.image,
            id : product.id,
          }
        }
       
    }
  }

  removeProduct(id:any)
  {
    this.products = this.products.filter((products , i) => i!= id  );
  }
}
