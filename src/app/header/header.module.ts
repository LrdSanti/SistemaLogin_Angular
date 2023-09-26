import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { BuscadorModule } from '../buscador/buscador.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    BuscadorModule
  ],exports:[HeaderComponent]
})
export class HeaderModule { }
