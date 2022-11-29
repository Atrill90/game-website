import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'DPxXtDCcjGmsh6t4wNAlvfEq6Olpp1Ry4fijsnTLkHxY8e4Uti',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '88d8f47591264a2a8753a3f4b4915d79',
      },
    });
    return next.handle(req).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => err);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
