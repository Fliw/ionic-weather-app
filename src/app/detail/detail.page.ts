import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    weather: any;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.weather = JSON.parse(params.special);
            }
        })
    }

    ngOnInit() {

    }

    save() {
        let fav = [];
        let temp = JSON.parse(localStorage.getItem('fav'));

        if (localStorage.length > 0){
            // tslint:disable-next-line:prefer-for-of
            for(let i=0; i<temp.length; i++){
                console.log(temp[i]);
                fav.push(temp[i]);
            }
        }

        fav.push(this.weather);
        localStorage.setItem('fav', JSON.stringify(fav));

    }

}
