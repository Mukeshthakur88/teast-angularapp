import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistationComponent } from "./component/registation/registation.component"
import { DashboardComponent } from "./component/dashboard/dashboard.component"

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  
  {
    path: 'register',
    component: RegistationComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
