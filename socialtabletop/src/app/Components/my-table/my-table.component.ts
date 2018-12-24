import { Component, OnInit } from '@angular/core';
import {mytable} from 'src/app/Classes/my-table';
import {TableService}from 'src/app/Services/Table/table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  tables: mytable[];
  constructor( private tableService: TableService,
    private router: Router) { }
  ngOnInit() {
    this.getTable();
    console.log(this.tables)
  }


  getTable() {
    this.tableService.getTables().subscribe(
      (data) => {
        this.tables = data;
        console.log( this.tables);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteTable(id) {
    this.tableService.deleteTable(id).subscribe(
      (data) => {
        if (data.valid == true) {
          this.router.navigate(['/Tables']);
        }
        else{
          console.log("error");
        }
      }
    );
  }
}
