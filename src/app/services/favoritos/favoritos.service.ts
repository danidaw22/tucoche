import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private httpClient: HttpClient) { }

  addFav(params:any):Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/favorito/`, params)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }

  deleteFav(id:any):Observable<any>{
    return this.httpClient.delete(`${environment.apiUrl}/favorito/${id}`)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }

  favoritos():Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/favoritos/`)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }

}
