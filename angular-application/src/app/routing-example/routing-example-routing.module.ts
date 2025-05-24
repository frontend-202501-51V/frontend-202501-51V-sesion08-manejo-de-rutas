import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {
    path: '',
    component:  RoutingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingExampleRoutingModule { }
