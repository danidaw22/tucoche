import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  constructor(private fb: FormBuilder) {
    this.sForm = this.fb.group({
      email:['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      nombre:[],
      description:[],
      telefono:[]
    })
   }

  ngOnInit() {
  }

  get f(): any{
    return this.sForm.controls
  }

  contacto(){

  }

}
