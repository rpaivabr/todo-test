import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { ListaTarefasService } from './lista-tarefas.service';

describe('ListaTarefasService', () => {
  let service: ListaTarefasService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListaTarefasService],
    });
    service = TestBed.inject(ListaTarefasService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('should be created', () => {
    const req = httpController.expectOne(`${environment.baseUrl}/todos`);
    req.flush([]);
    expect(service).toBeTruthy();
  });
});
