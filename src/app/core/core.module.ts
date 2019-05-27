import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderIndicatorComponent } from './loader-indicator/loader-indicator.component';
import { throwIfAlreadLoaded } from './guards/import.guard';

@NgModule( {
  declarations: [NavbarComponent, LoaderIndicatorComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LoaderIndicatorComponent],
} )
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadLoaded(parentModule, 'CoreModule');
  }
}
