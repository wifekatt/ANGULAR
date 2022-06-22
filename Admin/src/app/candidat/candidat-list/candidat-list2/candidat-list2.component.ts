import { Component, OnInit , ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CandidatList2DialogComponent } from '../candidat-list2-dialog/candidat-list2-dialog.component';
import { AdminApiService } from '../../../services/admin-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  id: number;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Abdelaziz Ketti'},
  {id: 2, name: 'Leyla Hamrouni'},
  {id: 3, name: 'Hassan Omri'},
  {id: 4, name: 'Sabrine Guintini'},
  {id: 5, name: 'Abderrazek Ben Mahmoud'},
  {id: 6, name: 'Leyla Guezguez'},
  {id: 7, name: 'Kais Mathlouthi'},
 {id: 8, name: 'Amel Mazzeh'},
];
@Component({
  selector: 'app-candidat-list2',
  templateUrl: './candidat-list2.component.html',
  styleUrls: ['./candidat-list2.component.css']
})
export class CandidatList2Component implements OnInit {

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
    this.dialog.open(CandidatList2DialogComponent, {
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
    this.dialog.open(CandidatList2DialogComponent,{
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





