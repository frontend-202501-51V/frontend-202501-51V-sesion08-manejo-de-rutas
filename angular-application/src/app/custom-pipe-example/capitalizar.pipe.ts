import { Pipe, PipeTransform } from "@angular/core";

// 1. obtener el primer caracter
// los demas caracteres pasarlos a mayuscula
// volver a agregar el caracter
// pasarlo a minuscula

@Pipe({name: 'capitalizar'})
export class CapitalizarPipe implements PipeTransform{
  transform(valor: string): string {

    if (!valor) return '';

    // transformacion de datos

    // Bandera
    // slice(1) -> andera
    return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
  }
}
