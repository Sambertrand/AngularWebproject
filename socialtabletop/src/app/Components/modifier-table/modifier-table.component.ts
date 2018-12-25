import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {joueur} from 'src/app/Classes/joueur';
import {JoueurService}from 'src/app/Services/Joueur/joueur.service';
import {mytable} from 'src/app/Classes/my-table';
import {TableService}from 'src/app/Services/Table/table.service';

@Component({
  selector: 'app-modifier-table',
  templateUrl: './modifier-table.component.html',
  styleUrls: ['./modifier-table.component.css']
})
//component for the mofification of a table
export class ModifierTableComponent implements OnInit {
  table: mytable;
  joueurs: joueur[];
  joueur: joueur;

  constructor(private router: Router,    
    private route: ActivatedRoute,
    private jouerService: JoueurService,
    private tableService: TableService) {
    }

  ngOnInit() {
    this.getTable();
    this.getjoueur();
  }

  //API acces GET tables
  getTable() {
    let id = this.route.snapshot.paramMap.get('id');
    this.tableService.getTable(id).subscribe(
      (data) => {
        this.table = data;
        console.log( this.table);
      },
      (err) => {
        console.log(err);
      }
    );
  }


 //API acces to GET joueurs
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

  //save to db via API
  onSubmit() {
    console.log(this.table);
    if (this.table.Name !== undefined && this.table.joueurs !== undefined) {
      this.tableService.postTables(this.table).subscribe(
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