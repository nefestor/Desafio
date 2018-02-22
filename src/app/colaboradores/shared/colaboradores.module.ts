import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { NumerosInputDirective } from './numeros-input.directive';
import { EmailInputDirective } from './email-input.directive';
import { LetrasInputDirective } from './letras-input.directive';

@NgModule({
  imports: [
    CommonModule,
    ColaboradoresRoutingModule
  ],
  declarations: [NumerosInputDirective, EmailInputDirective, LetrasInputDirective]
})
export class ColaboradoresModule { }
