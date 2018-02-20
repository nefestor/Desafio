import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ColaboradoresListComponent } from './colaboradores/colaboradores-list/colaboradores-list.component';
import { SharedComponent } from './colaboradores/shared/shared.component';
import { ProjetosListComponent } from './projetos/projetos-list/projetos-list.component';
import { ProjetoComponent } from './projetos/projeto/projeto.component';
import { ColaboradorComponent } from './colaboradores/colaborador/colaborador.component';
import { CustomMaterialModule } from './custom-material.module';
import { CoreComponent } from './core/core.component';
import { ColaboradorFormComponent } from './colaboradores/colaborador-form/colaborador-form.component';
import { ProjetoFormComponent } from './projetos/projeto-form/projeto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    ProjetosComponent,
    ColaboradoresListComponent,
    SharedComponent,
    ProjetosListComponent,
    ProjetoComponent,
    ColaboradorComponent,
    CoreComponent,
    ColaboradorFormComponent,
    ProjetoFormComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
