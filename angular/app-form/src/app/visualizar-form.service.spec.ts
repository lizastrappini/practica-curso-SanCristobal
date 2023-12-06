import { TestBed } from '@angular/core/testing';

import { VisualizarFormService } from './visualizar-form.service';

describe('VisualizarFormService', () => {
  let service: VisualizarFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizarFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
