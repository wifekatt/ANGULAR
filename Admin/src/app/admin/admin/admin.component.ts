import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { AdminApiService } from '../../services/admin-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  adminID: number;
  adminName: string;
  adminPassword: string;
  privilegeID: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {adminID: 1, adminName: 'wifek attia',adminPassword: 'w5055',privilegeID: 1},
  {adminID: 2, adminName: 'sami hamdaoui',adminPassword: 's2012',privilegeID: 2},
  {adminID: 3, adminName: 'naoufel ghalleb',adminPassword: '5412d',privilegeID: 1},
];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sideBarOpen = true;
  displayedColumns: string[] = ['id','FullName', 'Password', 'PrivilegeID','action'];
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
    this.dialog.open(AdminDialogComponent, {
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
    this.dialog.open(AdminDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        
        }
    })
    }
  deleteAdmin(id : number){
    this.adminApi.deleteAdmin(id)
    .subscribe({
      next:(res)=>{
        alert("admin deleted successfully");
        
      },
      error:()=>{
        alert("error while deleting the admin!!")
      }
    })

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









/*
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { AdminService } from '../../service/admin.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['ID','FullName', 'Password', 'PrivilegeID','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog , private adminApi : AdminService) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }
 

  openDialog() {
    this.dialog.open(AdminDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllAdmins();
        }
    })
  }

  getAllAdmins(){
    this.adminApi.getAdmins()
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

  editAdmin(row : any){
    this.dialog.open(AdminDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllAdmins();
        }
    })
    }
  deleteAdmin(id : number){
    this.adminApi.deleteAdmin(id)
    .subscribe({
      next:(res)=>{
        alert("admin deleted successfully");
        this.getAllAdmins();
      },
      error:()=>{
        alert("error while deleting the admin!!")
      }
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

*/