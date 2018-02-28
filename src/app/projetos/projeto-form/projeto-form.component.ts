import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../shared/projeto.service';
import { FormControl } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {

  public phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  public hourMask = [/[0-9]/, /\d/, ':', /\d/, /\d/]
  
  constructor(private ProjetoService: ProjetoService) { }

  lista: any[] = this.ProjetoService.listaColaboradores();
  membros: any [] = new Array;
  panelOpenState: boolean = true;

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];


  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this.ProjetoService.postProjeto(form);
  }

  adicionaMembro(value: string) {
    let membro =  {
      name: ''
    }
    membro.name = value;
    this.membros.push(membro);
    console.log(this.membros);
  }

  remove(membro: any): void {
    let index = this.membros.indexOf(membro);
    if (index >= 0) {
      this.membros.splice(index, 1);
    }
  }

}
