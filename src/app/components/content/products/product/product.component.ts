import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges
{
  
  oldPrice:number = 0;
  @Input() product:any ;
  @Output() editProduct = new EventEmitter();
  @Output() deleteProduct = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    this.oldPrice = changes['product'].previousValue?.price;
  }

  edit(id:any)
  {
    // this.product = {
    //   name : this.product.name,
    //   price : Math.round(this.product.price - this.product.price*0.25),
    //   description : this.product.description,
    //   image:this.product.image,
    //   id : this.product.id,

    // }
    
    this.editProduct.emit(id);
  }

  delete(id:any)
  {
    this.deleteProduct.emit(id);
  }
} 
