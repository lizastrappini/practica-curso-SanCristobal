import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisualizarFormService {
  suscribir(datos: any) {
    console.log('Datos de suscripción:', datos);
  }
  constructor() { }
}
