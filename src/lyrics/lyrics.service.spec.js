const { Test } = require('@nestjs/testing');
const { LyricsService } = require('./lyrics.service');

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
