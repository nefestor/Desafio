import { Component, OnInit } from '@angular/core';
import { ProjetoService } from './shared/projeto.service';
@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor(private ProjetoService: ProjetoService) { }

  public listaNome: any[] = [];

  ngOnInit() {
  }
  
  localizar(name) {
    this.ProjetoService.getProjeto(name);
  }
}
