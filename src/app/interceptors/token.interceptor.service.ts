import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let auth = localStorage.getItem("session");
        // let auth = this.Session.getToken()
        // if(!auth) next.handle(request);
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': auth || ""
        };
        request = request.clone({
            setHeaders: headers
        });
        return next.handle(request);
    }
}