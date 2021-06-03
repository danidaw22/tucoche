import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FavoritosService } from './../../services/favoritos/favoritos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Coche } from 'src/app/models/coche.models';

@Component({
  selector: 'app-list-favoritos',
  templateUrl: './list-favoritos.component.html',
  styleUrls: ['./list-favoritos.component.scss']
})
export class ListFavoritosComponent implements OnInit {

  private readonly notifier: NotifierService;
  favoritos:any=[]
  faShow = faEye
  faDelete = faTrash
  favoritoTodelete: Coche | undefined
  @ViewChild('closebutton') closebutton:any;

  constructor(notifierService: NotifierService, private favoritosService : FavoritosService, private router:Router) {
    this.notifier = notifierService;
   }

  ngOnInit() {
    this.loadData()
  }


  loadData(){
    this.favoritosService.favoritos().subscribe(
      (data)=>{
        console.log(data)
        this.favoritos = data;
      },
      error => {
        console.log('Error', error)
      }
    )
  }

  navigateToCar(id:any){
    this.router.navigate(['/detail/'+id])
  }

  delete(coche:Coche){
    this.favoritoTodelete = coche
  }

  deleteFavorito(id:any){
    this.favoritosService.deleteFav(id).subscribe(
      (data) => {
        this.notifier.notify('success', 'Eliminado de Favoritos');
        this.closebutton.nativeElement.click();
        this.loadData()
      },
      error => {
        console.log('Error', error)
      }
    );
  }
}
