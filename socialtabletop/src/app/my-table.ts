import {personnage} from './personnage';
import {joueur} from './joueur';

export class mytable {
    id: number;
    name: string;
    mj: string;
    description: Text;
    joueurs: joueur[];
    personnages: personnage[];
}