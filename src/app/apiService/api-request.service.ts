import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SalleSondages } from './../classesApi/salle-sondages';
import { SondagePublic } from './../classesApi/sondage-public';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }

  apiSallesSondagetest(userName: string){
    return userName;
  }

  apiSallesSondage(userName: string){
      return this.http.get('http://localhost:8081/salles/my?userid='+userName).
        pipe(
          map((data: SalleSondages[]) => {
          return data;
        }), catchError( error => {
          return throwError( 'Something went wrong!' );
        })
      )
    }

  apiSondagesPublic(){
    return this.http.get('http://localhost:8081/sondages/public').
      pipe(
        map((data: SondagePublic[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }

  apiSondagesSalle(userName: string, id: number){
    return this.http.get('http://localhost:8081/salles/'+id+'?userid='+userName).
      pipe(
        map((data: SalleSondages[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }

  apiSondagesVote(userName: string, id: number){
    return this.http.get('http://localhost:8081/sondages/'+id+'?userid='+userName).
      pipe(
        map((data: SondagePublic) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }


}
