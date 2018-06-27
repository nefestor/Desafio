import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { NumerosInputDirective } from './numeros-input.directive';
import { EmailInputDirective } from './email-input.directive';
import { LetrasInputDirective } from './letras-input.directive';
import { ColaboradorComponent } from '../colaborador/colaborador.component';
import { ColaboradoresListComponent } from '../colaboradores-list/colaboradores-list.component';
import { ColaboradoresComponent } from '../colaboradores.component';
import { ColaboradorFormComponent } from '../colaborador-form/colaborador-form.component';

@NgModule({
  imports: [
    CommonModule,
    ColaboradoresRoutingModule
  ],
  declarations: [NumerosInputDirective, EmailInputDirective, LetrasInputDirective]
})
export class ColaboradoresModule { }
