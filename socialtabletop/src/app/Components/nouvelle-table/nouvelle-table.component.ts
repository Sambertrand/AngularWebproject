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
//component for the creation of a table
export class NouvelleTableComponent implements OnInit {
  joueurs: joueur[];
  newTable: mytable;

  constructor(private router: Router,
    private jouerService: JoueurService,
    private tableService: TableService) {
      this.newTable = new mytable();
    }

  ngOnInit() {
    this.getjoueur();
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

  //save ot db via API
  onSubmit() {
    console.log(this.newTable);
    if (this.newTable.Name !== undefined && this.newTable.joueurs !== undefined) {
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