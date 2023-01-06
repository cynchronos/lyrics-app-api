import { Test } from '@nestjs/testing';
import { LyricsService } from './lyrics.service';

describe('LyricsService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LyricsService],
    }).compile();

    service = module.get(LyricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
