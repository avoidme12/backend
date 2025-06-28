import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicController } from './music/music.controller';
import { MusicModule } from './music/music.module';
import { MusicService } from './music/music.service';
import {ConfigModule} from "@nestjs/config";



@Module({
  imports: [MusicModule, ConfigModule.forRoot()],
  controllers: [AppController, MusicController],
  providers: [AppService, MusicService],
})
export class AppModule {}
