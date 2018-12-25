import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {personnage} from 'src/app/Classes/personnage';
import {PersonnageService}from 'src/app/Services/Personnage/personnage.service';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';
import {mytable} from 'src/app/Classes/my-table';
import {TableService}from 'src/app/Services/Table/table.service';

@Component({
  selector: 'app-modifier-personnage',
  templateUrl: './modifier-personnage.component.html',
  styleUrls: ['./modifier-personnage.component.css']
})
//component for the mofification of a personnage
export class ModifierPersonnageComponent implements OnInit {
  joueurs: joueur[];
  tables: mytable[];
  personnage: personnage;

  constructor( private personnageService: PersonnageService,
      private route: ActivatedRoute,
      private router: Router,
      private jouerService: JoueurService,
      private tableService: TableService) { }

  ngOnInit() {
    this.getPersonnage();
    this.getjoueur();
    this.getTable();
  }
  
  //API acces GET players
  getjoueur() {
    this.jouerService.getJoueurs().subscribe(
      (data) => {
        this.joueurs = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //API acces GET Tables
  getTable() {
    this.tableService.getTables().subscribe(
      (data) => {
        this.tables = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

 //API acces GET personnages
  getPersonnage() {
    let id = this.route.snapshot.paramMap.get('id');
    this.personnageService.getPersonnage(id).subscribe(
      (data) => {
        this.personnage = data;
        console.log( this.personnage);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //save to db via api
  onSubmit() {

    if (this.personnage.Name !== undefined && this.personnage.joueur !== undefined && this.personnage.table !== undefined) {
      this.personnageService.postPersonnage(this.personnage).subscribe(
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
