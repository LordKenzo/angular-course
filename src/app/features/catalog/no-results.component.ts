import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-results',
  template: `
    <p>
      no-result works!
    </p>
    <button routerLink="../">Back</button>
  `,
  styles: [],
})
export class NoResultsComponent {
  constructor(private router: Router) {}

  back() {
    this.router.navigateByUrl('catalog');
  }
}
