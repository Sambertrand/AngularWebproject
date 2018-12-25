import { Component, OnInit } from '@angular/core';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joueur-display-one',
  templateUrl: './joueur-display-one.component.html',
  styleUrls: ['./joueur-display-one.component.css']
})
//component for the display of one joueur
export class JoueurDisplayOneComponent implements OnInit {
  joueur: joueur;
  constructor( private jouerService: JoueurService,
    private route: ActivatedRoute,
      private router: Router,) { }
  ngOnInit() {
    this.getjoueur();
    console.log(this.joueur)
  }

  //api acces to GET
  getjoueur() {
    let id = this.route.snapshot.paramMap.get('id');
    this.jouerService.getJoueur(id).subscribe(
      (data) => {
        this.joueur = data;
        console.log(this.joueur);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  //API acces to DELETE
  deleteJoueur(id) {
    /* Delete the category into database */
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
