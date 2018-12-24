import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';
import {mytable} from 'src/app/Classes/my-table';
import {TableService}from 'src/app/Services/Table/table.service';

@Component({
  selector: 'app-nouvelle-table',
  templateUrl: './nouvelle-table.component.html',
  styleUrls: ['./nouvelle-table.component.css']
})
export class NouvelleTableComponent implements OnInit {
  joueurs: joueur[];
  newTable: mytable;
  selection: joueur[];

  constructor(private router: Router,
    private jouerService: JoueurService,
    private tableService: TableService) {
      this.newTable = new mytable();
      this.selection = [];
    }

  ngOnInit() {
    this.getjoueur();
  }

  addplayer(joueur){
    this.selection.push(joueur);
    console.log(this.selection);
  }


  getjoueur() {
    this.jouerService.getJoueurs().subscribe(
      (data) => {
        this.joueurs = data;
        console.log( this.joueurs);
        console.log(this.selection);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.newTable.joueurs = this.selection;
    if (this.newTable.name !== undefined && this.newTable.joueurs !== undefined) {
      this.tableService.postTables(this.newTable).subscribe(
        (data) => {
          if (data.valid == true) {
            this.router.navigate(['/tables']);
          }
          else { document.getElementById('send-error').style.display = "block"; }
        }
      );
    } else { document.getElementById('form-error').style.display = "block"; }
  }

}