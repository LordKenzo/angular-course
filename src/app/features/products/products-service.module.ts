/*
* Solo per servizi lazy che devono rimanere lazy in moduli...LAZY altrimenti avrei Dipendenza Circolare:D
* */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule( {
  declarations: [],
  imports: [
    CommonModule
  ],

} )
export class ProductsServiceModule {
  service;

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProductsServiceModule,
      providers: []
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ProductsServiceModule,
    };
  }
}
