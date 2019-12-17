import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  options: any;
  images: any[];
  constructor() {}

  ngOnInit() {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

    this.images = [
      "assets/images/perritos/perrito1.jpg",
      "assets/images/perritos/perrito2.jpg",
      "assets/images/perritos/doctor-ahogando-perro.jpg"
    ];
  }

  changePressedButton() {
    
  }
}
