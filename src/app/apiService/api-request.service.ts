import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SalleSondages } from './../classesApi/salle-sondages';
import { NewSondage } from './../classesApi/new-sondage';
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

  apiSondagesDelete(userName: string, id: number){
      this.http.delete('http://localhost:8081/sondages/'+id+'?userid='+userName).subscribe(data => {
        console.log(data);
      });
    }

  voterPost(userName: string, idSondage: number, choix: string) {
    this.http.post('http://localhost:8081/sondages/'+ idSondage + '/vote?userid=' + userName+ '&choixReponse='+choix, null).subscribe(data => {
      console.log(data);
    });
  }

  apiHasVoted(userName: string, id: number){
      return this.http.get('http://localhost:8081/sondages/'+id+'/hasvoted?userid='+userName).
        pipe(
          map((data: SondagePublic) => {
          return data;
        }), catchError( error => {
          return throwError( 'Something went wrong!' );
        })
      )
    }

  apiNewSondage(userName: string, newSondage: NewSondage){
        this.http.post('http://localhost:8081/sondages?userid='+userName, newSondage).subscribe(data => {
          console.log(data);
        });
      }


}
