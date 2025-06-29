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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const music_dto_1 = require("./dto/music-dto");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return {
            message: 'hello epta!'
        };
    }
    addSong(req) {
        console.log(req);
        return this.appService.addSong(req);
    }
    getSongs() {
        return this.appService.getSongs();
    }
    deleteSong(req) {
        return this.appService.deleteSong(req);
    }
    editSong(req, id) {
        return this.appService.editSong(req, id);
    }
    deleteData(req) {
        return this.appService.deleteData(req.file, req.image);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [music_dto_1.MusicDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addSong", null);
__decorate([
    (0, common_1.Get)('/get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSongs", null);
__decorate([
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [music_dto_1.MusicDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteSong", null);
__decorate([
    (0, common_1.Put)('/edit/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [music_dto_1.MusicDto, Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "editSong", null);
__decorate([
    (0, common_1.Post)('/delete/data'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteData", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map