import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingExampleRoutingModule } from './routing-example-routing.module';
import { RoutingComponent } from './routing/routing.component';


@NgModule({
  declarations: [
    RoutingComponent
  ],
  imports: [
    CommonModule,
    RoutingExampleRoutingModule
  ]
})
export class RoutingExampleModule { }
