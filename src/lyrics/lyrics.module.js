const { Module } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const { Lyrics, LyricsSchema } = require('../models/LyricsSchema');
const { LyricsController } = require('./lyrics.controller');
const { LyricsService } = require('./lyrics.service');

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Lyrics.name, schema: LyricsSchema },
    ]),
  ],
  controllers: [LyricsController],
  providers: [LyricsService]
})
export class LyricsModule {}
