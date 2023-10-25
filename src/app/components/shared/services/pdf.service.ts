import { Injectable } from '@angular/core';
import { PdfCours } from '../models/pdf-cours.model';
import { Observable, Subject} from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environement } from 'src/environement';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
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

  getPdf(): Observable <PdfCours[]> {
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this.client.get<PdfCours[]>(this.url + "pdfCourse", {headers : myHeader})
  }

  addPdf( title: string, content: string, courseId: number) {
    let myHeader: HttpHeaders = new HttpHeaders({"authorization" : "bearer " + localStorage.getItem("token")})
    this.client.post(this.url + "pdfCourse",{title: title, content: content, courseId:courseId},{headers: myHeader}).subscribe({
    next : () => {
      console.log("ça à marcher!");
    },
    error: (err) => {
      console.log(err);
    }
  })
}
}
