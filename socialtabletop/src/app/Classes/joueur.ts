import {personnage} from './personnage';
import {mytable} from './my-table';

//object classes that will be  created via the api for joueur
export class joueur {
    id: number;
    name: string;
    Personnage: personnage[];
    Tables: mytable[];
}