import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    public whList = Array();
    constructor(private weatherService: WeatherService, private route: Router) {
    }

    ngOnInit(): void {
        this.weatherService.getForecast().subscribe(result => {
            this.whList = result.list;
        });
    }
    detailpage(w:string):void{
        // console.log(w);
        let weather= {
            date: w.dt_txt,
            temp: w.main.temp,
            main: w.weather[0].main,
            desc: w.weather[0].description,
            icon: w.weather[0].icon
        }
        let extras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(weather)
            }
        };
        this.route.navigate(['/detail'], extras);
    }

}
