import { TestBed } from '@angular/core/testing';

import { MaterialVersionInformationService } from './material-version-information.service';

describe('MaterialVersionInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialVersionInformationService = TestBed.get(MaterialVersionInformationService);
    expect(service).toBeTruthy();
  });
});
