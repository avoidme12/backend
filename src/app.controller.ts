import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {MusicDto} from "./dto/music-dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello() {
    return{
      deploy: 'success!',
      message: 'hello epta!'
    }
  }

  @Post('/add')
  addSong(@Body() req: MusicDto){
    console.log(req)
    return this.appService.addSong(req)
  }

  @Get('/get')
  getSongs(){
    return this.appService.getSongs()
  }

  @Post('/delete')
  deleteSong(@Body() req: MusicDto){
    return this.appService.deleteSong(req)
  }

  @Put('/edit/:id')
  editSong(@Body() req: MusicDto, @Param('id') id: number){
    return this.appService.editSong(req, id)
  }

  @Post('/delete/data')
  deleteData(@Body() req){
    return this.appService.deleteData(req.file, req.image)
  }
}