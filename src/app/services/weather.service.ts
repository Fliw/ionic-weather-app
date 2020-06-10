import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    url = 'https://api.openweathermap.org/data/2.5/';
    key = '4de4dd041e499ca8a4f6692097befdae';
    city = 'London';

    constructor(private http: HttpClient) {
    }

    getData() {
        return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
    }

    getForecast() {
        return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
    }
}
