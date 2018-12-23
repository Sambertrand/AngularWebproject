import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JoueurComponent } from './Components/joueur/joueur.component';
import { PersonnageComponent } from './Components/personnage/personnage.component';
import { MyTableComponent } from './Components/my-table/my-table.component';
import { JoueurDisplayOneComponent } from './Components/joueur-display-one/joueur-display-one.component'; 
import {PersonnageDisplayOneComponent} from './Components/personnage-display-one/personnage-display-one.component';
import { MyTableDisplayOneComponent } from './Components/my-table-display-one/my-table-display-one.component';
const routes: Routes = [
  { path: '', redirectTo: 'joueurs', pathMatch: 'full' },
  { path: 'joueurs', component: JoueurComponent },
  { path: 'Personnages', component: PersonnageComponent },
  { path: 'Tables', component: MyTableComponent },
  { path: 'joueur/:id', component: JoueurDisplayOneComponent },
  { path: 'personnage/:id', component: PersonnageDisplayOneComponent },
  { path: 'table/:id', component: MyTableDisplayOneComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}