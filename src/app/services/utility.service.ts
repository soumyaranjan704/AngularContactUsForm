import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private http:HttpClient, public router: Router) { }


  postDataToService(url: string, data: any): Observable<any> {
  
  
    var serviceData = this.http.post(url, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
    return serviceData;
}
}