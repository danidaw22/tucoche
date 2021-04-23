import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }


  coche = [
    {
      id:1,
      name:"coche1",
      marca:"nissan",
      modelo:"supra",
      year:"2005",
      price:"12.500",
      photo:"https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      localidad:"Madrid",
      km:200,
      tipo:"Gasolina"
    }
  ]
  ngOnInit() {
  }

}
