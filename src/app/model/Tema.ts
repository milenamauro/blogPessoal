import { Postagem } from "./Postagem";
import { User } from "./User";


export class Tema{

    public id: number
    public descriçao: string
    public postagem: Postagem[]
}