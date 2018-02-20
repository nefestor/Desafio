import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ColaboradorService {
  
  name: string = '';

  constructor(private http: HttpClient) { }

  getColaborador(name){
    this.http.get(`http://localhost:3000/v1/users?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        console.log(data)
      }
    )
  }
}
