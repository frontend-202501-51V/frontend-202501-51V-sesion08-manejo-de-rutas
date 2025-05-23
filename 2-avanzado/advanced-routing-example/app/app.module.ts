import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// Admin
import { AdminComponent } from './admin/admin.component';
import { UsuariosComponent } from './admin/usuarios.component';
import { ReportesComponent } from './admin/reportes.component';

// Guards y Resolves (solo para asegurar el registro en providers si es necesario)
import { AuthGuard } from './guards/auth.guard';
import { DatosResolve } from './resolves/datos.resolve';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    AdminComponent,
    UsuariosComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    DatosResolve
  ],
  bootstrap: [HomeComponent]
})
export class AppModule {}
