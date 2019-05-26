/*
Guida: https://angular.io/guide/sharing-ngmodules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule],
  exports: [CommonModule, AlertComponent],
})
export class SharedModule {}
