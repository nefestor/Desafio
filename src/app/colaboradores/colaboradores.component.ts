import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from './shared/colaborador.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  constructor(private ColaboradorService: ColaboradorService) { }

  public listaNome: any[] = [];

  ngOnInit() {
  }
  localizar(name) { //corrigir
    this.ColaboradorService.getColaborador(name, (data) => {
       data.forEach(colaborador => {
         let tst = `<li>${colaborador.name}</li>`;
         (this.listaNome).push(tst);
       });
       console.log(this.listaNome);
  });
  }
}