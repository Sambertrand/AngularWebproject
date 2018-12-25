import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {personnage} from 'src/app/Classes/personnage';
import {PersonnageService}from 'src/app/Services/Personnage/personnage.service';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';
import {mytable} from 'src/app/Classes/my-table';
import {TableService}from 'src/app/Services/Table/table.service';

@Component({
  selector: 'app-nouveau-personnage',
  templateUrl: './nouveau-personnage.component.html',
  styleUrls: ['./nouveau-personnage.component.css']
})
//component for the creation of a personnage
export class NouveauPersonnageComponent implements OnInit {
  newPersonnage: personnage;
  joueurs: joueur[];
  tables: mytable[];

  constructor(private router: Router,
              private personnageService: PersonnageService,
              private jouerService: JoueurService,
              private tableService: TableService) {
    this.newPersonnage = new personnage();
  }

  ngOnInit() {
    this.getjoueur();
    this.getTable();
  }

  //API acces to GET joueurs
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

  //API acces to GET Tables
  getTable() {
    this.tableService.getTables().subscribe(
      (data) => {
        this.tables = data;
        console.log( this.tables);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //save to db via API
  onSubmit() {

    if (this.newPersonnage.Name !== undefined && this.newPersonnage.joueur !== undefined && this.newPersonnage.table !== undefined) {
      this.personnageService.postPersonnage(this.newPersonnage).subscribe(
        (data) => {
          if (data.valid == true) {
            this.router.navigate(['/personnages']);
          }
          else { document.getElementById('send-error').style.display = "block"; }
        }
      );
    } else { document.getElementById('form-error').style.display = "block"; }
  }

}

