import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ElecteurDialogComponent } from '../electeur-dialog/electeur-dialog.component';
import { ElecteurService } from '../../service/electeur.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  electeurID: number;
  FullName: string;
  Email: string;
  Telephone: String;
  CIN : number;
  Pid:string;
  Zip_code:string;
  Bank_code:string;
  Language:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {electeurID: 1, FullName: 'wifek attia',Email: 'wifek.attia.2000@gmail.com',Telephone: '54121703',CIN:14019029, Pid : '120', Zip_code:"5000", Bank_code:'1458741102', Language:'EN'},
  {electeurID: 2, FullName: 'sami hamdaoui',Email: 'samihamdaoui997@gmail.com',Telephone: '29839350',CIN:11098740, Pid : '110', Zip_code:"3020", Bank_code:'1125478102', Language:'AR'},
  {electeurID: 3, FullName: 'seli attia',Email: 'seliattia09@gmail.com',Telephone: '23728680',CIN:14241536, Pid : '100', Zip_code:"5020", Bank_code:'1254789654', Language:'FR'},
  {electeurID: 4, FullName: 'essil attia',Email: 'essilat102@gmail.com',Telephone: '94125785',CIN:14241685, Pid : '410', Zip_code:"4000", Bank_code:'1452365487', Language:'EN'},
  {electeurID: 5, FullName: 'rami hamdaoui',Email: 'ramihamdaoui@gmail.com',Telephone: '21402574',CIN:10210254, Pid : '140', Zip_code:"3000", Bank_code:'1578411203', Language:'AR'},
];
@Component({
  selector: 'app-electeur',
  templateUrl: './electeur.component.html',
  styleUrls: ['./electeur.component.css']
})
export class ElecteurComponent implements OnInit {

  displayedColumns: string[] = ['id','FullName', 'Email', 'Telephone', 'CIN', 'Pid', 'Zip_code', 'Bank_code', 'Language','action'];
  dataSource= ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog , private electeurApi : ElecteurService) { }

  ngOnInit(): void {
  }
 

  openDialog() {
    this.dialog.open(ElecteurDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
       // this.getAllElecteurs();
        }
    })
  }

 /* getAllElecteurs(){
    this.electeurApi.getElecteurs()
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
  editElecteur(row : any){
    this.dialog.open(ElecteurDialogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
      //  this.getAllElecteurs();
        }
    })
    }
  deleteElecteur(id : number){
    this.electeurApi.deleteElecteur(id)
    .subscribe({
      next:(res)=>{
        alert("electeur deleted successfully");
      //  this.getAllElecteurs();
      },
      error:()=>{
        alert("error while deleting the electeur!!")
      }
    })

  }/*
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
*/
}

