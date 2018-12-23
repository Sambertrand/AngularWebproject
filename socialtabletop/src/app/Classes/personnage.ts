import {joueur} from './joueur';
import {mytable} from './my-table';

export class personnage {
    id: number;
    name: string;
    joueur: joueur;
    table: mytable;
}