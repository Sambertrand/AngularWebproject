import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueurComponent } from './Components/joueur/joueur.component';
import { PersonnageComponent } from './Components/personnage/personnage.component';
import { MyTableComponent } from './Components/my-table/my-table.component';
import { HttpClientModule } from '@angular/common/http';
import { JoueurDisplayOneComponent } from './Components/joueur-display-one/joueur-display-one.component';
import { PersonnageDisplayOneComponent } from './Components/personnage-display-one/personnage-display-one.component';
import { MyTableDisplayOneComponent } from './Components/my-table-display-one/my-table-display-one.component';
import { NouveauJoueurComponent } from './Components/nouveau-joueur/nouveau-joueur.component';
import { NouveauPersonnageComponent } from './Components/nouveau-personnage/nouveau-personnage.component';
import { NouvelleTableComponent } from './Components/nouvelle-table/nouvelle-table.component'; 

@NgModule({
  declarations: [
    AppComponent,
    JoueurComponent,
    PersonnageComponent,
    MyTableComponent,
    JoueurDisplayOneComponent,
    PersonnageDisplayOneComponent,
    MyTableDisplayOneComponent,
    NouveauJoueurComponent,
    NouveauPersonnageComponent,
    NouvelleTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
