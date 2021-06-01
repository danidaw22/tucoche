import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCarAlt, faPersonBooth, faPlusCircle, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private activeRouter:ActivatedRoute) { }

  faLogout = faPowerOff;

  faPerfil = faPersonBooth;

  faCar = faCarAlt;

  faAnuncio = faPlusCircle

  ngOnInit() {

  }

  closeSession(){

    localStorage.removeItem("token");
    localStorage.removeItem("name");

    this.router.navigate(['/'])

  }





}
