import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-example',
  templateUrl: './ngif-example.component.html',
  styleUrl: './ngif-example.component.scss'
})
export class NgifExampleComponent {
  // se muestra dependiendo del valor boolean de mostrarMensaje
  mostrarMensaje: boolean = false;
  // cuando es false significa que NO esta autenticado entonces se  muestra
  // el boton
  autenticado = false

  cargado = false;

  actualizarCargado(){
    this.cargado = !this.cargado
    console.log('clickeado y cambiando el valor de this.cargado', this.cargado)
  }

  // declarar el valor numerico
  puntos = 15

  // declarar arreglo con tareas
  // tareas = ['cocinar', 'programar', 'estudiar'] // arreglo
  tareas = [] // arreglo vacio

  // declarar al usuario
  usuario: any = {
    // comentar / descomentar cuando no tenga esta propiedad
    nombre: 'Miguel'
  }

  // stock de un producto
  producto: any = {
    nombre: 'Mouse inalambrico',
    stock: 5  // menor a 5
  }
}
