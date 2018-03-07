import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjetoService } from '../shared/projeto.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-projetos-list',
  templateUrl: './projetos-list.component.html',
  styleUrls: ['./projetos-list.component.css']
})
export class ProjetosListComponent implements OnInit, OnDestroy {

  subscriber: Subscription;
  public lista = [];

  constructor(private projetoService: ProjetoService) { }

  ngOnInit() {
    this.atualizaLista();
  }

  ngOnDestroy() {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  atual() {
    return moment();
  }

  atualizaLista() {
    this.projetoService.getProjetos((data) => {
      this.lista = data;
    });
  }

  localiza(nome: string) {
    let copiaLista: any[] = new Array;
    this.projetoService.getProjetos((data => {
      copiaLista = data;
      this.lista = copiaLista.filter(projeto => projeto.name.toLowerCase().includes(nome.toLowerCase()));
    }));
  }

  excluir(id) {
    this.subscriber = this.projetoService.excluirProjeto(id)
      .subscribe(() => {
        this.atualizaLista();
      });
  }
}
