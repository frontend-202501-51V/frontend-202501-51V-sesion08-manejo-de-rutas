import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Página de Inicio</h1>
    <p>Bienvenido al ejemplo de routing en Angular.</p>

    <nav>
      <a routerLink="/" routerLinkActive="activo" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
      <a routerLink="/about" routerLinkActive="activo">Acerca de</a>
    </nav>

    <hr>

    <h2>Ejemplo: Navegación programática</h2>
    <button (click)="irAInicio()">Ir a Inicio</button>

    <hr>

    <h2>Ejemplo: Error común</h2>
    <a href="/about">Acerca de (NO recomendado, recarga la página)</a>
    <p><strong>Solución:</strong> Usa siempre <code>routerLink</code> para navegación interna.</p>

    <hr>

    <h2>Ejemplo: Navegación a otras páginas</h2>
    <a routerLink="/productos">Ver productos</a>
    <a routerLink="/carrito">Ir al carrito</a>

    <hr>

    <h2>Estilos de ruta activa</h2>
    <style>
      .activo {
        font-weight: bold;
        color: #1976d2;
      }
    </style>
  `
})
export class HomeComponent {
  constructor() {}

  irAInicio() {
    // Ejemplo de navegación programática
    // Aquí podrías usar Router si lo necesitas
  }
}
