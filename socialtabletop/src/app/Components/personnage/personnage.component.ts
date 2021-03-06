import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {personnage} from 'src/app/Classes/personnage';
import {PersonnageService} from 'src/app/Services/Personnage/personnage.service'

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
//component for the display of all the personnages
export class PersonnageComponent implements OnInit {
    personnages: personnage[];

  constructor( private personnageService: PersonnageService,
    private router: Router) { }
  ngOnInit() {
    this.getPersonnage();
  }


  //API acces t GET the personnages
  getPersonnage() {
    this.personnageService.getPersonnages().subscribe(
      (data) => {
        this.personnages = data;
        console.log( this.personnages);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //API acces to DELETE personnage
  deletePersonnage(id) {
    this.personnageService.deletePersonnage(id).subscribe(
      (data) => {
        if (data.valid == true) {
          this.router.navigate(['/Personnages']);
        }
        else{
          console.log("error");
        }
      }
    );
  }
}
