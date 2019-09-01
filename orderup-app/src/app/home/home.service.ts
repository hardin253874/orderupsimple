import { Injectable } from '@angular/core';
import { homeImage } from '../models/homeImage';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  homeImages: homeImage[] = [{
    id: 1,
    name: 'image 1',
    url: '/assets/images/homeImages/image1.png'
  },
    {
      id: 2,
      name: 'image 2',
      url: '/assets/images/homeImages/image2.png'
    },
    {
      id: 3,
      name: 'image 3',
      url: '/assets/images/homeImages/image3.png'
    }];

  constructor() { }

  public getHomeImages(): any {
    const homeImageObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.homeImages);
      });
    });
    return homeImageObservable;
  }
}
