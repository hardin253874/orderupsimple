import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { homeImage } from '../models/homeImage';
import { HomeService } from '../home/home.service';
import { CartService } from './cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
    image;
    images = [];
    imageId;
    constructor(
        private route: ActivatedRoute,
        private homeService: HomeService,
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
          this.imageId = params.get('imageId');

          this.getImage();


        });
    }

    getImage() {
      const homeImageObservable = this.homeService.getHomeImages();

      homeImageObservable.subscribe((homeImageData: homeImage[]) => {
        this.images = homeImageData;
        this.image = this.images.find(i => i.id.toString() === this.imageId);
      });


    }

  addToCart(image) {
    this.cartService.addToCart(image);
  }

}
