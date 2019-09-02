import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { homeImage } from '../models/homeImage';
import { HomeService } from '../home/home.service';
export class ProductDetailsComponent implements OnInit {
    image;
    images = [];
    constructor(
        private route: ActivatedRoute,
        private homeService: HomeService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const homeImageObservable = this.homeService.getHomeImages();

            homeImageObservable.subscribe((homeImageData: homeImage[]) => {
                this.images = homeImageData;
            });


            this.image = this.images[+params.get('imageI')];
        });
    }

}
