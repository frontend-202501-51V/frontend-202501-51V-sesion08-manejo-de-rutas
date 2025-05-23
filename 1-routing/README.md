# 1. Fundamentos de Routing en Angular

En esta sección aprenderás los **fundamentos del enrutamiento en Angular**, desde la configuración básica hasta la navegación y el manejo de parámetros.  
El objetivo es que comprendas cómo Angular permite crear aplicaciones de múltiples vistas, navegables y escalables, conectando rutas con componentes y gestionando la navegación de manera eficiente.

---

## 🎯 Objetivos

- Comprender qué es el enrutamiento en Angular y su importancia en aplicaciones SPA.
- Configurar rutas básicas y asociarlas a componentes.
- Navegar entre vistas usando enlaces y navegación programática.
- Gestionar parámetros de ruta y query params para vistas dinámicas.
- Aplicar buenas prácticas y reconocer errores comunes en la configuración de rutas.

---

## 📚 Teoría completa y progresiva

### 1. ¿Qué es el Routing en Angular?

El **routing** permite crear aplicaciones de una sola página (SPA) con múltiples vistas, gestionando la navegación entre componentes sin recargar la página.  
El enrutador de Angular asocia rutas (URLs) con componentes, mostrando el contenido adecuado según la URL actual.

---

### 2. Configuración básica de rutas

Para habilitar el enrutamiento, debes definir un arreglo de rutas y configurar el módulo de enrutamiento en tu aplicación.

**Ejemplo básico:**

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

**En el template principal:**

```html
<!-- app.component.html -->
<nav>
  <a routerLink="/">Inicio</a>
  <a routerLink="/about">Acerca de</a>
</nav>
<router-outlet></router-outlet>
```

---

### 3. Enlaces y navegación

Angular proporciona la directiva `routerLink` para crear enlaces entre rutas sin recargar la página.

```html
<a routerLink="/about">Ir a Acerca de</a>
```

**Navegación programática:**

Puedes navegar desde el código usando el servicio `Router`:

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

irAInicio() {
  this.router.navigate(['/']);
}
```

---

### 4. Parámetros de ruta

Permiten crear rutas dinámicas, útiles para detalles de elementos, perfiles, etc.

**Definición de ruta con parámetro:**

```typescript
{ path: 'usuario/:id', component: UsuarioDetalleComponent }
```

**Enlace con parámetro:**

```html
<a [routerLink]="['/usuario', usuario.id]">{{ usuario.nombre }}</a>
```

**Obtener el parámetro en el componente:**

```typescript
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
}
```

---

### 5. Query Params y fragmentos

Los **query params** permiten pasar información adicional en la URL.

**Navegación con query params:**

```typescript
this.router.navigate(['/busqueda'], { queryParams: { q: 'angular' } });
```

**Obtener query params:**

```typescript
this.route.snapshot.queryParamMap.get('q');
```

**Fragmentos:**

```html
<a [routerLink]="['/seccion']" fragment="parte2">Ir a parte 2</a>
```

---

### 6. Buenas prácticas y errores comunes

- Define rutas claras y semánticas.
- Usa `router-outlet` solo una vez por cada nivel de rutas.
- No dupliques rutas o componentes en la configuración.
- Usa `pathMatch: 'full'` para rutas vacías si es necesario.
- Evita lógica compleja en los templates de navegación.

---

## 📂 Archivos de apoyo

- [`app-routing.module.ts`](../app-routing.module.ts) – Configuración de rutas.
- [`home.component.ts`](../home/home.component.ts) – Componente de inicio.
- [`about.component.ts`](../about/about.component.ts) – Componente de ejemplo.

---

## ✅ Resumen

- El routing en Angular permite crear aplicaciones SPA con múltiples vistas.
- Configura rutas en el módulo de enrutamiento y usa `routerLink` para navegar.
- Los parámetros de ruta y query params permiten vistas dinámicas y filtrado.
- Usa el servicio `Router` para navegación programática.
- Mantén la configuración de rutas simple y clara.

---

## Preguntas Conceptuales: Fundamentos de Routing

1. ¿Qué es el enrutamiento en Angular y para qué se utiliza?
2. ¿Cómo asocias una ruta a un componente?
3. ¿Qué diferencia hay entre `routerLink` y el atributo `href`?
4. ¿Cómo accedes a un parámetro de ruta en un componente?
5. ¿Para qué sirven los query params?

---

## Hints para Routing

- Usa `routerLink` para enlaces internos y evita recargar la página.
- Define rutas dinámicas usando `:param` en la configuración.
- Obtén parámetros y query params usando `ActivatedRoute`.
- Usa `router-outlet` para mostrar el componente correspondiente a la ruta.
- Mantén la configuración de rutas modular y escalable.

---
