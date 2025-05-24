import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgforExampleRoutingModule } from './ngfor-example-routing.module';
import { NgforExampleComponent } from './ngfor-example.component';


@NgModule({
  declarations: [
    NgforExampleComponent
  ],
  imports: [
    CommonModule,
    NgforExampleRoutingModule
  ]
})
export class NgforExampleModule { }
