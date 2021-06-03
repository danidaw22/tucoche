import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CochesService } from './../services/coches/coches.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coche } from '../models/coche.models';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  constructor(private active : ActivatedRoute, private cochesService: CochesService, private fb: FormBuilder,notifierService: NotifierService) {
    this.sForm = this.fb.group({
      email:['',Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      nombre:['',Validators.required,Validators.minLength(2)],
      description:['',Validators.required,Validators.minLength(10)],
      telefono:['',Validators.minLength(9)]
    })

    this.notifier = notifierService;
   }

  coche:any= []

  faContacto = faPhoneAlt

  id=""

  sForm: FormGroup

  isSend = false;

  private readonly notifier: NotifierService;

  galeria = false;

  ngOnInit() {

    this.active.params.subscribe( params => {
      if(params.id){
        this.id=params.id
        this.loadData(this.id)
      }
    })
  }

  get f(): any{
    return this.sForm.controls
  }


  loadData(id:string){
    this.cochesService.getcoche(id).subscribe(
      (data) => {
        console.log(data)
        this.coche.push(data)
      },
      error => {
        console.log('Error', error)
      }
    )
  }

  contacto(){

    if(this.sForm.invalid){
      this.isSend = true
      return
    }

    // Tendriamos que enviar los datos al email

    this.sForm.patchValue({
      email:'',
      nombre:'',
      telefono:'',
      description:''
    })

    this.isSend = false

    this.notifier.notify('success', 'Has enviado un correo de contacto');


  }
}
