import { Component, OnInit, ViewChild } from '@angular/core';
import { ColaboradorService } from '../shared/colaborador.service';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import 'moment/locale/pt-br';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css']
})


export class ColaboradorFormComponent implements OnInit {

  subscribe: Subscription;
  
  public phoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  public hourMask = [/[0-9]/, /\d/,':',/\d/, /\d/]

  name: any;
  email: any;
  phone: any;
  workload: any;
  birth: any;
  scholarity: any;
  id: any;
  cadastro: any;

  constructor(private ColaboradorService: ColaboradorService, private ActivatedRoute: ActivatedRoute, private Router: Router) { }

  ngOnInit() {
    this.subscribe = this.ActivatedRoute.params.subscribe((params: any) => {
      if(this.Router.url.includes('alterar')) {
        let colab = this.ColaboradorService.getColab();
        this.id = colab._id;
        this.name = colab.name;
        this.email = colab.email;
        this.phone = colab.phone;
        this.birth = colab.birth;
        this.workload = colab.workload;
        this.cadastro = colab.cadastro;
        this.scholarity = colab.scholarity;
      }
    })
  }
  public list = [];

  onSubmit(form) {
    if(this.Router.url.includes('novo')) {
      form.value.cadastro = moment();
      this.ColaboradorService.verificaEmail(form.value.email, (data) => {
        if (data.length == 0) {
          this.ColaboradorService.postColaborador(form);
        } else {
          alert('Há um colaborador com esse e-mail, utilize outro.');
        }
      })
    }
    if(this.Router.url.includes('alterar')) {
      console.log(this.id);
      this.subscribe = this.ColaboradorService.alterarColaborador(this.id, form.value, this.cadastro)
      .subscribe((data) => {
        console.log(data);
      })
      console.log(form.value);
      alert('Usuário alterado com sucesso');
    }
  }
}
