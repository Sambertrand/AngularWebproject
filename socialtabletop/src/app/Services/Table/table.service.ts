import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mytable } from 'src/app/Classes/my-table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private url = "http://localhost:8000/API";

  constructor(private http: HttpClient) { }

  getTables(): Observable<mytable[]> {
    return this.http.get<mytable[]>(this.url + '/tables', { responseType: 'json' });
  }

  getTable(id: string): Observable<mytable> {
    return this.http.get<mytable>(this.url + '/table/' + id, { responseType: 'json' });
  }
  
 deleteTable(id: string): Observable<any> {
  return this.http.delete(this.url +  '/deletemytable/' + id)
  }
}