import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../shared/projeto.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class ProjetoFormComponent implements OnInit {

  public phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public hourMask = [/[0-9]/, /\d/, ':', /\d/, /\d/];

  constructor(private projetoService: ProjetoService) { }

  lista: any[] = this.projetoService.listaColaboradores();
  membros: any [] = new Array;
  panelOpenState: boolean;

  // tslint:disable:no-inferrable-types
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];


  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.membros);
    form.value.time = this.membros;
    form.value.cadastro = moment();
    this.projetoService.postProjeto(form);
    alert('Projeto cadastrado com sucesso');
  }

  adicionaMembro(value: string) {
    const membro =  {
      name: ''
    };
    membro.name = value;
    this.membros.push(membro);
    console.log(this.membros);
  }

  remove(membro: any): void {
    const index = this.membros.indexOf(membro);
    if (index >= 0) {
      this.membros.splice(index, 1);
    }
  }
}
