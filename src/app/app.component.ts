import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: any;
  public images: any[];
  public descripcion: string;
  public horarios: string;
  public ubicacion: any;

  constructor() {}

  ngOnInit() {
    this.selectClinica('catadau')
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };
    this.images = [
      'assets/images/perritos/perrito1.jpg',
      'assets/images/perritos/perrito2.jpg',
      'assets/images/perritos/doctor-ahogando-perro.jpg'
    ];
  }

  public selectClinica(clinica: string) {
    console.log(clinica);

    if (clinica === 'catadau') {
      this.descripcion = 'Catadau';
      this.horarios = `Catadau Lunes - Viernes: 18:00 - 21:00
      Sabados 17:00 - 19:00`;
    }
    if (clinica === 'llosa') {
      this.descripcion = 'Llosa';
      this.horarios = `La Llosa lunes-Viernes: 10:30 -13:00
      17:00 -20:00
      Sábados: 11;00 - 13:00`;
    }
  }

  changePressedButton() {}
}
