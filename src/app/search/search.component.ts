import { FavoritosService } from './../services/favoritos/favoritos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppPage } from './../../../e2e/src/app.po';
import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { CochesService } from '../../app/services/coches/coches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coche } from '../models/coche.models';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cochesAll: Array<any> = []
  filter:any=""
  marca:any=""
  modelo:any=""
  precioInicial:any=""
  precioFinal:any=""
  annoInicial:any=""
  annoFinal:any=""
  location:any=""
  combustible:any=""
  color:any=""
  kmInicial:any=""
  kmFinal:any=""
  npuertas:any=""
  cambio:any=""
  limit=10
  page=1
  nextPage=2
  pagingCounter=1
  totalPages=1
  p:number = this.page;
  sForm: FormGroup
  faFav = faHeart
  private readonly notifier: NotifierService;


  constructor(private cocheService: CochesService, private activateRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private favoritoService: FavoritosService,notifierService: NotifierService) {
    this.sForm = this.fb.group({
      filter:[''],
      marca:[''],
      modelo:[''],
      location:[''],
      annoInicial:[''],
      annoFinal:[''],
      kmInicial:[''],
      kmFinal:[''],
      combustible:[''],
      npuertas:[''],
      nplazas:[''],
      cambio:[''],
      color:[],
    })

    this.notifier = notifierService;
   }

  ngOnInit() {

    this.activateRoute.queryParams.subscribe( params => {

      this.filter = params.filter || ""
      this.marca = params.marca || ""
      this.modelo = params.modelo || ""
      this.precioInicial = params.precioInicial || ""
      this.precioFinal = params.precioFinal || ""
      this.annoInicial = params.annoInicial || ""
      this.annoFinal = params.annoFinal || ""
      this.location = params.location || ""
      this.combustible = params.combustible || ""
      this.color = params.color || ""
      this.kmInicial = params.kmInicial || ""
      this.kmFinal = params.kmFinal || ""
      this.npuertas = params.npuertas || ""
      this.cambio = params.cambio || ""

      this.sForm.patchValue({
        filter:this.filter,
        marca:this.marca,
        modelo:this.modelo,
        location:this.location,
        annoInicial:this.annoInicial,
        annoFinal:this.annoFinal,
        kmInicial:this.kmInicial,
        kmFinal:this.kmFinal,
        combustible:this.combustible,
        color:this.color,
        npuertas:this.npuertas,
        cambio:this.cambio
      })

      this.loadData(this.filter,this.marca,this.modelo,this.precioInicial,this.precioFinal,this.annoInicial,this.annoFinal,this.location,this.combustible,this.color,this.kmInicial,this.kmFinal,this.npuertas, this.cambio,this.p)
    })

  }

  get f(): any{
    return this.sForm.controls
  }


  minValue: number = 0;
  maxValue: number = 120000;
  options: Options = {
    floor: 0,
    ceil: 120000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min:</b>' + value + '€';
        case LabelType.High:
          return '<b>Max:</b>' + value + '€';
        default:
          return '';
      }
    }
  };


  loadData(filter:any,marca:any,modelo:any,precioInicial:any,precioFinal:any,annoInicial:any,annoFinal:any,location:any,combustible:any,color:any,kmInicial:any,kmFinal:any,npuertas:any,cambio:any,p:any){

    const params = {
      filter: filter,
      marca: marca,
      modelo: modelo,
      precioInicial: precioInicial,
      precioFinal: precioFinal,
      annoInicial: annoInicial,
      annoFinal:annoFinal,
      location:location,
      combustible:combustible,
      color:color,
      kmInicial:kmInicial,
      kmFinal:kmFinal,
      npuertas:npuertas,
      cambio:cambio,
      p:p
    }

    this.cocheService.coches(params).subscribe(
      (data) => {
        this.cochesAll = data.docs;
        this.limit = data.limit
        this.nextPage = data.nextPage
        this.page = data.page
        this.pagingCounter = data.pagingCounter
        this.totalPages = data.totalPages
      },
      error => {
        console.log('Error', error)
      }
    );
  }

  nextpage(pagina:any){
    this.p=pagina
    this.loadData(this.filter,this.marca,this.modelo,this.precioInicial,this.precioFinal,this.annoInicial,this.annoFinal,this.location,this.combustible,this.color,this.kmInicial,this.kmFinal,this.npuertas, this.cambio,this.p)
  }


  search(){

    if(this.sForm.invalid){
      console.log("error, el formulario esta mal")
      return
    }
    let params:any= {}

    if(this.sForm.controls.filter.value.length > 0){
        params.filter = this.sForm.controls['filter'].value
    }
    if(this.sForm.controls['marca'].value.length > 0){
      params.marca = this.sForm.controls['marca'].value
    }
    if(this.sForm.controls['modelo'].value.length > 0){
      params.modelo = this.sForm.controls['modelo'].value
    }
    if(this.sForm.controls['location'].value.length > 0){
      params.location = this.sForm.controls['location'].value
    }
    if(this.sForm.controls['kmInicial'].value.length > 0){
      params.kmInicial = this.sForm.controls['kmInicial'].value
    }
    if(this.sForm.controls['kmFinal'].value.length > 0){
      params.kmFinal = this.sForm.controls['kmFinal'].value
    }
    if(this.sForm.controls['annoInicial'].value.length > 0){
      params.annoInicial = this.sForm.controls['annoInicial'].value
    }
    if(this.sForm.controls['annoFinal'].value.length > 0){
      params.annoFinal = this.sForm.controls['annoFinal'].value
    }
    if(this.sForm.controls['combustible'].value.length > 0){
      params.combustible = this.sForm.controls['combustible'].value
    }
    if(this.sForm.controls['color'].value.length > 0){
      params.color = this.sForm.controls['color'].value
    }
    if(this.sForm.controls['npuertas'].value.length > 0){
      params.npuertas = this.sForm.controls['npuertas'].value
    }
    if(this.sForm.controls['cambio'].value.length > 0){
      params.cambio = this.sForm.controls['cambio'].value
    }

    params.precioInicial = this.minValue
    params.precioFinal = this.maxValue




    this.router.navigate(['search'], { queryParams: params });

  }

  addFav(id:any){

    if(localStorage.getItem('token')){
      let params = {
        coche_id : id
      }
      this.favoritoService.addFav(params).subscribe(
        (data) => {
          this.notifier.notify('success', 'Coche añadido a favoritos');
          for(let coche of this.cochesAll){
            if(coche._id == id){
              coche.favorito = true
            }
          }

        },
        error => {
          console.log('Error', error)
        }
      );
    }else{
      this.notifier.notify('error', 'Necesitas logearte para añadir a favoritos');
    }


  }

  deleteFav(id:any){

    if(localStorage.getItem('token')){
      this.favoritoService.deleteFav(id).subscribe(
        (data) => {
          this.notifier.notify('success', 'Coche eliminado de favoritos');
          for(let coche of this.cochesAll){
            if(coche._id == id){
              coche.favorito = false
            }
          }
        },
        error => {
          console.log('Error', error)
        }
      );
    }else{
      this.notifier.notify('error', 'Necesitas logearte para eliminar de favoritos');
    }



  }

  navigateToCar(id:any){
    this.router.navigate(['/detail/'+id])
  }

}
