import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurdService {
constructor(private authService: AuthService,  private router: Router) {  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
return this.authService.isAuthenticated()
.then(
(authenticated: boolean) => {
if (authenticated) {
  this.router.navigate(['/movies'])
  return false;
  
} else {
  this.router.navigate(['/']);
 return true
}
}
);
}

}
