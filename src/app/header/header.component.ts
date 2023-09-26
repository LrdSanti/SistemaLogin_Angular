import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  resultado: any = ''
  
  setearResultadoEmitido(resultadoEmitido: any) { 

    this.resultado = resultadoEmitido;
    console.log(this.resultado)
  }
}
