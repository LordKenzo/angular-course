import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {
  products = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    console.log( `Products: ${JSON.stringify( this.products )}` );
  }

}
