import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {personnage} from 'src/app/Classes/personnage';
import {PersonnageService} from 'src/app/Services/Personnage/personnage.service'


@Component({
  selector: 'app-personnage-display-one',
  templateUrl: './personnage-display-one.component.html',
  styleUrls: ['./personnage-display-one.component.css']
})

//component for the display of a personnage
export class PersonnageDisplayOneComponent implements OnInit {
  personnage: personnage;
  constructor( private personnageService: PersonnageService,
    private route: ActivatedRoute,
      private router: Router,) { }
  ngOnInit() {
    this.getPersonnage();
    console.log(this.personnage)
  }


  //API to get a personnage
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

  //API acces to DELETE a personnage
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
