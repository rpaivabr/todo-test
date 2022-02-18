import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TarefaModel } from './tarefa-model';

@Injectable({
  providedIn: 'root'
})
export class ListaTarefasService {

  private baseUrl = `${environment.baseUrl}/todos`;
  public lista: TarefaModel[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<TarefaModel[]>(this.baseUrl).subscribe({
      next: (todos: TarefaModel[]) => this.lista = todos
    })
  }

  adicionar(descricao: string): void {
    const nova = new TarefaModel(); // criar nova tarefa
    nova.descricao = descricao;
    this.httpClient.post<TarefaModel>(this.baseUrl, nova).subscribe({
      next: (todo: TarefaModel) => this.lista.push(todo)
    })
  }

  atualizar(tarefaid: number): void {
    const tarefaEncontrada = this.lista.find((x) => x.id === tarefaid);
    const id = tarefaEncontrada?.id;
    if (tarefaEncontrada) {
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida; // Atualizar status
      this.httpClient.put<TarefaModel>(`${this.baseUrl}/${id}`, tarefaEncontrada).subscribe()
    }
  }

  public limparLista(): void {
    this.lista = [];
  }
}
