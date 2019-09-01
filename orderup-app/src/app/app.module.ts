import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService} from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
