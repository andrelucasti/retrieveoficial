import { TestBed, inject } from '@angular/core/testing';

import { TourDatesService } from './tour-dates.service';

describe('TourDatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourDatesService]
    });
  });

  it('should be created', inject([TourDatesService], (service: TourDatesService) => {
    expect(service).toBeTruthy();
  }));
});
