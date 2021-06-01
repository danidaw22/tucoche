import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Usuario } from 'src/app/models/usuario.models';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  sForm: FormGroup

  usuario : Usuario | undefined

  private readonly notifier: NotifierService;

  constructor(private fb: FormBuilder, private userService: UsuariosService, notifierService: NotifierService) {
    this.sForm = this.fb.group({
      nombre:[''],
      apellidos:[''],
      email:[''],
      localidad:[''],
      telefono:['']
    })

    this.notifier = notifierService;
  }

  ngOnInit() {
    this.getPerfil()
  }

  get f(): any{
    return this.sForm.controls
  }

  getPerfil(){
    console.log('entra')
      this.userService.perfil().subscribe(
        (data: Usuario) => {
          this.usuario = data;
          console.log(this.usuario,data, this.usuario.nombre)
          this.sForm.patchValue({
            nombre:this.usuario.nombre,
            apellidos:this.usuario.apellidos,
            email:this.usuario.email,
            telefono:this.usuario.telefono,
            localidad:this.usuario.localidad
          })
        },
        error => {
          console.log('Error', error)
        }
      )
  }

  updatePerfil(){
    let usuarioData = {
      nombre:this.sForm.controls.nombre.value,
      apellidos:this.sForm.controls.apellidos.value,
      email:this.sForm.controls.email.value,
      telefono:this.sForm.controls.telefono.value,
      localidad:this.sForm.controls.localidad.value,
      password:this.usuario?.password,
      rol:this.usuario?.rol
    }

    this.userService.update(usuarioData).subscribe(
      data => {
        console.log('Persona modificada')
        this.notifier.show({
          type: 'success',
          message: 'Perfil Actualizado',
        });
      },
      error => {
        console.log(error)
      }
    )

  }
}
