import { Component, OnInit } from '@angular/core';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-all',
  templateUrl: './detail-all.component.html',
  styleUrls: ['./detail-all.component.scss']
})
export class DetailAllComponent implements OnInit {

  coches = [
    {
      id:1,
      titulo:"coche1",
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
      titulo:"coche1",
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
      titulo:"coche1",
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
    }
  ]

  faDelete = faTrash

  faEdit = faEdit

  faShow = faEye


  constructor() { }

  ngOnInit() {
  }

}
