import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  create(cityData) {
    return <any>this.http.post(environment.apiUrl 
      +"city?name=" + cityData.name
      +"&lat=" + cityData.lat
      +"&lng=" + cityData.lng
      +"&region=" + cityData.region
      +"&volume=" + cityData.volume, cityData)
  }

}
