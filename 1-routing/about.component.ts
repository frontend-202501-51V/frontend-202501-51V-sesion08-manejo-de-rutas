import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>Acerca de</h1>
    <p>Esta es la página de información del ejemplo de routing.</p>

    <nav>
      <a routerLink="/" routerLinkActive="activo" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
      <a routerLink="/about" routerLinkActive="activo">Acerca de</a>
    </nav>

    <hr>

    <h2>¿Cómo usar este ejemplo?</h2>
    <ul>
      <li>Haz clic en los enlaces para navegar entre páginas sin recargar la aplicación.</li>
      <li>Observa cómo cambia la URL y el contenido mostrado.</li>
      <li>Prueba el enlace <code>href</code> para ver el comportamiento incorrecto.</li>
      <li>Modifica los enlaces y agrega nuevas rutas para practicar.</li>
    </ul>

    <hr>

    <h2>Buenas prácticas</h2>
    <ul>
      <li>Usa siempre <code>routerLink</code> para navegación interna.</li>
      <li>Resalta la ruta activa con <code>routerLinkActive</code>.</li>
      <li>Configura correctamente tus rutas en el módulo de routing.</li>
    </ul>

    <style>
      .activo {
        font-weight: bold;
        color: #1976d2;
      }
    </style>
  `
})
export class AboutComponent { }
