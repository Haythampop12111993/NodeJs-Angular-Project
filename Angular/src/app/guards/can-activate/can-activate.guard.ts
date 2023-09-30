import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('token');
  if (!token) {
    const router = inject(Router);
    router.navigateByUrl('login');
  }
  return true;
};
