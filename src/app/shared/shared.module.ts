/*
Guida: https://angular.io/guide/sharing-ngmodules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { LogbuttonComponent } from './components/logbutton/logbutton.component';

@NgModule( {
  declarations: [AlertComponent, LogbuttonComponent],
  imports: [CommonModule],
  exports: [CommonModule, AlertComponent, LogbuttonComponent],
} )
export class SharedModule {
}
