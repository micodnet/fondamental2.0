import { Injectable } from '@angular/core';
import { Formation } from '../models/formation.model';
import { Observable, Subject} from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environement } from 'src/environement';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private url : string = environement.apiurl

  get isConnected() : boolean {
    return localStorage.getItem('token') ? true : false
  }

  connectionSubject : Subject<boolean> = new Subject<boolean>()

  emitConnectionStatus() {
    this.connectionSubject.next(this.isConnected)
  }
  constructor(
    private client : HttpClient
  ) { }

  getFormation(): Observable <Formation[]> {
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this.client.get<Formation[]>(this.url + "formation", {headers : myHeader})
  }

  addFormation( name: string, description: string, dateDebut: Date, duree: Date, preRequis: string) {
    let myHeader: HttpHeaders = new HttpHeaders({"authorization" : "bearer " + localStorage.getItem("token")})
    this.client.post(this.url + "formation",{name: name, description: description, dateDebut:dateDebut, duree: duree, preRequis: preRequis},{headers: myHeader}).subscribe({
    next : () => {
      console.log("ça à marcher!");
    },
    error: (err) => {
      console.log(err);
    }
  })
}
}
