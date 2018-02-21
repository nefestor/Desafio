import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../shared/colaborador.service';

@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css']
})


export class ColaboradorFormComponent implements OnInit {


  constructor(private ColaboradorService: ColaboradorService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this.ColaboradorService.postColaborador(form);
  }

}
