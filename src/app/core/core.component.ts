import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaboradores/shared/colaborador.service';
import { ProjetoService } from '../projetos/shared/projeto.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  
  constructor(private ColaboradorService: ColaboradorService, private ProjetoService: ProjetoService) { }

  ngOnInit() {
  }

  lista = [];
  listaProjeto = [];

  listagem = this.ColaboradorService.getColaboradores((data) => {
    data.forEach(element => {
      let tst = {
        nome: element.name,
      };
      (this.lista).push(tst);
    })
  });
  
  listagemProjeto = this.ProjetoService.getProjetos((data) => {
    data.forEach(element => {
      let tst = {
        nome: element.name,
      };
      (this.listaProjeto).push(tst);
    })
  });
}
