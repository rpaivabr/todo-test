import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTarefasComponent } from 'src/app/components/lista-tarefas/lista-tarefas.component';
import { NovaTarefaComponent } from 'src/app/components/nova-tarefa/nova-tarefa.component';
import { ListaTarefasService } from 'src/app/services/lista-tarefas.service';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let listaTarefasService: ListaTarefasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        ListaTarefasComponent,
        NovaTarefaComponent,
      ],
      providers: [ListaTarefasService],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    listaTarefasService = TestBed.inject(ListaTarefasService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(listaTarefasService).toBeTruthy();
  });

  it('should call listaTarefasService.adicionar method when novaTarefa emits a description value', () => {
    const listaTarefasServiceSpy = spyOn(listaTarefasService, 'adicionar');

    component.adicionar('Iteris');

    expect(listaTarefasServiceSpy).toHaveBeenCalledOnceWith('Iteris');
  });
});
