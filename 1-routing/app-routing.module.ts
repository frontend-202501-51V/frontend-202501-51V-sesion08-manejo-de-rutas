import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Puedes agregar más rutas aquí para otros ejemplos prácticos
  // { path: 'productos', component: ProductosComponent },
  // { path: 'carrito', component: CarritoComponent },
  // { path: 'usuario/:id', component: UsuarioDetalleComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
