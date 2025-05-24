import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgifExampleRoutingModule } from './ngif-example-routing.module';
import { NgifExampleComponent } from './ngif-example.component';


@NgModule({
  declarations: [
    NgifExampleComponent
  ],
  imports: [
    CommonModule,
    NgifExampleRoutingModule
  ]
})
export class NgifExampleModule { }
