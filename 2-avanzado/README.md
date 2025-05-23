# 2. Routing Avanzado en Angular

En este bloque dominarás el sistema de enrutamiento avanzado de Angular, aprendiendo a estructurar aplicaciones complejas y escalables. Aquí encontrarás teoría, ejemplos end-to-end, estructura de archivos, buenas prácticas, errores comunes y casos reales sobre rutas hijas, redirecciones, guards, resolves y lazy loading.

---

## 🎯 Objetivos de Aprendizaje

- Comprender y aplicar rutas hijas y anidadas para organizar la navegación.
- Implementar redirecciones y rutas comodín para controlar el flujo de la aplicación.
- Proteger rutas usando guards (`canActivate`, `canDeactivate`, `canLoad`, etc.).
- Precargar datos antes de mostrar una ruta usando resolves.
- Optimizar el rendimiento con lazy loading de módulos.
- Adoptar buenas prácticas para el mantenimiento y escalabilidad del routing avanzado.
- Diagnosticar y evitar errores comunes en la configuración de rutas.

---

## 1️⃣ Rutas hijas y anidadas

- Permiten definir rutas dentro de otras rutas, creando una estructura jerárquica y modular.
- Útiles para paneles de usuario, administración o cualquier área con subsecciones.

**Ejemplo básico:**

```typescript
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent }
    ]
  }
];
```

**En el template del padre:**

```html
<h2>Panel de administración</h2>
<nav>
  <a routerLink="usuarios">Usuarios</a>
  <a routerLink="reportes">Reportes</a>
</nav>
<router-outlet></router-outlet>
```

**Buenas prácticas:**

- Usa `<router-outlet>` en el componente padre.
- Prefiere rutas relativas en los enlaces dentro de rutas hijas.
- Usa redirecciones para rutas hijas por defecto.
- Coloca rutas comodín (`**`) al final de los arreglos de rutas hijas.

---

## 2️⃣ Redirecciones y rutas comodín

- **Redirección:** Envía automáticamente al usuario de una ruta a otra.
- **Ruta comodín (`**`):** Captura cualquier URL no definida previamente, ideal para páginas 404.

**Ejemplo:**

```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];
```

**En el componente de error:**

```typescript
@Component({
  template: `<h2>404 - Página no encontrada</h2>
    <a routerLink="/home">Volver al inicio</a>`
})
export class NotFoundComponent {}
```

**Buenas prácticas:**

- Usa `pathMatch: 'full'` para redirecciones exactas.
- Coloca la ruta comodín siempre al final.
- Personaliza la página de rutas no encontradas.

---

## 3️⃣ Guards: protección de rutas

- **Guards** son servicios que controlan si una ruta puede ser activada, cargada, desactivada o si se puede salir de ella.

**Tipos principales:**

- `CanActivate`: Permite o bloquea el acceso a una ruta.
- `CanDeactivate`: Previene salir de una ruta si hay cambios sin guardar.
- `CanLoad`: Previene la carga de módulos lazy-loaded.
- `CanActivateChild`: Protege rutas hijas.

**Ejemplo de `CanActivate`:**

```typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return confirm('¿Tienes permiso para entrar a Admin?');
  }
}
```

**En la ruta:**

```typescript
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
```

**Ejemplo de `CanDeactivate`:**

```typescript
export interface PuedeSalir { puedeSalir: () => boolean; }

@Injectable({ providedIn: 'root' })
export class ConfirmarSalidaGuard implements CanDeactivate<PuedeSalir> {
  canDeactivate(component: PuedeSalir): boolean {
    return component.puedeSalir ? component.puedeSalir() : true;
  }
}
```

**Buenas prácticas:**

- Mantén la lógica de los guards simple y delega la autenticación/autorización a servicios.
- Usa `CanDeactivate` para evitar pérdidas de datos en formularios.
- Coloca los guards en el nivel adecuado (ruta padre, hija o lazy-loaded).

---

## 4️⃣ Resolves: precarga de datos

- Permiten cargar datos necesarios para una ruta antes de que el componente se muestre.

**Ejemplo:**

```typescript
@Injectable({ providedIn: 'root' })
export class DatosResolve implements Resolve<string[]> {
  resolve(): Observable<string[]> {
    return of(['Ana', 'Luis', 'Carlos']);
  }
}
```

**En la ruta:**

```typescript
{ path: 'admin/usuarios', component: UsuariosComponent, resolve: { datos: DatosResolve } }
```

**En el componente:**

```typescript
export class UsuariosComponent {
  datos: string[] = [];
  constructor(private route: ActivatedRoute) {
    this.datos = this.route.snapshot.data['datos'];
  }
}
```

**Buenas prácticas:**

- Usa resolves para cargar datos esenciales antes de mostrar una ruta.
- Maneja posibles errores en los resolves para evitar rutas rotas.

---

## 5️⃣ Lazy Loading de módulos

- **Lazy Loading** permite cargar módulos solo cuando el usuario navega a una ruta específica.

**Ejemplo:**

```typescript
const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];
```

**Estructura de archivos:**

```plain
lazy/
  ├── lazy-routing.module.ts
  ├── lazy.module.ts
  └── lazy.component.ts
```

**lazy-routing.module.ts:**

```typescript
const routes: Routes = [
  { path: '', component: LazyComponent }
];
```

**Buenas prácticas:**

- Usa Lazy Loading para módulos grandes o áreas poco usadas al inicio.
- Usa guards (`canLoad`) para proteger módulos perezosos si es necesario.

---

## 🧠 Buenas Prácticas Generales

- Mantén la configuración de rutas modular y separada por dominios o features.
- Usa guards para proteger rutas sensibles y mejorar la seguridad.
- Implementa resolves para evitar pantallas vacías mientras se cargan datos.
- Utiliza lazy loading para módulos grandes o poco usados.
- Maneja rutas no encontradas con rutas comodín y componentes de error personalizados.
- Documenta la estructura de rutas para facilitar el mantenimiento.
- Prefiere rutas relativas en enlaces dentro de rutas hijas.
- Coloca rutas comodín (`**`) siempre al final del arreglo de rutas.
- Mantén la lógica de guards y resolves simple y delega la lógica de negocio a servicios.
- Prueba la experiencia de usuario y muestra mensajes de carga si el módulo tarda en cargar.

---

## ⚠️ Errores Comunes y Cómo Evitarlos

- Olvidar el `<router-outlet>` en el componente padre de rutas hijas.
- No usar `pathMatch: 'full'` en redirecciones de rutas vacías.
- Colocar la ruta comodín antes de otras rutas.
- No manejar errores en resolves.
- Abusar de guards para lógica de negocio compleja.
- No separar la configuración de rutas por módulos/features.
- No proteger módulos lazy-loaded con `canLoad` si contienen información sensible.
- No actualizar las redirecciones tras refactorizar rutas.

---

## 🌐 Recursos Adicionales

- [Documentación oficial de Angular Router](https://angular.io/guide/router)
- [Angular Routing & Navigation](https://angular.io/guide/router-tutorial)
- [StackBlitz - Angular Routing Playground](https://stackblitz.com/)
