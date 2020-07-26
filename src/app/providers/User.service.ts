import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root',
})

export class UserService {
   

    constructor(private http: HttpClient) { }

    signup(data) {
        return <any>this.http.post(environment.apiUrl + "user?firstName=" + data.firstName 
        + "&lastName=" + data.lastName + 
        "&email=" + data.email, 
        data , { 
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        })
    }

    login(userName) {
        return <any>this.http.post(environment.apiUrl + "login?userName=" + userName, {} , 
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
    }
}