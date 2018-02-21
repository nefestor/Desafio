import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { NumerosInputDirective } from './numeros-input.directive';

@NgModule({
  imports: [
    CommonModule,
    ColaboradoresRoutingModule
  ],
  declarations: [NumerosInputDirective]
})
export class ColaboradoresModule { }
