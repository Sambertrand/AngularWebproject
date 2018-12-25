import {joueur} from './joueur';
import {mytable} from './my-table';

//object classes that will be  created via the api for personnage
export class personnage {
    id: number;
    Name: string;
    joueur: joueur;
    table: mytable;
}