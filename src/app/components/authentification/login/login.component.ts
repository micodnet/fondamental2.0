import { Component } from '@angular/core';
import { UserService } from 'src/app/components/shared/services/user.service';
//import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isConnected! : boolean

  email! : string
  pwd! : string
  constructor(private userService : UserService
              /*private _authService: AuthService*/){}
  ngOnInit(){
    
  }
  login() {
    this.userService.login(this.email,this.pwd)
  }

  logout(){
    this.userService.logout()
  }
}
