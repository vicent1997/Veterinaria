import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GMapModule } from "primeng/gmap";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { HttpClientModule } from '@angular/common/http';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [AppComponent],
  imports: [
    GMapModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonToggleModule,
    HttpClientModule,
    BarRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
