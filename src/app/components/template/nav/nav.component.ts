 import { Component } from '@angular/core';
// import { AuthService } from '../../shared/services/auth.service';

 @Component({
   selector: 'app-nav',
   templateUrl: './nav.component.html',
   styleUrls: ['./nav.component.scss']
 })
 export class NavComponent {

//   isConnected! : boolean

//   constructor(private _authService : AuthService) {}
  
//   ngOnInit() {
//     this._authService.connectionSubject.subscribe((etat :boolean) => {
//       this.isConnected = etat
//     })
//     this._authService.connectionSubject.next(this._authService.isConnected)
//   }
}
