import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ListaTarefasComponent } from './lista-tarefas.component';

describe('ListaTarefasComponent', () => {
  let component: ListaTarefasComponent;
  let fixture: ComponentFixture<ListaTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTarefasComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keyup enter', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const descriptionInput: HTMLInputElement = hostElement.querySelector('input')!;
    const submitButton: HTMLButtonElement = hostElement.querySelector('button')!;
    const adicionarSpy = spyOn(component, 'adicionar');
    const keyEnterEvent = new KeyboardEvent('keyup', { key: 'Enter' });

    component.descricaoNovaTarefa = 'test';
    expect(component.descricaoNovaTarefa).toBe('test');
    submitButton.click();

    // fixture.detectChanges();
    // component.adicionar();
    // descriptionInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));

    // descriptionInput.dispatchEvent(keyEnterEvent);
    expect(adicionarSpy).toHaveBeenCalledTimes(1);
    fixture.detectChanges();
    expect(component.descricaoNovaTarefa).toBe('');
  });
});
