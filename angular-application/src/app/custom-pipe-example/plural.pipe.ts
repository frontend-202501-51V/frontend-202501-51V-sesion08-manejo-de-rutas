import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name:'plural'})
export class PluralPipe implements PipeTransform {

  // cantidad de tareas = 5

  transform(valor: number, singular: string, plural: string): string {

    return valor === 1 ? `${valor} ${singular}` : `${valor} ${plural}`;

  }
}
