import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule( {
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: []
} )
export class ProductsModule {
  constructor() {
    console.log( 'loaded Products Module!' );
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProductsModule,
      // equivalente -> providers: [ProductsService],
      providers: [{provide: ProductsService, multi: false, useClass: ProductsService}]
    };
  }

}
