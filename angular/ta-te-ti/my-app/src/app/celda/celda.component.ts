import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './celda.component.html',
  styleUrl: './celda.component.css'
})


export class CeldaComponent {
  
  //lo defino como vacio para que tome el valor segun quien tiene el turno de jugar
    @Input() valor: string = ""; 
  }
