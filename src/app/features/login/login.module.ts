import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LostpassComponent } from './components/lostpass/lostpass.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: 'signin', component: SignInComponent},
      {path: 'lostpass', component: LostpassComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: '', redirectTo: 'signin'},
    ],
  },
];

@NgModule( {
  declarations: [LoginComponent, SignInComponent, LostpassComponent, RegistrationComponent],
  imports: [SharedModule, RouterModule.forChild( routes )],
} )
export class LoginModule {
  constructor() {
    console.log( 'loaded Login Module!' );
  }
}
