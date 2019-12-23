import { Component, ViewChild } from "@angular/core";
declare var google;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  options: any;
  public images: any[];
  public descripcion: string;
  public horarios: string;
  public ubicacion: any;
  public titulo: any;
  public overlays: any;

  


  constructor() {
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
    this.selectClinica("catadau");
  }

  public selectClinica(clinica: string) {
    console.log(clinica);

    if (clinica === "catadau") {
      this.titulo = "Catadau";
      this.images = [
        "assets/images/Catadau/fachada.jpeg",
        "assets/images/perritos/perrito2.jpg",
        "assets/images/perritos/doctor-ahogando-perro.jpg"
      ];
      this.descripcion = `Esta clínica veterinaria está abierta desde el año 1998. 
      Más de 30 años de experiencia como veterinario.
      Colaborador de la asociación SOS Animalades.
      En nuestra clínica veterinaria disponemos de servicios de diagnóstico, consultas y medicina general, cirugía, análisis clínicos, vacunaciones y medicina preventiva.
      También disponemos de una sección de tienda especializada con un amplia gama de productos para el cuidado y la alimentación de los perros y gatos. 
      Se ofrece servicio de atención domiciliaria. Trabajamos con gran entusiasmo y dedicación para cuidar de tu mejor amigo.`;

      this.horarios = `Catadau Lunes - Viernes: 18:00 - 21:00
      Sabados 17:00 - 19:00`;
      this.options = null;
      this.options = {
        center: { lat: 39.2736241, lng: -0.5740221 },
        zoom: 17
      };
    }
    if (clinica === "llosa") {
      this.titulo = "Llosa";
      this.images = [
        "assets/images/perritos/doctor-ahogando-perro.jpg",
        "assets/images/perritos/doctor-ahogando-perro.jpg",
        "assets/images/perritos/doctor-ahogando-perro.jpg"
      ];
      this.descripcion = `Esta clínica veterinaria está abierta desde el año 1999. 
      Más de 30 años de experiencia como veterinario.
      Colaborador de la asociación SOS Animalades.
      En nuestra clínica veterinaria disponemos de servicios de diagnóstico, consultas y medicina general, cirugía, análisis clínicos, vacunaciones y medicina preventiva.
      También disponemos de una sección de tienda especializada con un amplia gama de productos para el cuidado y la alimentación de los perros y gatos. 
      Se ofrece servicio de atención domiciliaria. Trabajamos con gran entusiasmo y dedicación para cuidar de tu mejor amigo.`;
      this.horarios = `La Llosa lunes-Viernes: 10:30 -13:00
      17:00 -20:00
      Sábados: 11;00 - 13:00`;
      this.options = null;
      this.options = {
        center: { lat: 39.0163725, lng: -0.5353881 },
        zoom: 17
      };
    }
  }

  changePressedButton() {}
}
