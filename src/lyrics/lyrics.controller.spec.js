import { Test } from '@nestjs/testing';
import { LyricsController } from './lyrics.controller';

describe('Lyrics Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [LyricsController],
    }).compile();

    controller = module.get(LyricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
