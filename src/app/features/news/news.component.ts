import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component( {
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
} )
export class NewsComponent implements OnInit {

  products = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    console.log( `Products: ${JSON.stringify( this.products )}` );
  }

}
