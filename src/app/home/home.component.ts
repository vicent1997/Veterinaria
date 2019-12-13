import { Component, OnInit, ViewEncapsulation } from "@angular/core";
var google: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor() {}
  options: any;
  overlays: any[];
  images: any[];
  ngOnInit() {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

    this.images = [
      {
        source: "assets/images/Catadau/Catadau1.jpeg",
        alt: "Description for Image 1",
        title: "Title 1"
      },
      {
        source: "assets/images/Catadau/Catadau2.jpeg",
        alt: "Description for Image 2",
        title: "Title 2"
      }
    ];
  }
  zoomIn(map) {
    map.setZoom(map.getZoom() + 1);
  }
}
