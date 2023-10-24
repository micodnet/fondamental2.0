import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environement';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { UserLogModel } from '../models/user-log.model';
import jwtDecode  from  'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  login(email : string, pwd : string) {
    this.client.post(this.url + "auth/login",
                    {email : email, psswdHash : pwd},
                    {responseType : 'text'})
      .subscribe({
        next : (token : any) =>
        {
          let infoUser: any = jwtDecode(token)
          console.log(infoUser)
          let user : UserLogModel = {
            id: Number.parseInt(infoUser["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"]),
            email: infoUser["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            login: 'nickName',
            roleId: infoUser["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
            psswdHash: '',
          }

          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem("token", token)
          this.emitConnectionStatus()
        },
        error : (error) => {console.log(error.error)},
        complete : () => {
          console.log("erreur: non attribuer!")
          this.getUser()
        }
      })

    //this.client.get<User[]>(this.url + 'user').subscribe((data) => console.log(data))
  }

  logout() {
    localStorage.clear()
    this.emitConnectionStatus();
  }

  getUser(): Observable <User[]> {
    let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this.client.get<User[]>(this.url + "user", {headers : myHeader})
  }

  addUser( nom: string, prenom: string, dateNaissance: Date, login: string, email: string, motDePasse: string) {
    let myHeader: HttpHeaders = new HttpHeaders({"authorization" : "bearer " + localStorage.getItem("token")})
    this.client.post(this.url + "auth/register",{lastName: nom, firstName: prenom, birthDate: dateNaissance, nickName: login, email: email, psswdHash: motDePasse},{headers: myHeader}).subscribe({
    next : () => {
      console.log("ça à marcher!");
    },
    error: (err) => {
      console.log(err);
    }
  })
}

getUserByid(userId: number): Observable<User>{
  const url = `${this.url}/user/${userId}`;
  let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
  return this.client.get<User>(this.url + "user",{headers : myHeader})
}

}


