import { Component, OnInit } from '@angular/core';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  joueurs: joueur[];
  constructor( private jouerService: JoueurService,
    private router: Router) { }
  ngOnInit() {
    this.getjoueur();
    console.log(this.joueurs)
  }


  getjoueur() {
    this.jouerService.getJoueurs().subscribe(
      (data) => {
        this.joueurs = data;
        console.log( this.joueurs);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteJoueur(id) {
    this.jouerService.deleteJoueur(id).subscribe(
      (data) => {
        if (data.valid == true) {
          this.router.navigate(['/joueurs']);
        }
        else{
          console.log("error");
        }
      }
    );
  }
}