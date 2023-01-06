const { Test } = require('@nestjs/testing');
const { LyricsController } = require('./lyrics.controller');

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
