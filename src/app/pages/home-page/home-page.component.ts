import { Component, OnInit } from '@angular/core';
import { ListaTarefasService } from 'src/app/services/lista-tarefas.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  pageTitle = 'Lista de Atividades'

  constructor(public listaTarefasService: ListaTarefasService) {}

  ngOnInit(): void {
  }

}
