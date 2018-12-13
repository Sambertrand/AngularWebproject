import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { joueur } from './joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  private url = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<joueur[]> {
    return this.http.get<joueur[]>(this.url + '/joueur', { responseType: 'json' });
  }

  getCategory(id: string): Observable<joueur> {
    return this.http.get<joueur>(this.url + '/joueur/' + id, { responseType: 'json' });
  }
}