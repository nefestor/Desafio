import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../shared/colaborador.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css']
})


export class ColaboradorFormComponent implements OnInit {


  public phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  public hourMask = [/[0-9]/, /\d/,':',/\d/, /\d/]
  constructor(private ColaboradorService: ColaboradorService) { }

  ngOnInit() {
  }
  public list = [];

  onSubmit(form) {
    form.value.cadastro = moment();
    this.ColaboradorService.verificaEmail(form.value.email, (data) => {
      if (data.length == 0) {
        this.ColaboradorService.postColaborador(form);
      } else {
        alert("Há um colaborador com esse e-mail, utilize outro.");
      }
    })
  }
}
