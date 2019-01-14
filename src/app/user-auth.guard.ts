import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserAuthGuard implements CanActivate {

  constructor(private userAuthService: UserAuthService,
              private router: Router) {}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log("isLoggedIn" + this.userAuthService.isLoggedIn);
    if (this.userAuthService.isLoggedIn) { return true };

    this.userAuthService.redirectUrl = url;
    this.router.navigate(['register-login']);
    return false;
  }
}
