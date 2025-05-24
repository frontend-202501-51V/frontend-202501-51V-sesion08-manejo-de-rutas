// ocultar parte de un texto (email, pass)

import { Pipe, PipeTransform } from "@angular/core";

// roy@gmail.com
// ***@gmail.com

@Pipe({name: 'ocultar'})
export class OcultarPipe implements PipeTransform {
  transform(valor: string, visible: number = 1): string{

    if (!valor) return '';

    // gato // 4 carcteres
    // visible = 1
    // 4 - 1
    // ***
    const oculto = '*'.repeat(valor.length - visible)
    return valor.slice(0, visible) + oculto;
  }
}
