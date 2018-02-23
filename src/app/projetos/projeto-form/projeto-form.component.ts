import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../shared/projeto.service';
import { ColaboradorService } from '../../colaboradores/shared/colaborador.service';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {

  public phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  public hourMask = [/[0-9]/, /\d/, ':', /\d/, /\d/]
  
  constructor(private ColaboradorService: ColaboradorService) { }

  lista = [];

  colaboradores = this.ColaboradorService.getColaboradores((data) => {
      data.forEach(element => {
        let tst = element.name;
        (this.lista).push(tst);
      })
      console.log(this.lista);
  });
  
  
  ngOnInit() {
  }

}
