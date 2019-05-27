import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from '../products/products.module';

@NgModule( {
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsModule.forRoot()
  ]
} )
export class HomeModule {
}
