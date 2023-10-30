import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { environement } from 'src/environement';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url: string = environement.apiurl

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

  getStudent(): Observable <Student[]> {
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this.client.get<Student[]>(this.url + "student",{headers : myHeader})
  }

  addStudent( login: string, email: string, motDePasse: string) {
      let myHeader: HttpHeaders = new HttpHeaders({"authorization" : "bearer " + localStorage.getItem("token")})
      this.client.post(this.url + "student",{nickName: login, email: email, psswdHash:motDePasse},{headers: myHeader}).subscribe({
      next : () => {
        console.log("ça à marcher!");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  
  getStudentById(studentid: number): Observable<Student>{
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this.client.get<Student>(this.url + "student/getstudentbyid/" + studentid,{headers : myHeader})
  }

  
}
