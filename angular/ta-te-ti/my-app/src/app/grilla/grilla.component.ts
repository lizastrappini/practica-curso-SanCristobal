import { Component, OnInit } from '@angular/core';
import { CeldaComponent } from '../celda/celda.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grilla',
  standalone: true,
  imports: [CeldaComponent, CommonModule],
  templateUrl: './grilla.component.html',
  styleUrl: './grilla.component.css'
})

export class GrillaComponent  implements OnInit {

  //guardo las celdas ocupadas con sus valores
  celdas: string[] = [];
  mueveX: boolean = false;
  ganador!: string | null;


  //cuando carga la pag reinicia las variables
  ngOnInit() {
    this.nuevoJuego();
  }

  nuevoJuego() {
    //defino 9 celdas vacias
    this.celdas = ['','','','','','','','',''];
    this.ganador = '';
    this.mueveX = true; //para alternar entre X y O
  }

  mover(numeroCelda: number) {
    //cambia el valor null de la celda por la variable del jugador (X,O)
    //si en celdas[numeroCelda] ya hay un valor (!null) no hace nada porque ya hay un valor en esa celda
    if (!this.celdas[numeroCelda]) {

      if(this.mueveX){
        var jugador = 'X';
      } else var jugador = 'O';

      this.celdas[numeroCelda] = jugador;

      //cambia el turno
      this.mueveX = !this.mueveX;
    }
    
    if(this.calcularGanador()!=null){
      this.ganador = this.calcularGanador();
    }
    
  }

  //defino las posibles combinaciones de celdas para ganar (horizontal, vertical y diagonal)
  calcularGanador() {
    const jugadasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    //si los valores en esas celdas son iguales, hay ganador y devuelvo el valor de la celda para saber quien gano
    for (let i = 0; i < jugadasGanadoras.length; i++) {
      const [a, b, c] = jugadasGanadoras[i];
      if (
        this.celdas[a] &&
        this.celdas[a] === this.celdas[b] &&
        this.celdas[a] === this.celdas[c]
      ) {
        return this.celdas[a];
      }
    }
    return null;
  }
  



  
}
