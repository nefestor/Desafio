import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ColaboradoresListComponent } from './colaboradores/colaboradores-list/colaboradores-list.component'
import { CoreComponent } from './core/core.component';
import { ColaboradorFormComponent } from './colaboradores/colaborador-form/colaborador-form.component';
import { ProjetoFormComponent } from './projetos/projeto-form/projeto-form.component';
import { ProjetosListComponent } from './projetos/projetos-list/projetos-list.component';

const routes: Routes = [
  { path: 'home', component: CoreComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'colaboradores/novo', component: ColaboradorFormComponent },
  { path: 'colaboradores/listar', component: ColaboradoresListComponent },
  { path: 'colaboradores/alterar', component: ColaboradorFormComponent },
  { path: 'colaboradores/excluir', component: ColaboradorFormComponent },
  { path: 'projetos/novo', component: ProjetoFormComponent },
  { path: 'projetos/listar', component: ProjetosListComponent },
  { path: 'projetos/alterar', component: ProjetoFormComponent },
  { path: 'projetos/excluir', component: ColaboradorFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
