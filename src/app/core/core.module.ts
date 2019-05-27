import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderIndicatorComponent } from './loader-indicator/loader-indicator.component';

@NgModule( {
  declarations: [NavbarComponent, LoaderIndicatorComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LoaderIndicatorComponent],
} )
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (!core) {
      console.log( 'Costruisco il Core Module' );
    } else {
      console.log( 'Core Module già costruito' );
      throw new Error( 'You cannot import Core Module twice or more!!!' )
    }

  }
}
