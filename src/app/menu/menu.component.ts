import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.estadoMenu()

    this.router.events.subscribe(eventos => {
      if(eventos instanceof NavigationEnd){
        this.estadoMenu()
      }
    })
  }
  logeado = false
  facebook = faFacebook
  twitter = faTwitter
  instagram = faInstagram

  estadoMenu(){
    if(localStorage.getItem('token') != null){
      this.logeado=true
    }else{
      this.logeado=false
    }
  }
}
