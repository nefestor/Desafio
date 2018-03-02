import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaboradores/shared/colaborador.service';
import { ProjetoService } from '../projetos/shared/projeto.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ColaboradorComponent } from '../colaboradores/colaborador/colaborador.component';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  
  constructor(private ColaboradorService: ColaboradorService, private ProjetoService: ProjetoService, private Dialog: MatDialog) { }

  ngOnInit() {
  }

  lista = [];
  listaProjeto = [];
  DialogName: MatDialogRef<DialogComponent>;

  listagem = this.ColaboradorService.getColaboradores((data) => {
    data.forEach(element => {
      let tst = {
        nome: element.name,
      };
      (this.lista).push(tst);
    })
  });
  
  listagemProjeto = this.ProjetoService.getProjetos((data) => {
    data.forEach(element => {
      let tst = {
        nome: element.name,
      };
      (this.listaProjeto).push(tst);
    })
  });

  openDialog() {
    this.DialogName = this.Dialog.open(DialogComponent);
  }
}
