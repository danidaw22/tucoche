import { Component, OnInit, ViewChild } from '@angular/core';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Coche } from 'src/app/models/coche.models';
import { CochesService } from 'src/app/services/coches/coches.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-detail-all',
  templateUrl: './detail-all.component.html',
  styleUrls: ['./detail-all.component.scss']
})
export class DetailAllComponent implements OnInit {

  coches:any=[]

  faDelete = faTrash

  faEdit = faEdit

  faShow = faEye

  cocheToDelete : Coche | undefined

  @ViewChild('closebutton') closebutton:any;

  private readonly notifier: NotifierService;


  constructor(private cochesService : CochesService, notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  ngOnInit() {
    this.loadData()
  }

  loadData(){
    this.cochesService.panel().subscribe(
      (data)=>{
        this.coches = data;
      },
      error => {
        console.log('Error', error)
      }
    )
  }

  delete(coche : Coche){
    this.cocheToDelete = coche
  }

  deleteCoche(id: any){
    this.cochesService.deleteCoche(id).subscribe(
      data => {
        this.notifier.notify('success', 'Anuncio eliminado correctamente');
        this.closebutton.nativeElement.click();
        this.loadData()
      },
      error =>{
        this.notifier.notify('error', 'No se ha podido eliminar el anuncio, intentelo mas tarde');
        console.log(error)
      }
    )
  }

}
