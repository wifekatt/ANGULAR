import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CandidatDialogComponent } from '../candidat-dialog/candidat-dialog.component';
import { CandidatService } from '../../service/candidat.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  candidatID: number;
  candidatName: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {candidatID: 1, candidatName: 'Nabil Karoui'},
  {candidatID: 2, candidatName: 'Kais Saied'},
  
];

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  displayedColumns: string[] = ['id', 'FullName','action'];
  dataSource= ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog , private CandidatApi : CandidatService) { }

  ngOnInit(): void {
    
  }
 

  openDialog() {
    this.dialog.open(CandidatDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        
        }
    })
  }
/*
  getAllCandidats(){
    this.CandidatApi.getCandidats()
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
  editCandidat(){
    this.dialog.open(CandidatDialogComponent,{
    width:'30%',
    //data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        
        }
    })
    }
  deleteCandidat(){
   /* this.CandidatApi.deleteCandidat(id)
    .subscribe({
      next:(res)=>{
        alert("Candidat deleted successfully");
       
      },
      error:()=>{
        alert("error while deleting the Candidat!!")
      }
    })
*/
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

