import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListaTarefasService } from 'src/app/services/lista-tarefas.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  @Output() novaTarefa: EventEmitter<string> = new EventEmitter<string>();
  descricao: string = '';

  constructor(public listaTarefasService: ListaTarefasService) {}

  ngOnInit(): void {
  }

  adicionar(el: HTMLInputElement): void {
    this.novaTarefa.emit(el.value);
  }

}
