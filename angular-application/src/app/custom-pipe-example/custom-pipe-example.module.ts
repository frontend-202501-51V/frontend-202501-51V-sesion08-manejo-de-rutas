import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipeExampleRoutingModule } from './custom-pipe-example-routing.module';
import { CustomPipeExampleComponent } from './custom-pipe-example.component';
import { CapitalizarPipe } from './capitalizar.pipe';
import { OcultarPipe } from './ocultar.pipe';
import { PluralPipe } from './plural.pipe';


@NgModule({
  declarations: [
    // agregar aqui el pipe personalizado
    CustomPipeExampleComponent, CapitalizarPipe, OcultarPipe, OcultarPipe, PluralPipe
  ],
  imports: [
    CommonModule,
    CustomPipeExampleRoutingModule
  ]
})
export class CustomPipeExampleModule { }
