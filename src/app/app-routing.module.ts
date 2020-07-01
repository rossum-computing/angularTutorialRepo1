import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';


const routes: Routes = [
  { path: "mobiledashboard", component: MobileDashboardComponent },
  { path: "mobileview", component: MobileViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
