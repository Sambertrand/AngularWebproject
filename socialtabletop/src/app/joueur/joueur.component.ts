import { Component, OnInit } from '@angular/core';
import {joueur} from '../joueur'

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  joueur: joueur = {
    id:1,
    name: 'sam',
    personnage:[],
    tables: [],
  };

  constructor() { }

  ngOnInit() {
  }

}
