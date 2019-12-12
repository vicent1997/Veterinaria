import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor() {}

  images: any[];

  ngOnInit() {
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
}
