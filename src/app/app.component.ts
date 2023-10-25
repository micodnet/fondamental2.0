import { Component } from '@angular/core';
import { UserService } from './components/shared/services/user.service';

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

  constructor(private userService : UserService){}
  
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
