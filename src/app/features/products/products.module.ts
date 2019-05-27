import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './products.service';

@NgModule( {
  declarations: [ProductsRoutingModule.components],
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

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ProductsModule,
    };
  }

}
