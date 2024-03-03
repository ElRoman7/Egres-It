import { Component } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  miVariable: string = 'Hola Mundo';
  nuevoValor: string = '';

  actualizarVariable() {
    this.miVariable = this.nuevoValor;
    this.nuevoValor = ''; // Limpiar el campo después de actualizar la variable
  }
}
