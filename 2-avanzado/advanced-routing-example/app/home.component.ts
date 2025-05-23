import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  template: `<h2>Bienvenido a Routing Avanzado</h2>
    <nav>
      <a routerLink="/admin">Admin</a>
      <a routerLink="/lazy">Lazy</a>
    </nav>`
})
export class HomeComponent {}
