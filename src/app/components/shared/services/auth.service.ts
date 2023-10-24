 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';

 import jwt_decode from 'jwt-decode';

 @Injectable({
   providedIn: 'root'
 })
 export class AuthService {

   private url : string = "https://localhost:7135/api/"
   constructor(
     private client : HttpClient
  ) { }

  getRole() : string {
       let token = localStorage.getItem("token") ?? ""
       let jwt : any = jwt_decode(token)

       return jwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
     }

  login(email :string, password : string) {
     this.client.post(this.url + "user/login", {email, password}, {responseType : 'text'}).subscribe({
       next : (token : string) => {
         localStorage.setItem("token", token)
       }
     })
   }

   getAll() : Observable<User[]> {
    let myHeader : HttpHeaders = new HttpHeaders().append("authorization", "bearer "+ localStorage.getItem("token"))
     return this.client.get<User[]>(this.url+ "user"/*, {headers : myHeader}*/)
   }
 }

 export interface User {
   id : number
   nickname : string
   email : string
   roleId : number
 }
