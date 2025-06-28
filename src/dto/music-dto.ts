export class MusicDto{
    id: number
    name: string
    desc: string
    image: string
    file: string
    album?: {}
    albumId: number | null
    publicIdImage: string
    publicIdFile: string
}