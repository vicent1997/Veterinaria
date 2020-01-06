import { Component, ViewEncapsulation } from "@angular/core";
import { HttpClient } from "@angular/common/http";
declare var google;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public mapCatadau: any;
  public mapLlosa: any;
  public images: any[];
  public descripcion: string;
  public horario: string;
  public horarioSabado: string;
  public titulo: any;
  public overlays: any;
  public reviews: any = [];

  constructor(private http: HttpClient) {
    this.mapCatadau = {
      center: { lat: 39.2736241, lng: -0.5740221 },
      zoom: 17
    };
    this.mapLlosa = {
      center: { lat: 39.0163725, lng: -0.5353881 },
      zoom: 17
    };
    this.overlays = [
      new google.maps.Marker({
        position: { lat: 39.2736241, lng: -0.5740221 },
        title: "Veterinaria Ramon Carbó"
      }),
      new google.maps.Marker({
        position: { lat: 39.0163725, lng: -0.5353881 },
        title: "Veterinaria Llosa"
      })
    ];
  }

  ngOnInit() {
    this.selectClinica("llosa");
    let googleAddress =
      "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJe-sT5lmqYQ0RQE4TlMzIlH4&key=AIzaSyCtQNvbzYlliUthKPvgaMu00BAQxbb1iI4";

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + googleAddress)
      .then(async response => JSON.parse(await response.text()))
      .then(response => this.handleResponse(response))
      .catch(() =>
        console.log(
          "Can’t access " + googleAddress + " response. Blocked by browser?"
        )
      );
  }

  private handleResponse(response) {
    let reviews = response.result.reviews;

    for (const review of reviews) {
      if (!review.text) {
        review.text = "wow!";
      }
      if (this.reviews.length < 4) {
        this.reviews.push(review);
      }
    }
  }

  public selectClinica(clinica: string) {
    console.log(clinica);

    if (clinica === "catadau") {
      this.titulo = "Catadau";
      this.images = [
        "assets/images/Catadau/fachada.jpeg",
        "assets/images/Catadau/instalaciones1.jpeg",
        "assets/images/Catadau/instalaciones2.jpeg"
      ];
      this.descripcion = `Esta clínica veterinaria está abierta desde el año 1998. 
      Colaborador de la asociación SOS Animalades.
      En nuestra clínica veterinaria disponemos de servicios de diagnóstico, consultas y medicina general, cirugía, análisis clínicos, vacunaciones y medicina preventiva.
      También disponemos de una sección de tienda especializada con un amplia gama de productos para el cuidado y la alimentación de los perros y gatos. 
      Se ofrece servicio de atención domiciliaria. Trabajamos con gran entusiasmo y dedicación para cuidar de tu mejor amigo.`;

      this.horario = "18:00 - 21:00";
      this.horarioSabado = "17:00 - 19:00";
    }
    if (clinica === "llosa") {
      this.titulo = "Llosa";
      this.images = [
        "assets/images/Llosa/fachada.jpeg",
        "assets/images/Llosa/instalaciones1.jpeg",
        "assets/images/Llosa/instalaciones2.jpeg"
      ];
      this.descripcion = `Esta clínica veterinaria está abierta desde el año 1999. 
      Colaborador de la asociación SOS Animalades.
      En nuestra clínica veterinaria disponemos de servicios de diagnóstico, consultas y medicina general, cirugía, análisis clínicos, vacunaciones y medicina preventiva.
      También disponemos de una sección de tienda especializada con un amplia gama de productos para el cuidado y la alimentación de los perros y gatos. 
      Se ofrece servicio de atención domiciliaria. Trabajamos con gran entusiasmo y dedicación para cuidar de tu mejor amigo.`;
      this.horario = `10:30 -13:00
      
      17:00 -20:00
      `;
      this.horarioSabado = "11;00 - 13:00";
    }
  }
}
