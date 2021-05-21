import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tucoche';

  hideMenu = false;

  constructor(private router:Router){

    this.router.events.subscribe( result => {
      if(result instanceof NavigationEnd){

        let str = result.url
        let panel = str.split('/')
        console.log(panel[1])
        if(panel[1] == 'login' || panel[1] == 'register' || panel[1] ==  '404'){
          this.hideMenu = true
        } else {
          this.hideMenu = false
        }

      }
    })
  }


}
