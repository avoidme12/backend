import { MusicDto } from "./dto/music-dto";
export declare class AppService {
    getHello(): Promise<string>;
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
    editSong(req: MusicDto, paramId: any): Promise<void>;
    deleteData(file: any, image: any): Promise<void>;
}
