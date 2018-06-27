import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs';
/*
class SearchItem {
  constructor(public nome: string,
    public email: string,
    public phone: string,
    public birth: string,
    public workload: string,
    public scholarity: string,
    public cadastro: string) {
  }
}*/

@Injectable()
export class ColaboradorService {

  colaborador: any;
  /*results: SearchItem[];*/
  request: any;

  constructor(/*private jsonp: Jsonp,*/ private http: HttpClient) {
    /*this.results = [];*/
  }

  getColaborador(name, callback) {
    this.http.get(`http://localhost:3000/v1/users?name=${name}`)
      .subscribe(
        (data: any[]) => {
          callback(data);
        }
      );
  }
  verificaEmail(email, callback) {
    this.http.get(`http://localhost:3000/v1/users?email=${email}`)
      .subscribe(
        (data: any[]) => {
          callback(data);
        }
      );
  }
  /*
    verificaEmailTest(email) {
    return new Promise((resolve, reject) => {
      this.results = [];
      // tslint:disable-next-line:prefer-const
      let apiURL = `http://localhost:3000/v1/users?email=${email}`;
      this.jsonp.request(apiURL)
        .toPromise()
        .then(
          res => {
            this.results = res.json().results.map(item => {
              return new SearchItem(
                item.nome,
                item.email,
                item.phone,
                item.birth,
                item.workload,
                item.scholarity,
                item.cadastro
              );
            });
            resolve(this.results);
          },
          msg => {
            reject(msg);
          }
        );
    });
  }
  */
  getColaboradores(callback) {
    this.http.get(`http://localhost:3000/v1/users`)
      .subscribe(
        (data: any[]) => {
          callback(data);
        }
      );
  }

  postColaborador(form) {
    if (form.status === 'VALID') {
      this.http
        .post(`http://localhost:3000/v1/users`, form.value)
        .subscribe(data => {
        },
          err => {
            alert('Algum erro ocorreu. Tente novamente.');
          },
          () => {
            alert('Usuário cadastrado com sucesso');
          }
        );
    } else {
      alert('Formulario Invalido. Preencha os campos corretamente');
    }
  }

  excluirColaborador(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/v1/users/${id}`).map((res: Response) => { });
  }

  alterarColaborador(id, form, cadastro): Observable<any> {
    form.cadastro = cadastro;
    return this.http.put(`http://localhost:3000/v1/users/${id}`, form).map((res: Response) => { });
  }

  getColab() {
    return this.colaborador;
  }

  setColaborador(colaborador) {
    this.colaborador = colaborador;
    console.log(this.colaborador);
  }
}
