import { TestBed } from '@angular/core/testing';

import { GithubAPIService } from './githubAPI.service';

describe('DatapostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubAPIService = TestBed.get(GithubAPIService);
    expect(service).toBeTruthy();
  });
});
