import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component( {
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
} )
export class ProductsComponent implements OnInit {

  products = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    console.log( `Products: ${JSON.stringify( this.products )}` );
  }

}
