import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component( {
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
} )
export class CatalogComponent implements OnInit {
  products = [];

  constructor(private router: Router, private productsService: ProductsService) {
  }

  search() {
    this.router.navigateByUrl( 'catalog/no-results' );
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    console.log( `Products: ${JSON.stringify( this.products )}` );
  }
}
