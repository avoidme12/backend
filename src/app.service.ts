import {Body, Injectable, Req} from '@nestjs/common';
import {PrismaClient} from '../generated/prisma'
import {MusicDto} from "./dto/music-dto";
import {v2 as cloudinary} from 'cloudinary'
import * as process from "node:process";

cloudinary.config({
  cloud_name: 'dehzfto8m',
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

@Injectable()
export class AppService {
  async getHello() {
    return 'hello'; //TODO: сделать все то что было на node
  }
  async addSong(@Body() req: MusicDto){
    try{
      const client = new PrismaClient()
      await client.$connect()
      const newUser = await client.music.create({
        data: {
          name: req.name,
          desc: req.desc,
          image: req.image,
          file: req.file,
          publicIdFile: req.publicIdFile,
          publicIdImage: req.publicIdImage
        },
      })
      console.log('ну воркает')
      return 'Success!'
    }
    catch (e) {
      console.log(e)
      return 'Error!'
    }
  }
  async getSongs(){
    const client = new PrismaClient()
    await client.$connect()
    return client.music.findMany();
  }
  async deleteSong(req: MusicDto){
    const client = new PrismaClient()
    await client.$connect()
    await cloudinary.uploader
        .destroy(req.publicIdImage, {
          resource_type: 'image',
          invalidate: true
        })
        .then(r => console.log(r))
    await cloudinary.uploader
        .destroy(req.publicIdFile, {
          resource_type: 'video',
          invalidate: true
        })
        .then(r => console.log(r))
    const deletedUser = await client.music.delete({
      where:{ id: req.id }
    }).then(r => console.log(r))

    return 'Success!'
  }

  async editSong(req: MusicDto, paramId){
    const client = new PrismaClient()
    await client.$connect()
    console.log(paramId)
    const realId = parseInt(paramId)

    const updateUser = await client.music.update({
      where: {id: realId},
      data: {
        name: req.name,
        desc: req.desc,
        image: req.image,
        file: req.file,
        publicIdFile: req.publicIdFile,
        publicIdImage: req.publicIdImage
      }
    })
    console.log(updateUser)
  }

  async deleteData(file, image){
    await cloudinary.uploader
        .destroy(image, {
          resource_type: 'image',
          invalidate: true
        })
        .then(r => console.log(r))
    await cloudinary.uploader
        .destroy(file, {
          resource_type: 'video',
          invalidate: true
        })
        .then(r => console.log(r))
  }
}
