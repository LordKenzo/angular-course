import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class LoggerService {

  constructor() {
    console.log( 'LoggerService instance created' );
  }

  log(msg: string) {
    console.log( `LOGGER ${msg}` );
  }
}
