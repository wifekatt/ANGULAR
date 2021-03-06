import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CandidatListDialogComponent } from '../candidat-list-dialog/candidat-list-dialog.component';
import { CandidatListService } from '../../service/candidat-list.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {

  displayedColumns: string[] = ['listName','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog , private listApi : CandidatListService) { }

  ngOnInit(): void {
  }
 

  openDialog() {
    this.dialog.open(CandidatListDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        
        }
    })
  }
/*
  getAllLists(){
    this.listApi.getListCandidats()
          .subscribe({
            next:(res:any)=>{
              console.log(JSON.stringify(res));
              this.dataSource = new MatTableDataSource(res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

            },
            error:(err)=>{
              alert("error while fetching the records!!")
            }
          })
  }
*/
 
    editlist(){
      this.dialog.open(CandidatListDialogComponent,{
      width:'30%',
  
      }).afterClosed().subscribe(val=>{
        if(val === 'update'){
        //  this.getAllLists();
          }
      })
      }
      deletelist(){
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

