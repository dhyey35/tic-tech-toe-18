import { Injectable, NgModule } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SharedModule } from '@shared';

declare var window: any;

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    }
}
