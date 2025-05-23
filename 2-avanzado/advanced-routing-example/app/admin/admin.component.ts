import { Component } from '@angular/core';
@Component({
  template: `<h2>Panel Admin</h2>
    <nav>
      <a routerLink="usuarios">Usuarios</a>
      <a routerLink="reportes">Reportes</a>
    </nav>
    <router-outlet></router-outlet>`
})
export class AdminComponent {}
