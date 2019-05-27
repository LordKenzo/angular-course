import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';
import { NewsModule } from './features/news/news.module';

@NgModule( {
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HomeModule, NewsModule],
  providers: [],
  bootstrap: [AppComponent],
} )
export class AppModule {
}
