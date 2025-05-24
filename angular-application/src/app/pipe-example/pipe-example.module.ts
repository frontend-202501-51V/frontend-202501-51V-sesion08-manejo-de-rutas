import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeExampleRoutingModule } from './pipe-example-routing.module';
import { PipeExampleComponent } from './pipe-example.component';


@NgModule({
  declarations: [
    PipeExampleComponent
  ],
  imports: [
    CommonModule,
    PipeExampleRoutingModule
  ]
})
export class PipeExampleModule { }
