import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CochesService } from './../services/coches/coches.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coche } from '../models/coche.models';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { NotifierService } from 'angular-notifier';
import { MailsService } from '../services/mails/mails.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  constructor(private active : ActivatedRoute, private cochesService: CochesService, private fb: FormBuilder,notifierService: NotifierService, private mailsService: MailsService) {
    this.sForm = this.fb.group({
      email:[null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      nombre:[null,[Validators.required,Validators.minLength(2)]],
      description:[null,[Validators.required,Validators.minLength(10)]],
      telefono:[null,[Validators.minLength(9)]]
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

  isSubmitted = false;

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
        this.coche.push(data)
        console.log(this.coche)
      },
      error => {
        console.log('Error', error)
      }
    )
  }

  contacto(){

    this.isSubmitted = true

    if(this.sForm.invalid){
      this.isSend = true
      this.isSubmitted = false
      return
    }

    let params = {
      nombre: this.sForm.controls.nombre.value,
      email: this.sForm.controls.email.value,
      telefono: this.sForm.controls.telefono.value,
      comentario: this.sForm.controls.description.value,
      titulo:this.coche[0].titulo,
      emailCoche:this.coche[0].usuario.email
    }

    this.mailsService.sendContacto(params).subscribe(
      (data) => {
        this.sForm.patchValue({
          email:'',
          nombre:'',
          telefono:'',
          description:''
        })

        this.isSend = false

        this.isSubmitted = false

        this.notifier.notify('success', 'Has enviado un correo de contacto');
      },
      error => {
        this.isSubmitted = false
        console.log('Error', error)
      }
    )


  }
}
