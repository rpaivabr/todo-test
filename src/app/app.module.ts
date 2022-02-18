import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NovaTarefaComponent } from './components/nova-tarefa/nova-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListaTarefasComponent,
    TarefaComponent,
    NovaTarefaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
