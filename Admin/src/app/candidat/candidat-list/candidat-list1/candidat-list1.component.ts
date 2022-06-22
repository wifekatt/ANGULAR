import { Component, OnInit , ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CandidatList1DialogComponent } from '../candidat-list1-dialog/candidat-list1-dialog.component';
import { AdminApiService } from '../../../services/admin-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  id: number;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Sahbi Atig'},
  {id: 2, name: 'Mahdi Ben Ayed'},
  {id: 3, name: 'Yosra Bou Selmi'},
  {id: 4, name: 'Abderrazek Hsin'},
  {id: 5, name: 'Wasila Barouni'},
  {id: 6, name: 'Fathi Haj Hamouda'},
  {id: 7, name: 'Jamila Debch'},
 {id: 8, name: 'Ameni Dridri'},
];
@Component({
  selector: 'app-candidat-list1',
  templateUrl: './candidat-list1.component.html',
  styleUrls: ['./candidat-list1.component.css']
})
export class CandidatList1Component implements OnInit {

  sideBarOpen = true;
  displayedColumns: string[] = ['id','name','action'];
  dataSource= ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog , private adminApi : AdminApiService) {
    
  }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openDialog() {
    this.dialog.open(CandidatList1DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        
        }
    })
  }
/*
  getAllAdmins(){
    this.adminApi.getAdmin()
          .subscribe({
            next:(res)=>{
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
  editAdmin(row : any){
    this.dialog.open(CandidatList1DialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        
        }
    })
    }
  deleteAdmin(id : number){
    
        alert("candidat list deleted successfully");
        
      

  }
  /*
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
*/
}





