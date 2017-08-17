import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/guards/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private as: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.as.isAuthenticated().then(
      (authenticated: boolean) => {
        if(authenticated) {
          return true;
        } else { 
          this.router.navigate(['/']);
        }
      }
    )
  }
}