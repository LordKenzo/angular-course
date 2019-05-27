import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { ProductsModule } from '../products/products.module';

@NgModule( {
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    ProductsModule
  ]
} )
export class NewsModule {
}
