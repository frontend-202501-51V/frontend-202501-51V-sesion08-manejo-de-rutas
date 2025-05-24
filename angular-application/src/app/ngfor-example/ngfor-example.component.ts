import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrl: './ngfor-example.component.scss',

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('5000ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class NgforExampleComponent {
  // declarar la lista
  nombres = ['miguel', 'ana', 'alfredo'];

  // productos
  productos = [
    {
      nombre: 'Laptop', precio: 2500
    },
    {
      nombre: 'Mouse', precio: 80
    },
    {
      nombre: 'Teclado', precio: 150
    }
  ]

  // frutas
  frutas = [ 'manzana', 'banana', 'naranja']

  // tareas
  tareas = [
    { descripcion: 'estudiar angular', completada: true},
    { descripcion: 'hacer ejercicio', completada: true },
    { descripcion: 'almorzar', completada: true },
  ]

  // lista
  usuarios: any = [
    {
      nombre: 'ana', email: 'ana@gmail.com'
    },
    {
      nombre: 'miguel', email: 'miguel@gamil.com'
    }
  ]
  // asignacion de un objeto
  columnas: any  = ['nombre', 'edad', 'ciudad']
  filas: any = [
    {
      nombre: 'ana', edad: 29, ciudad : 'lima'
    },
    {
      nombre:  'rafael', edad :40, ciudad: 'arequipa'
    }
  ]

  // items
  items: any = [
    {
      id: 1, nombre: 'elemento1'
    },
    {
      id: 2, nombre: 'elemento2'
    }
  ]
  trackById(index: number, item: any){
    return item.id
  }

  // animaciones
  mensajes = ['hola', 'bienvenido', 'angular']
}
