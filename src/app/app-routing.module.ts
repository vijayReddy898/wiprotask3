import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistartionComponent } from './components/registartion/registartion.component';

const routes: Routes = [{path:'', pathMatch:'full', component:RegistartionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
