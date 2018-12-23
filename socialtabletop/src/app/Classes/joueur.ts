import {personnage} from './personnage';
import {mytable} from './my-table';

export class joueur {
    id: number;
    name: string;
    personnage: personnage[];
    tables: mytable[]
    constructor(id) { 
        this.id = id;
      }
}