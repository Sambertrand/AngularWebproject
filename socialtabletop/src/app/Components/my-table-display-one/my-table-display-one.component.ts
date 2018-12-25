import { Component, OnInit } from '@angular/core';
import {mytable} from 'src/app/Classes/my-table';
import {TableService}from 'src/app/Services/Table/table.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-table-display-one',
  templateUrl: './my-table-display-one.component.html',
  styleUrls: ['./my-table-display-one.component.css']
})
export class MyTableDisplayOneComponent implements OnInit {
  table: mytable;
  constructor( private tableService: TableService,
    private route: ActivatedRoute,
      private router: Router,) { }
  ngOnInit() {
    this.getTable();
    console.log(this.table)
  }


  getTable() {
    let id = this.route.snapshot.paramMap.get('id');
    this.tableService.getTable(id).subscribe(
      (data) => {
        this.table = data;
        console.log( this.table);
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

