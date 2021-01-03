import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ApiServiceService} from './shared/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private apiService: ApiServiceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const role = localStorage.getItem('role');
    if (
      !this.apiService.loggedIn() ||
      role !== expectedRole
    ) {
      if (role === 'ROLE_EMPLOYEE') {
        return true;
      }
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
