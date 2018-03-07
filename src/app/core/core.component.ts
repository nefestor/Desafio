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


  constructor(private colaboradorService: ColaboradorService, private projetoService: ProjetoService, private Dialog: MatDialog) { }

  lista = [];
  listaProjeto = [];
  DialogName: MatDialogRef<DialogComponent>;

  ngOnInit() {
  }

  // tslint:disable:member-ordering
  list =
    this.colaboradorService.getColaboradores((data) => {
      data.forEach(element => {
        const tst = {
          nome: element.name,
        };
        (this.lista).push(tst);
      });
    });

  listed =
    this.projetoService.getProjetos((data) => {
      data.forEach(element => {
        const tst = {
          nome: element.name,
        };
        (this.listaProjeto).push(tst);
      });
    });

  openDialog() {
    this.DialogName = this.Dialog.open(DialogComponent);
  }
}
