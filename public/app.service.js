"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../generated/prisma");
const music_dto_1 = require("./dto/music-dto");
const cloudinary_1 = require("cloudinary");
const process = require("node:process");
cloudinary_1.v2.config({
    cloud_name: 'dehzfto8m',
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
let AppService = class AppService {
    async getHello() {
        return 'hello';
    }
    async addSong(req) {
        try {
            const client = new prisma_1.PrismaClient();
            await client.$connect();
            const newUser = await client.music.create({
                data: {
                    name: req.name,
                    desc: req.desc,
                    image: req.image,
                    file: req.file,
                    publicIdFile: req.publicIdFile,
                    publicIdImage: req.publicIdImage
                },
            });
            console.log('ну воркает');
            return 'Success!';
        }
        catch (e) {
            console.log(e);
            return 'Error!';
        }
    }
    async getSongs() {
        const client = new prisma_1.PrismaClient();
        await client.$connect();
        return client.music.findMany();
    }
    async deleteSong(req) {
        const client = new prisma_1.PrismaClient();
        await client.$connect();
        await cloudinary_1.v2.uploader
            .destroy(req.publicIdImage, {
            resource_type: 'image',
            invalidate: true
        })
            .then(r => console.log(r));
        await cloudinary_1.v2.uploader
            .destroy(req.publicIdFile, {
            resource_type: 'video',
            invalidate: true
        })
            .then(r => console.log(r));
        const deletedUser = await client.music.delete({
            where: { id: req.id }
        }).then(r => console.log(r));
        return 'Success!';
    }
    async editSong(req, paramId) {
        const client = new prisma_1.PrismaClient();
        await client.$connect();
        console.log(paramId);
        const realId = parseInt(paramId);
        const updateUser = await client.music.update({
            where: { id: realId },
            data: {
                name: req.name,
                desc: req.desc,
                image: req.image,
                file: req.file,
                publicIdFile: req.publicIdFile,
                publicIdImage: req.publicIdImage
            }
        });
        console.log(updateUser);
    }
    async deleteData(file, image) {
        await cloudinary_1.v2.uploader
            .destroy(image, {
            resource_type: 'image',
            invalidate: true
        })
            .then(r => console.log(r));
        await cloudinary_1.v2.uploader
            .destroy(file, {
            resource_type: 'video',
            invalidate: true
        })
            .then(r => console.log(r));
    }
};
exports.AppService = AppService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [music_dto_1.MusicDto]),
    __metadata("design:returntype", Promise)
], AppService.prototype, "addSong", null);
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map