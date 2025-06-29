import { AppService } from './app.service';
import { MusicDto } from "./dto/music-dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): {
        message: string;
    };
    addSong(req: MusicDto): Promise<"Success!" | "Error!">;
    getSongs(): Promise<{
        id: number;
        name: string;
        image: string;
        file: string;
        desc: string;
        albumId: number | null;
        publicIdImage: string;
        publicIdFile: string;
    }[]>;
    deleteSong(req: MusicDto): Promise<string>;
    editSong(req: MusicDto, id: number): Promise<void>;
    deleteData(req: any): Promise<void>;
}
