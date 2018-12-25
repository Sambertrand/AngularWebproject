import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JoueurComponent } from './Components/joueur/joueur.component';
import { PersonnageComponent } from './Components/personnage/personnage.component';
import { MyTableComponent } from './Components/my-table/my-table.component';
import { JoueurDisplayOneComponent } from './Components/joueur-display-one/joueur-display-one.component'; 
import {PersonnageDisplayOneComponent} from './Components/personnage-display-one/personnage-display-one.component';
import { MyTableDisplayOneComponent } from './Components/my-table-display-one/my-table-display-one.component';
import { NouveauJoueurComponent } from './Components/nouveau-joueur/nouveau-joueur.component';
import { NouveauPersonnageComponent } from './Components/nouveau-personnage/nouveau-personnage.component';
import { NouvelleTableComponent } from './Components/nouvelle-table/nouvelle-table.component'; 
import { ModifierJoueurComponent } from './Components/modifier-joueur/modifier-joueur.component'; 
import { ModifierPersonnageComponent } from './Components/modifier-personnage/modifier-personnage.component'; 
import { ModifierTableComponent } from './Components/modifier-table/modifier-table.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'joueurs', pathMatch: 'full' },
  { path: 'joueurs', component: JoueurComponent },
  { path: 'Personnages', component: PersonnageComponent },
  { path: 'Tables', component: MyTableComponent },
  { path: 'joueur/:id', component: JoueurDisplayOneComponent },
  { path: 'personnage/:id', component: PersonnageDisplayOneComponent },
  { path: 'table/:id', component: MyTableDisplayOneComponent },
  { path: 'nouveauJoueur', component: NouveauJoueurComponent },
  { path: 'nouveauPersonnage', component: NouveauPersonnageComponent },
  { path: 'nouvelleTable', component: NouvelleTableComponent },
  { path: 'modifierjoueur/:id', component: ModifierJoueurComponent },
  { path: 'modifierpersonnage/:id', component: ModifierPersonnageComponent },
  { path: 'modifiertable/:id', component: ModifierTableComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}