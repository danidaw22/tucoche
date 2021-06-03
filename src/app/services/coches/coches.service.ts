import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CochesService {

  constructor(private httpCLient: HttpClient, public auth: AuthService) {}

  coches(params:any):Observable<any>{

    let url = "listaCoches"

    if(this.auth.isAuthenticated()){
      url = "coches"
    }

    return this.httpCLient.get(`${environment.apiUrl}/${url}`, { params: params} )
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }

  getcoche(id:string):Observable<any>{
    return this.httpCLient.get(`${environment.apiUrl}/coche/${id}`)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }

  saveCoche(params:any):Observable<any>{
    return this.httpCLient.post(`${environment.apiUrl}/coche`, params)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }

  updateCoche(id:any, params:any):Observable<any>{
    return this.httpCLient.put(`${environment.apiUrl}/coche/${id}`, params)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }

  deleteCoche(id:any):Observable<any>{
    return this.httpCLient.delete(`${environment.apiUrl}/coche/${id}`)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }

  panel():Observable<any>{
    return this.httpCLient.get(`${environment.apiUrl}/panel`)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }
}
