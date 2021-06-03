import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private httpClient: HttpClient) { }

  sendContacto(params:any):Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/emailContacto/`, params)
      .pipe(
        catchError(error => {
          return error;
        })
      )
  }
}
