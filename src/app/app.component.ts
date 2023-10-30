import { Component } from '@angular/core';
import { UserService } from './components/shared/services/user.service';
//import { AuthService } from './components/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Fondamental2.0';
  isDark : boolean = false
  darkColor : string = "white"
  
  isConnected! : boolean

  constructor(private userService : UserService,
             // private service: AuthService
    ){}
  
    // ngOnInit() {
    //   this.service.connectionSubject.subscribe((etat :boolean) => {
    //     this.isConnected = etat
    //   })
    //   this.service.connectionSubject.next(this.service.isConnected)
    // }

  logout(){
    this.userService.logout()
  }
  darkMode(){

    if(this.isDark){
      this.darkColor = "grey"
    }
    else{
      this.darkColor = "rgb(204, 192, 192)"
    }

    this.isDark = !this.isDark

  }
}
