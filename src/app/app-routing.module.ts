import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
