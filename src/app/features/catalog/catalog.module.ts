import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NoResultsComponent } from './no-results.component';
import { ProductsModule } from '../products/products.module';

@NgModule( {
  declarations: [CatalogComponent, CatalogFormComponent, CatalogListComponent, NoResultsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild( [
      {path: '', component: CatalogComponent},
      {path: 'no-results', component: NoResultsComponent},
    ] ),
    ProductsModule.forChild()
  ],
  providers: []
} )
export class CatalogModule {
  constructor() {
    console.log( 'loaded Catalog Module!' );
  }
}
