import { TestBed } from '@angular/core/testing';

import { DatosGitService } from './datos-git.service';

describe('DatosGitService', () => {
  let service: DatosGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
