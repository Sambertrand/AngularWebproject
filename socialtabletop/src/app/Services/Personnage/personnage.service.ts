import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {personnage} from 'src/app/Classes/personnage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  private url = "http://localhost:8000/API";

  constructor(private http: HttpClient) { }

  getPersonnages(): Observable<personnage[]> {
    return this.http.get<personnage[]>(this.url + '/presonnages', { responseType: 'json' });
  }

  getPersonnage(id: string): Observable<personnage> {
    return this.http.get<personnage>(this.url + '/personnage/' + id, { responseType: 'json' });
  }
  
 deletePersonnage(id: string): Observable<any> {
  return this.http.delete(this.url +  '/deletepersonnage/' + id)
  }
}
