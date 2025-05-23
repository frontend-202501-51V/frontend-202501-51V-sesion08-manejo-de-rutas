import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin/admin.component';
import { UsuariosComponent } from './admin/usuarios.component';
import { ReportesComponent } from './admin/reportes.component';
import { NotFoundComponent } from './not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { DatosResolve } from './resolves/datos.resolve';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirección
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard], // Guard
    children: [
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      { path: 'usuarios', component: UsuariosComponent, resolve: { datos: DatosResolve } }, // Resolve
      { path: 'reportes', component: ReportesComponent }
    ]
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) // Lazy loading
  },
  { path: '**', component: NotFoundComponent } // Ruta comodín
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
