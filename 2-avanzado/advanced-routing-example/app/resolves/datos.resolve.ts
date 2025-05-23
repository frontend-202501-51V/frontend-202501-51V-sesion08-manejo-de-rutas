import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class DatosResolve implements Resolve<string[]> {
  resolve(): Observable<string[]> {
    return of(['Ana', 'Luis', 'Carlos']);
  }
}
