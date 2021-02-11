import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
  getWeather(location){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=34345a4caf202c468ae8f11318c4d460&q=' + location
    );
}
}