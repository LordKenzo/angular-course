import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  time: number;

  constructor() {
    this.time = Date.now();
    console.log( `Costruttore Products Service ${this.time}` );
  }

  getAllProducts(): Array<{}> {
    return [{id: 1, name: 'Prodotto 1'}, {id: 2, name: 'Prodotto2'}, {id: this.time, name: 'Istanza'}];
  }
}
