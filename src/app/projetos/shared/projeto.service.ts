import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ColaboradorService } from '../../colaboradores/shared/colaborador.service';

@Injectable()
export class ProjetoService {


  constructor(private http: HttpClient, private ColadoradorService: ColaboradorService) { }

  postProjeto(form) {
    if (form.status == "VALID") {
      console.table(form.value);
      this.http
        .post(`http://localhost:3000/v1/projects`, form.value)
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
  
  getProjeto(nome) {}

  listaColaboradores(): any[] {
    let lista = [];
    this.ColadoradorService.getColaboradores((data) => {
      data.forEach(element => {
        let tst = {
          nome: element.name,
          email: element.email
        };
        (lista).push(tst);
      })
    });
    return lista;
  }

  getProjetos(callback) {
    this.http.get(`http://localhost:3000/v1/projects`)
      .subscribe(
        (data: any[]) => {
          callback(data);
        }
      )
  }

  excluirProjeto(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/v1/projects/${id}`).map((res: Response) => { })
  }

}
