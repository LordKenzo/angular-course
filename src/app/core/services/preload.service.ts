import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class PreloadService implements PreloadingStrategy {

  constructor() {
    console.log( 'PreloadService instance created' );
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.isPreload ? this.loading( route, load ) : of( null );
  }

  loading(route: Route, load: () => Observable<any>) {
    console.log( `Preloading path: ${route.path}` );
    return load();
  }


}
