import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable()
export class ColaboradorService {

  colaborador: any;
  request: any;

  constructor(private http: HttpClient) {
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
