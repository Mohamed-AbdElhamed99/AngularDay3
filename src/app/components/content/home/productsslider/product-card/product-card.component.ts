import { Component, Input, input, OnInit } from '@angular/core';
import { IProduct } from '../../../../../models/iproduct';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent
{
  @Input() product:any ;
}
