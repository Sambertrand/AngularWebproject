import { Component, OnInit } from '@angular/core';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  joueur: joueur;
  constructor( private jouerService: JoueurService) { }
  ngOnInit() {
    //this.getjoueur();
    console.log(this.joueur)
  }


  getjoueur() {
    this.jouerService.getJoueur('1').subscribe(
      (data) => {
        this.joueur = data;
        console.log( this.joueur);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}