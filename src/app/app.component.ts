import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fondamental2.0';
  isDark : boolean = false
  darkColor : string = "white"
  
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
