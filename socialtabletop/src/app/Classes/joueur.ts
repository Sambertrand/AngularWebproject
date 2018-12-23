import {personnage} from './personnage';
import {mytable} from './my-table';

export class joueur {
    id: number;
    name: string;
    Personnage: personnage[];
    Tables: mytable[]
    constructor(id) { 
        this.id = id;
      }
}