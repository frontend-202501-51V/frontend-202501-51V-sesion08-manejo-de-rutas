import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss'
})
export class PipeExampleComponent {
  nombre = 'angular'
  nombreEnMayuscula = 'MIGUEL'

  fecha = new Date();

  // declarar el precio
  precio = 1500

  decimal = 123456789.414213562
}
