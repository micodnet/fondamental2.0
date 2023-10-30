import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { User } from '../../shared/models/user.model'; 
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userlist! : User[]
  users: User[] = []
  
  nom! : string
  prenom! : string
  dateNaissance! : Date
  login! : string
  email! : string
  motDePasse! : string
  constructor(
    private _auth : AuthService,
    private _ar : ActivatedRoute,
    private _userService : UserService,
    private _router: Router 
    ){}

    addUser(){

        this._userService.addUser( this.nom, this.prenom, this.dateNaissance, this.login, this.email, this.motDePasse)
     }
    
//   ngOnInit() {
//     this.userlist = this._ar.snapshot.data["maliste"]
//     console.log(this._auth.getRole())
//      this._auth.getAll().subscribe({
//       next : (list : User[]) => this.userlist = list
//    })
//   }

// ngOnInit() {
//   this.listPerson = this.service.listPersonne
// }

// delete(index : number) {
//   this.service.deletePerson(index)
// }

// update(index : number) {
//   this.router.navigate(["update", index])
// }
}
