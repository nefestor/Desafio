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
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public hourMask = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  public list = [];
  name: any;
  email: any;
  phone: any;
  workload: any;
  birth: any;
  scholarity: any;
  id: any;
  cadastro: any;

  constructor(private colaboradorService: ColaboradorService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.subscribe = this.activatedRoute.params.subscribe((params: any) => {
      if (this.router.url.includes('alterar')) {
        const colab = this.colaboradorService.getColab();
        this.id = colab._id;
        this.name = colab.nome;
        this.email = colab.email;
        this.phone = colab.phone;
        this.birth = colab.birth;
        this.workload = colab.workload;
        this.cadastro = colab.cadastro;
        this.scholarity = colab.scholarity;
      }
    });
  }


  onSubmit(form) {
    if (this.router.url.includes('novo')) {
      form.value.cadastro = moment();
      this.colaboradorService.verificaEmail(form.value.email, (data) => {
        if (data.length === 0) {
          this.colaboradorService.postColaborador(form);
          alert('Usuário Cadastrado com Sucesso');
        } else {
          alert('Há um colaborador com esse e-mail, utilize outro.');
        }
      });
    }
    if (this.router.url.includes('alterar')) {
      this.colaboradorService.alterarColaborador(this.id, form.value, this.cadastro);
      alert('Usuário alterado com sucesso');
    }
  }
}
