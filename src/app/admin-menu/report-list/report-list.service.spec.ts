import { TestBed, inject } from '@angular/core/testing';

import { ReportListService } from './report-list.service';

describe('ReportListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportListService]
    });
  });

  it('should be created', inject([ReportListService], (service: ReportListService) => {
    expect(service).toBeTruthy();
  }));
});
