import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  create(name) {
    return <any>this.http.post(environment.apiUrl + "region?name=" + name, {
      name
    }, 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }

  list() {
    return <any>this.http.get(environment.apiUrl + "regionCity",
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }

}
