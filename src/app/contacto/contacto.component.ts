import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  sForm: FormGroup

  lat = 38.870296;
  lng = -1.102894;

  isSubmitted=false
  isSend = false;
  private readonly notifier: NotifierService;

  constructor(private fb: FormBuilder,notifierService: NotifierService) {
    this.sForm = this.fb.group({
      email:['',Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      nombre:['',Validators.required,Validators.minLength(2)],
      description:['',Validators.required,Validators.minLength(10)],
      telefono:['',Validators.minLength(9)]
    })

    this.notifier = notifierService;
   }

  ngOnInit() {
  }

  get f(): any{
    return this.sForm.controls
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
