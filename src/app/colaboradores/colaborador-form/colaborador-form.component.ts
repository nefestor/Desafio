import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../shared/colaborador.service';

@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css']
})


export class ColaboradorFormComponent implements OnInit {


  public Phonemask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public Datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  public Hourmask = [/\d/, /\d/,':',/\d/, /\d/]
  constructor(private ColaboradorService: ColaboradorService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this.ColaboradorService.postColaborador(form);
  }
}
