import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../shared/projeto.service';
@Component({
  selector: 'app-projetos-list',
  templateUrl: './projetos-list.component.html',
  styleUrls: ['./projetos-list.component.css']
})
export class ProjetosListComponent implements OnInit {

  constructor(private ProjetoService: ProjetoService) { }

  ngOnInit() {
  }

  public lista = [];

  projetos = this.ProjetoService.getProjetos((data) => {
    data.forEach(element => {
      let tst = {
        nome: element.name,
        email: element.boss
      };
      (this.lista).push(tst);
    })
    console.log(this.lista);
  });
}
