import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpCLient: HttpClient) { }

  login(email:any,password:any):Observable<any>{
    const params ={
      email: email,
      password: password
    }

    return this.httpCLient.post(`${environment.apiUrl}/login`, params)
      .pipe(
        catchError(error => {
          return error;
        })
      )

  }

  signup(email:any,password:any,nombre:any,apellidos:any,localidad:any,telefono:any,rol:any):Observable<any>{

    const params = {
      email: email,
      password: password,
      nombre: nombre,
      apellidos: apellidos,
      localidad: localidad,
      telefono: telefono,
      rol:rol
    }

    return this.httpCLient.post(`${environment.apiUrl}/registro`, params)
      .pipe(
        catchError(error => {
          return error;
        })
      )

  }

  perfil():Observable<any>{

    return this.httpCLient.get(`${environment.apiUrl}/perfil`)
      .pipe(
        catchError(error => {
          return error;
        })
      )

  }

  update(params:any):Observable<any>{

    return this.httpCLient.put(`${environment.apiUrl}/perfilUpdated`, params)
      .pipe(
        catchError(error => {
          return error;
        })
      )

  }
}
