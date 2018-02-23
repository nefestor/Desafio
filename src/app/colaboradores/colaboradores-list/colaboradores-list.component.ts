import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../shared/colaborador.service';

@Component({
  selector: 'app-colaboradores-list',
  templateUrl: './colaboradores-list.component.html',
  styleUrls: ['./colaboradores-list.component.css']
})
export class ColaboradoresListComponent implements OnInit {

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
  

}
