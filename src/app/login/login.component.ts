import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../services/usuarios/usuarios.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  sForm: FormGroup

  private readonly notifier: NotifierService;

  constructor(private router: Router, private fb: FormBuilder, private userService:UsuariosService, notifierService: NotifierService) {
    this.sForm = this.fb.group({
      email:['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      password:['',]
    })

    this.notifier = notifierService;
  }


  ngOnInit() {
  }

  get f(): any{
    return this.sForm.controls
  }

  register(){
    this.router.navigate(['/register'])
  }

  login(){
    if(this.sForm.invalid){
      console.log("error, el formulario esta mal")
      return
    }


    const email = this.sForm.get('email')?.value;
    const password = this.sForm.get('password')?.value;

    //console.log(email, password)

    this.userService.login(email, password).subscribe(
      (data) => {
        console.log(data)
        localStorage.setItem('token',data.access_token)
        localStorage.setItem('name', data.email)


        this.router.navigate(['/panel'])
      },
      error =>{
        console.log('Error', error)
        this.notifier.notify('error', 'Usuario o contraseña incorrecta');
      }
    )

    console.log("He pulsado guardar", this.sForm)
  }

}
