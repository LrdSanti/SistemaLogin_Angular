import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadorRoutingModule } from './buscador-routing.module';
import { BuscarComponent } from './buscar/buscar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuscarComponent
  ],
  imports: [
    CommonModule,
    BuscadorRoutingModule,
    FormsModule
  ], exports:[
    BuscarComponent
  ]
})
export class BuscadorModule { 


}
