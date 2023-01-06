const { Module } = require('@nestjs/common');
const { AppController } = require('./app.controller');
const { AppService } = require('./app.service');
const {ConfigModule} = require('@nestjs/config');
const { DatabaseModule } = require('./database/database.module');
const { LyricsModule } = require('./lyrics/lyrics.module');

ConfigModule.forRoot()

@Module({
  imports: [DatabaseModule, LyricsModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
