import { Component, OnInit } from '@angular/core';
import { homeImage } from '../models/homeImage';
import { HomeService } from './home.service';
import { environment } from '../../environments/environment';
import { ProductAlertsComponent } from '../products/product-alerts.component';
import { ProductDetailsComponent } from '../products/product-details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  homeImages: homeImage[] = [];
  homeImageUrls: string[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    const homeImageObservable = this.homeService.getHomeImages();
    homeImageObservable.subscribe((homeImageData: homeImage[]) => {
      this.homeImages = homeImageData;
      this.homeImageUrls = this.homeImages.map(h => environment.hostUrl + h.url);
    });
  }

  onNotify(name: string) {
    window.alert('Notify me ' + name);
  }
}
