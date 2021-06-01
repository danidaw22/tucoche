import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../services/usuarios/usuarios.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sForm: FormGroup

  constructor(private router: Router,private fb: FormBuilder, private userService:UsuariosService) {
    this.sForm = this.fb.group({
      nombre:['',Validators.required, Validators.minLength(2)],
      apellidos:['',Validators.required, Validators.minLength(2)],
      localidad:['', Validators.minLength(2)],
      telefono:['',Validators.minLength(9)],
      email:['',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      password:['',Validators.required, Validators.minLength(9)]
    })
  }

  ngOnInit() {
  }

  get f(): any{
    return this.sForm.controls
  }

  saveUsuario(){
    if(this.sForm.invalid){
      console.log("error, el formulario esta mal")
      return
    }

    const email=this.sForm.get('email')?.value;
    const password=this.sForm.get('password')?.value;
    const nombre=this.sForm.get('nombre')?.value;
    const apellidos=this.sForm.get('apellidos')?.value;
    const localidad=this.sForm.get('localidad')?.value;
    const telefono=this.sForm.get('telefono')?.value;
    const rol="user";



    this.userService.signup(email,password,nombre,apellidos,localidad,telefono,rol).subscribe(
      (data) => {
        console.log(data)
        this.router.navigate(['/login'])
      },
      error =>{
        console.log('Error', error)
      }
    )

    console.log("He pulsado guardar", this.sForm)
  }

}
