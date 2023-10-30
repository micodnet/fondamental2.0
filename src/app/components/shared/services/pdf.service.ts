import { Injectable } from '@angular/core';
import { PdfCours } from '../models/pdf-cours.model';
import { Observable, Subject} from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environement } from 'src/environement';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private url : string = environement.apiurl

  //private url : string = "https://pokeapi.co/api/v2/pokemon"

  get isConnected() : boolean {
    return localStorage.getItem('token') ? true : false
  }

  connectionSubject : Subject<boolean> = new Subject<boolean>()

  emitConnectionStatus() {
    this.connectionSubject.next(this.isConnected)
  }
  listPdf: PdfCours[] = []

  constructor(
    private client : HttpClient
  ) { }

  getPdf(): Observable <PdfCours[]> {
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this.client.get<PdfCours[]>(this.url + "pdfCourse", {headers : myHeader})
  }

  getPdfById(pdfCourseId: number): Observable <PdfCours> {
    const url = `${this.url}/pdfCourse/getPdfCourseById/${pdfCourseId}`;
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this.client.get<PdfCours>(this.url + "pdfCourse", {headers : myHeader})
  }
  
  addPdf( newPdf: PdfCours) {
    let myHeader: HttpHeaders = new HttpHeaders({"authorization" : "bearer " + localStorage.getItem("token")})
    let index = this.listPdf.findIndex(u => u.title == newPdf.title)
    if(index < 0)
      this.listPdf.push(newPdf)
    this.client.post(this.url + "pdfCourse",{newPdf},{headers: myHeader}).subscribe({
        next : () => {
      console.log("ça à marcher!");
    },
    error: (err) => {
      console.log(err);
    }
  })
  }

  deletePerson(index: number){
    this.listPdf.splice(index,1)
  }
  updatePerson(index: number, pdf: PdfCours){
    this.listPdf[index]= pdf
  }
  getByIndex(index: number): PdfCours {
    return this.listPdf[index]
  }

  getList(url: string) : Observable<any> {
    return this.client.get<any>(url)
  }
}
