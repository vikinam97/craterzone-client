import { Component, OnInit } from '@angular/core';
import { RegionService } from "../providers/region.service";
import { CityService } from "../providers/city.service"; 
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  addRegion: Boolean = false;
  newRegion: String = "";
  regionList: Region[] = [];
  newCity: City;
  cityMarkerList: any[] = [];
  constructor(private _regionService: RegionService,
    private _cityService:CityService) { }

  ngOnInit() {
    this.getRegionList();
    this.newCity = {
      _id: "",
      name: "",
      lat: 0,
      lng: 0,
      volume: "",
      region: ""
    }
  }

  getRegionList() {
    this._regionService.list()
      .subscribe(response => {
          this.regionList = response.data;
          // console.log(response);
          this.flattenCities();
      }, error => {
        console.log(error);
      });
  }

  flattenCities() {
    this.cityMarkerList = [];
    this.regionList.forEach(region => {
      region.cities.forEach(city => {
        this.cityMarkerList.push({
          lat: city.lat,
          lng: city.lng
        })
      });
    });
    console.log(this.cityMarkerList);
  }

  addCity(region: Region) {
    this.newCity.region = region._id
    console.log(this.newCity);
    this._cityService.create(this.newCity)
        .subscribe(response => {
          console.log(response);
        });
  }


  addTable() {
    console.log(this.newRegion);
    this._regionService.create(this.newRegion)
        .subscribe(response => {
          this.getRegionList();
          this.addRegion = false;
        }, error => {
          console.log(error);
        });
  }

}

class Region {
  _id: String;
  name: String;
  cities: City[];
}

class City {
  _id: String;
  name: String;
  lat: Number;
  lng: Number;
  region: String;
  volume: String;
}
