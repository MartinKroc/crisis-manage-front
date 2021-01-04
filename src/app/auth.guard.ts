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
    const user = this.apiService.userValue;
    if (user) {
      if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
  }
}
