import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlKey = '34345a4caf202c468ae8f11318c4d460&';
const urlUnits = 'f'; // use m for metrics

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
  getWeather(location){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=' + urlKey + '&units=' + urlUnits + '&query=' + location
    );
}
}