import {personnage} from './personnage';
import {joueur} from './joueur';

//object classes that will be  created via the api for table
export class mytable {
    id: number;
    Name: string;
    mj: string;
    description: Text;
    joueurs: joueur[];
    personnages: personnage[];
}