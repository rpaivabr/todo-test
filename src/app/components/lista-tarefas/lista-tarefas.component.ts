import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TarefaModel } from 'src/app/services/tarefa-model';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  @Input() lista: TarefaModel[] = [];
  @Output() atualizarItem: EventEmitter<number> = new EventEmitter<number>()

  atualizar(id: number): void {
    this.atualizarItem.emit(id);
  }

}
