import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from './shared/colaborador.service';
import * as moment from 'moment';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  constructor(private colaboradorService: ColaboradorService) { }

  public listaNome: any[] = [];

  ngOnInit() {
  }
  localizar(name) {
    this.colaboradorService.getColaborador(name, (data) => {
       data.forEach(colaborador => {
        const tst = `<li>${colaborador.name}</li>`;
         (this.listaNome).push(tst);
       });
       console.log(this.listaNome);
  });
  }
}
