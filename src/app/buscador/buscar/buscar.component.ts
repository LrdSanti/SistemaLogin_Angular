import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  @Output() total = new EventEmitter<any>()
  resultado: any = ""

  constructor() { }

  obtenerResultado() {
    this.total.emit(this.resultado)
   }

}
