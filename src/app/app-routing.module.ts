import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadService } from './core/services/preload.service';
import { HomeComponent } from './features/home/home.component';
import { NewsComponent } from './features/news/news.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule',
  },
  {
    path: 'catalog',
    loadChildren: './features/catalog/catalog.module#CatalogModule',
  },
  {
    path: 'contacts',
    loadChildren: './features/contacts/contacts.module#ContactsModule',
  },
  {
    path: 'products',
    loadChildren: './features/products/products.module#ProductsModule',
    data: {
      isPreload: true, products: [
        {id: 1, name: 'iPhone'}
      ]
    }
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes, {
    preloadingStrategy: PreloadService
  } )],
  exports: [RouterModule],
} )
export class AppRoutingModule {
}
