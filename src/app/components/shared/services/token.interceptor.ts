// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpHeaders
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     if(localStorage.getItem("token") != "") {
//       let clone = request.clone(
//         {headers : new HttpHeaders({"authorization": "bearer "+ localStorage.getItem("token")})
//       })

//       return next.handle(clone)
//     }

//     return next.handle(request);
//   }
// }
