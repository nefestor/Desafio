import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../shared/projeto.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-projetos-list',
  templateUrl: './projetos-list.component.html',
  styleUrls: ['./projetos-list.component.css']
})
export class ProjetosListComponent implements OnInit {

  subscriber: Subscription;
  
  constructor(private ProjetoService: ProjetoService) { }

  ngOnInit() {
    this.atualizaLista();
  }
  ngOnDestroy() {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  public lista = [];

  projetos = this.ProjetoService.getProjetos((data) => {
    this.lista = data;
  });

  atual() {
    return moment();
  }
  atualizaLista() {
    this.ProjetoService.getProjetos((data) => {
      this.lista = data;
    });
  }

  excluir(id) {
    this.subscriber = this.ProjetoService.excluirProjeto(id)
      .subscribe(() => {
        this.atualizaLista();
      });
  }
  
}
