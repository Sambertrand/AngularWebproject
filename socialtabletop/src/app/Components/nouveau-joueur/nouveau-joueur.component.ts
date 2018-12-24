import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';

@Component({
  selector: 'app-nouveau-joueur',
  templateUrl: './nouveau-joueur.component.html',
  styleUrls: ['./nouveau-joueur.component.css']
})
export class NouveauJoueurComponent implements OnInit {
  newJoueur: joueur;

  constructor(private router: Router,
              private joueurService: JoueurService) {
    this.newJoueur = new joueur();
  }

  ngOnInit() {
  }

  onSubmit() {

    if (this.newJoueur.name !== undefined) {
      this.joueurService.postJoueur(this.newJoueur).subscribe(
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
