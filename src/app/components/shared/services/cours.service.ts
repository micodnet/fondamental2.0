import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environement } from 'src/environement';
import { Course } from '../models/cours.model';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

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

  getCourse(): Observable <Course[]> {
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this.client.get<Course[]>(this.url + "course", {headers : myHeader})
  }

  addCourse( titre: string, descriptioncours: string, formationId: number) {
    let myHeader: HttpHeaders = new HttpHeaders({"authorization" : "bearer " + localStorage.getItem("token")})
    this.client.post(this.url + "course",{titre: titre, description: descriptioncours, formationId: formationId},{headers: myHeader}).subscribe({
    next : () => {
      console.log("ça à marcher!");
    },
    error: (err) => {
      console.log(err);
    }
  })
}
}
