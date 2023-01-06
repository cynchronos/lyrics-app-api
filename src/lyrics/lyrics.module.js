import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { Lyrics, LyricsSchema } from '../models/LyricsSchema';
import { LyricsController } from './lyrics.controller';
import { LyricsService } from './lyrics.service';

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
