import { TestBed, inject } from '@angular/core/testing';

import { SocketsService } from './sockets.service';

describe('SocketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketsService]
    });
  });

  it('should be created', inject([SocketsService], (service: SocketsService) => {
    expect(service).toBeTruthy();
  }));
});
