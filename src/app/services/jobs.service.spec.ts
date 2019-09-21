import { TestBed } from '@angular/core/testing';

import { JobsService } from './jobs.service';
import { HttpClientModule } from '@angular/common/http';

describe('JobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: JobsService = TestBed.get(JobsService);
    expect(service).toBeTruthy();
  });
});
