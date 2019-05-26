import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderIndicatorComponent } from './loader-indicator/loader-indicator.component';

@NgModule({
  declarations: [NavbarComponent, LoaderIndicatorComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LoaderIndicatorComponent],
})
export class CoreModule {}
