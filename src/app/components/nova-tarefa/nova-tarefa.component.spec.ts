import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTarefaComponent } from './nova-tarefa.component';

describe('NovaTarefaComponent', () => {
  let component: NovaTarefaComponent;
  let fixture: ComponentFixture<NovaTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NovaTarefaComponent
      ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when click in a button with input value empty, should not emit description string', () => {
      const hostElement: HTMLElement = fixture.nativeElement;
      const submitButton: HTMLButtonElement = hostElement.querySelector('button')!;
      const novaTarefaSpy = spyOn(component.novaTarefa, 'emit');

      submitButton.click();

      expect(novaTarefaSpy).toHaveBeenCalledTimes(0);
  });

  it('when click in a button with some input value, should emit description string', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const descricaoInput: HTMLInputElement = hostElement.querySelector('input')!;
    // const submitButton: HTMLButtonElement = hostElement.querySelector('button')!;
    const novaTarefaSpy = spyOn(component.novaTarefa, 'emit');

    descricaoInput.value = 'someValue';
    component.adicionar(descricaoInput);

    expect(novaTarefaSpy).toHaveBeenCalledWith('someValue');
  });
});
