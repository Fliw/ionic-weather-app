import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    public wh = {};
    public temp = 0;
    public city = '';

    constructor(private weatherService: WeatherService) {
        let fav = JSON.parse(localStorage.getItem('fav'));
        console.log(fav);
    }

    ngOnInit(): void {
        this.weatherService.getData().subscribe(result => {
            this.wh = result;
            // @ts-ignore
            this.temp = result.main.temp;
            // @ts-ignore
            this.city = result.name;
        });
    }
}
