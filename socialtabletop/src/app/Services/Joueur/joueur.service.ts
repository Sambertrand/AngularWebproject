import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { joueur } from 'src/app/Classes/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  private url = "http://localhost:8000/API";

  constructor(private http: HttpClient) { }

  getJoueurs(): Observable<joueur[]> {
    return this.http.get<joueur[]>(this.url + '/joueurs', { responseType: 'json' });
  }

  getJoueur(id: string): Observable<joueur> {
    return this.http.get<joueur>(this.url + '/joueur/' + id, { responseType: 'json' });
  }
  
 deleteJoueur(id: string): Observable<any> {
  return this.http.delete(this.url +  '/deletejoueur/' + id)
  }
}
