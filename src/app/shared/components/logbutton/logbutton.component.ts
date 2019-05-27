import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../core/services/logger.service';

@Component( {
  selector: 'app-logbutton',
  template: `
    <button (click)="logMe()">Logger</button>
  `,
  styles: []
} )
export class LogbuttonComponent implements OnInit {

  constructor(public logger: LoggerService) {
    console.log( 'Logger Button constructor' );
  }

  ngOnInit() {
  }

  logMe() {
    this.logger.log( 'Ciaone' );
  }

}
