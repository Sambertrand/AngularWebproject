import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mytable } from 'src/app/Classes/my-table';

@Injectable({
  providedIn: 'root'
})
//class that provides all the API acceses needed for Table
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

  postTables(table: mytable): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin' : '*', })
    };

    return this.http.post<mytable>(this.url + '/newtable', table, httpOptions);
  }
  putTable(table: mytable, id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin' : '*', })
    };

    return this.http.post<mytable>(this.url + '/updatemytable/'+ id, table, httpOptions);
  }
}