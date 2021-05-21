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
    this.router.events.subscribe( route => {
      if( route instanceof NavigationEnd){
        if(route.url.includes("login") || route.url.includes("register")  || route.url.includes('404')){
          this.hideMenu = true
        }
      }
    })
  }


}
