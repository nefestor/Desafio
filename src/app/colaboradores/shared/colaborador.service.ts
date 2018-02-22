import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ColaboradorService {
  
  
  constructor(private http: HttpClient) { }

  getColaborador(name){
    this.http.get(`http://localhost:3000/v1/users?name=${name}`)
    .subscribe(
      (data:any[]) => {
        console.log(data)
      }
    )
  } //Se nome estiver com o campo vazio, está retornando o primeiro usuário.

  verificaEmail(email, callback) {
    this.http.get(`http://localhost:3000/v1/users?email=${email}`)
      .subscribe(
        (data: any[]) => {
          console.log(data)
          callback(data);
        }
      )
  }
  getColaboradores() {
    this.http.get(`http://localhost:3000/v1/users`)
      .subscribe(
        (data: any[]) => {
          console.log(data);
        }
      )
  }

  postColaborador(form) {
    if(form.status == "VALID") {
      console.table(form.value);
      this.http
      .post(`http://localhost:3000/v1/users`, form.value)
      .subscribe(data => {
      console.log(data)
      },
      err => {
        console.log("Erro ocorrido.");
      }
      );
    } else {
      alert("Formulario Invalido. Preencha os campos corretamente");
    }
  }
}
