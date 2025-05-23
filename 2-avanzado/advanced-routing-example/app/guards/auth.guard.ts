import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return confirm('¿Tienes permiso para entrar a Admin?');
  }
}
