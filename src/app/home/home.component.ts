import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  images: any[];

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: "assets/images/Catadau/Catadau1.jpeg",
      alt: "Description for Image 1",
      title: "Title 1"
      
    });
    this.images.push({
      source: "assets/images/Catadau/Catadau2.jpeg",
      alt: "Description for Image 2",
      title: "Title 2",
      
    });
  }
}