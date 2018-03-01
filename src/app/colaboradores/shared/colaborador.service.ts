import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ColaboradorService {
  
  constructor(private http: HttpClient) { }

  getColaborador(name, callback){
    this.http.get(`http://localhost:3000/v1/users?name=${name}`)
    .subscribe(
      (data:any[]) => {
        callback(data);
      }
    )
  } //Se nome estiver com o campo vazio, está retornando o primeiro usuário.

  verificaEmail(email, callback) {
    this.http.get(`http://localhost:3000/v1/users?email=${email}`)
      .subscribe(
        (data: any[]) => {
          callback(data);
        }
      )
  }
  
  getColaboradores(callback) {
    this.http.get(`http://localhost:3000/v1/users`)
      .subscribe(
        (data: any[]) => {
          callback(data);
        }
      )
  }
  
  postColaborador(form) {
    if(form.status == "VALID") {
      this.http
      .post(`http://localhost:3000/v1/users`, form.value)
      .subscribe(data => {
      },
      err => {
        alert("Algum erro ocorreu. Tente novamente.");
      },
      () => {
        alert("Usuário cadastrado com sucesso");
      }
      );
    } else {
      alert("Formulario Invalido. Preencha os campos corretamente");
    }
  }

  excluirColaborador(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/v1/users/${id}`).map((res: Response) => {})
  }

  alterarColaborador(form): Observable<any> {
    return this.http.put(`http://localhost:3000/v1/users/${form.id}`, form).map((res: Response) => {})
  }
}
