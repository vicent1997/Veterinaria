import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit {
  options: any;
  images: any[];
  constructor() {}

  ngOnInit() {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

    this.images = [
      {
        source: "assets/images/perritos/perrito1.jpg",
        alt: "Description for Image 1",
        title: "Title 1"
      },
      {
        source: "assets/images/perritos/perrito3.jpg",
        alt: "Description for Image 2",
        title: "Title 2"
      }
    ];
  }
}
