import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../shared/projeto.service';
import { FormControl } from '@angular/forms';

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

  ngOnInit() {
  }
  


  onSubmit(form) {
    console.log(form);
    this.ProjetoService.postProjeto(form);
  }

  adicionaMembro(value: string) {
    let membro =  {
      nome: ''
    }
    membro.nome = value;
    this.membros.push(membro);
    console.log(this.membros);
  }

}
