import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { RouterModule } from '@angular/router';

@NgModule( {
  declarations: [ContactsComponent],
  imports: [RouterModule.forChild( [{path: '', component: ContactsComponent}] )],
} )
export class ContactsModule {
  constructor() {
    console.log( 'loaded Contacts Module!' );
  }
}
