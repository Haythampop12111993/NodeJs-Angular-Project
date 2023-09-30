import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const tokens = localStorage.getItem('token');
    if (tokens) {
      request = request.clone({
        headers: request.headers.set('Authorization', `${tokens}`),
      });
    }
    return next.handle(request);
  }
}
