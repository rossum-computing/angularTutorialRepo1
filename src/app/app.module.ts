import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileDashboardComponent,
    MobileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
