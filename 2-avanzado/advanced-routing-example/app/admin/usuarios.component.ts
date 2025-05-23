import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  template: `<h3>Usuarios</h3>
    <ul>
      <li *ngFor="let u of datos">{{ u }}</li>
    </ul>`
})
export class UsuariosComponent {
  datos: string[] = [];
  constructor(private route: ActivatedRoute) {
    this.datos = this.route.snapshot.data['datos'];
  }
}
