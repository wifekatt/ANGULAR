import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UrnesDialogComponent } from '../urnes-dialog/urnes-dialog.component';
import { UrneService } from '../../service/urne.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-urnes',
  templateUrl: './urnes.component.html',
  styleUrls: ['./urnes.component.css']
})
export class UrnesComponent implements OnInit {

  displayedColumns: string[] = ['urneName','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog , private urneApi : UrneService) { }

  ngOnInit(): void {
    this.getAllLists();
  }
 

  openDialog() {
    this.dialog.open(UrnesDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllLists();
        }
    })
  }

  getAllLists(){
    this.urneApi.getUrnes()
          .subscribe({
            next:(res:any)=>{
              console.log(JSON.stringify(res));
              this.dataSource = new MatTableDataSource(res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

            },
            error:(err)=>{
             
            }
          })
  }

  editUrne(){
    this.dialog.open(UrnesDialogComponent,{
    width:'30%',

    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllLists();
        }
    })
    }
    deleteUrne(){
    alert("ballot box deleted succesfully")

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

