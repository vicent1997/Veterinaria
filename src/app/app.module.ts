import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {GalleriaModule} from 'primeng/galleria';
import {GMapModule} from 'primeng/gmap';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    AboutUsComponent,
  ],
  imports: [
    GMapModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
