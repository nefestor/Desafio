import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColaboradorService } from '../shared/colaborador.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'app-colaboradores-list',
  templateUrl: './colaboradores-list.component.html',
  styleUrls: ['./colaboradores-list.component.css']
})
export class ColaboradoresListComponent implements OnInit, OnDestroy {

  subscriber: Subscription;

  constructor(private colaboradorService: ColaboradorService) { }

  public lista = [];
  // tslint:disable-next-line:no-inferrable-types
  panelOpenState: boolean = false;

  ngOnInit() {
      this.atualizaLista();
  }
  ngOnDestroy() {
    if (this.subscriber) {
    this.subscriber.unsubscribe();
    }
  }

  atualizaLista() {
    this.colaboradorService.getColaboradores((data) => {
    this.lista = data;
  });
  }

  localiza(nome: string) {
    console.log(nome);
    let copiaLista: any[] = new Array;
    this.colaboradorService.getColaboradores((data => {
      copiaLista = data;
      this.lista = copiaLista.filter(colaborador => colaborador.name.toLowerCase().includes(nome.toLowerCase()));
    }));
  }

  excluir(id) {
    this.subscriber = this.colaboradorService.excluirColaborador(id)
        .subscribe(() => {
          this.atualizaLista();
        });
  }

  atual() {
    return moment();
  }

  alterar(colaborador) {
    this.colaboradorService.setColaborador(colaborador);
    console.log(colaborador);
  }
}
