import { Component, OnInit } from '@angular/core';
import { faCarAlt, faPersonBooth, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  faLogout = faPowerOff;

  faPerfil = faPersonBooth;

  faCar = faCarAlt;

  ngOnInit() {
  }

}
