import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCar, faCarSide, faDollarSign, faEuroSign, faExchangeAlt, faGlobeEurope, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { globalAgent } from 'node:http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  car = faCar

  dolar = faDollarSign

  coche = faCarSide

  change = faExchangeAlt

  financiacion = faHandHoldingUsd

  euro = faEuroSign

  global = faGlobeEurope

  ojo = faEye


  navigateToSearch(filter : any){
    this.router.navigate(['/search'], { queryParams: { filter:filter}})
  }
}
