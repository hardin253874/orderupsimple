import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder ,FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService} from './home/home.service';
import { ProductAlertsComponent} from './products/product-alerts.component';
import {ProductDetailsComponent} from './products/product-details.component';
import { CartService } from './products/cart.service';
import { CartComponent } from './products/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HomeService,
    CartService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
