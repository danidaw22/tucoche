import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  coches = [
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
    },
    {
      id:2,
      name:"coche1",
      marca:"nissan",
      modelo:"supra",
      year:"2005",
      price:"12.500",
      photo:"https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      localidad:"Madrid",
      km:200,
      tipo:"Gasolina"
    },
    {
      id:3,
      name:"coche1",
      marca:"nissan",
      modelo:"supra",
      year:"2005",
      price:"12.500",
      photo:"https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      localidad:"Madrid",
      km:200,
      tipo:"Gasolina"
    },
    {
      id:4,
      name:"coche1",
      marca:"nissan",
      modelo:"supra",
      year:"2005",
      price:"12.500",
      photo:"https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      localidad:"Madrid",
      km:200,
      tipo:"Gasolina"
    },
    {
      id:5,
      name:"coche1",
      marca:"nissan",
      modelo:"supra",
      year:"2005",
      price:"12.500",
      photo:"https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      localidad:"Madrid",
      km:200,
      tipo:"Gasolina"
    },
    {
      id:6,
      name:"coche1",
      marca:"nissan",
      modelo:"supra",
      year:"2005",
      price:"12.500",
      photo:"https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      localidad:"Madrid",
      km:200,
      tipo:"Gasolina"
    },
    {
      id:7,
      name:"coche1",
      marca:"nissan",
      modelo:"supra",
      year:"2005",
      price:"12.500",
      photo:"https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      localidad:"Madrid",
      km:200,
      tipo:"Gasolina"
    },
    {
      id:8,
      name:"coche1",
      marca:"nissan",
      modelo:"supra",
      year:"2005",
      price:"12.500",
      photo:"https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      localidad:"Madrid",
      km:200,
      tipo:"Gasolina"
    },
    {
      id:9,
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

  faFav = faHeart

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 120000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Precio Min:</b>' + value + '€';
        case LabelType.High:
          return '<b>Precio Max:</b>' + value + '€';
        default:
          return '$' + value;
      }
    }
  };

}
