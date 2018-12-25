import { Component, OnInit } from '@angular/core';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-joueur',
  templateUrl: './modifier-joueur.component.html',
  styleUrls: ['./modifier-joueur.component.css']
})
export class ModifierJoueurComponent implements OnInit {
  joueur: joueur;
  constructor( private jouerService: JoueurService,
    private route: ActivatedRoute,
      private router: Router,) { }
  ngOnInit() {
    this.getjoueur();
    console.log(this.joueur)
  }


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
  onSubmit() {

    if (this.joueur.name !== undefined) {
      this.jouerService.postJoueur(this.joueur).subscribe(
        (data) => {
          if (data.valid == true) {
            this.router.navigate(['/joueurs']);
          }
          else { document.getElementById('send-error').style.display = "block"; }
        }
      );
    } else { document.getElementById('form-error').style.display = "block"; }
  }

}
