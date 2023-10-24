 import { Observable, catchError, delay, of, tap } from 'rxjs';
 import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
 import { AuthService } from '../services/auth.service';
 import { inject, Injectable } from '@angular/core';
 import { User } from '../models/user.model';

 @Injectable({
   providedIn: 'root'
 })
 export class listResolver implements Resolve<User[]> {

   constructor(private _auth : AuthService) {

   }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
      return this._auth.getAll().pipe(delay(2000), tap(()=> console.log("coucou")), catchError((error) => of(error.message)))
    }

 }
