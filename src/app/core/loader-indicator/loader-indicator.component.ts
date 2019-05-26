import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-loader-indicator',
  templateUrl: './loader-indicator.component.html',
  styleUrls: ['./loader-indicator.component.scss'],
})
export class LoaderIndicatorComponent implements OnInit, AfterViewInit {
  public isShowingRouteLoadIndicator = false;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    /*
    Il Router emette degli eventi speciali configurazioni di caricamento con loadChildren nel RouterModule.
    Mi metto in ascolto di: Start (RouteConfigLoadStart) ed End (RouteConfigLoadEnd) per sapere quando inizia e finisce un caricamento.
    Uso un contatore perchè potrei avere più processamenti di caricamento in background
    */
    let asyncLoadCurrentLoadingCount = false;
    this.router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          asyncLoadCurrentLoadingCount = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          asyncLoadCurrentLoadingCount = false;
        }
        this.isShowingRouteLoadIndicator = !!asyncLoadCurrentLoadingCount;
      },
    );
  }

  ngOnInit() {}
}
