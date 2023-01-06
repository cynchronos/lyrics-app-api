import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { DatabaseModule } from './database/database.module';
import { LyricsModule } from './lyrics/lyrics.module';

ConfigModule.forRoot()

@Module({
  imports: [DatabaseModule, LyricsModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
