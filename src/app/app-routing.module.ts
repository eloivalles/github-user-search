import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewerComponent } from './pages/viewer/viewer.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: ViewerComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
