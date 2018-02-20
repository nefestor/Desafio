import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  { path: 'home', component: CoreComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'colaboradores', component: ColaboradoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
