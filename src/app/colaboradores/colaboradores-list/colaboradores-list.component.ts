import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../shared/colaborador.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-colaboradores-list',
  templateUrl: './colaboradores-list.component.html',
  styleUrls: ['./colaboradores-list.component.css']
})
export class ColaboradoresListComponent implements OnInit {

  subscriber: Subscription;
  
  constructor(private ColaboradorService: ColaboradorService) { }

  ngOnInit() {
  }

  public lista = [];

  colaboradores = this.ColaboradorService.getColaboradores((data) => {
    data.forEach(element => {
      let tst = {
        nome: element.name,
        email: element.email
      };
      (this.lista).push(tst);
    })
    console.log(this.lista);
  });


  localiza(nome: string) {
    console.log(nome);
    let copiaLista: any[] = new Array;
  }
}
