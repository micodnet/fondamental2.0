import { Component } from '@angular/core';
import { UserService } from 'src/app/components/shared/services/user.service';
import { User } from 'src/app/components/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  users: User[] = []
  
  nom! : string
  prenom! : string
  dateNaissance! : Date
  login! : string
  email! : string
  motDePasse! : string

  constructor(private _userService: UserService){}

  addUser(){

    this._userService.addUser( this.nom, this.prenom, this.dateNaissance, this.login, this.email, this.motDePasse)
 }

}

