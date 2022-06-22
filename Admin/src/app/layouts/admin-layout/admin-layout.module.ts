import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { AdminComponent } from '../../admin/admin/admin.component';
import { AdminDialogComponent } from '../../admin/admin-dialog/admin-dialog.component';

import { CandidatComponent } from '../../candidat/candidat/candidat.component';
import { CandidatDialogComponent } from '../../candidat/candidat-dialog/candidat-dialog.component';

import { CandidatListComponent } from '../../candidat-list/candidat-list/candidat-list.component';
import { CandidatListDialogComponent } from '../../candidat-list/candidat-list-dialog/candidat-list-dialog.component';

import { CandidatList1Component } from '../../candidat/candidat-list/candidat-list1/candidat-list1.component';
import { CandidatList2Component } from '../../candidat/candidat-list/candidat-list2/candidat-list2.component';
import { CandidatList3Component } from '../../candidat/candidat-list/candidat-list3/candidat-list3.component';

import { CandidatList1DialogComponent } from '../../candidat/candidat-list/candidat-list1-dialog/candidat-list1-dialog.component';
import { CandidatList2DialogComponent } from '../../candidat/candidat-list/candidat-list2-dialog/candidat-list2-dialog.component';
import { CandidatList3DialogComponent } from '../../candidat/candidat-list/candidat-list3-dialog/candidat-list3-dialog.component';

import { ElecteurComponent } from '../../electeur/electeur/electeur.component';
import { ElecteurDialogComponent } from '../../electeur/electeur-dialog/electeur-dialog.component';

import { UrnesComponent } from '../../urnes/urnes/urnes.component';
import { UrnesDialogComponent } from '../../urnes/urnes-dialog/urnes-dialog.component';


import { ResultComponent } from '../../result/result.component';
import { PrivilegeComponent } from '../../privilege/privilege.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    // * MATERIAL IMPORTS
    MatRippleModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,




  ],
  declarations: [
    DashboardComponent,
    //admin
    AdminComponent,
    AdminDialogComponent,
    //candidat
    CandidatComponent,
    CandidatDialogComponent,
    //candidat-list
    CandidatListComponent,
    CandidatListDialogComponent,
    CandidatList1Component,
    CandidatList2Component,
    CandidatList3Component,
    CandidatList1DialogComponent,
    CandidatList2DialogComponent,
    CandidatList3DialogComponent,
    //electeur
    ElecteurComponent,
    ElecteurDialogComponent,
    //urnes
    UrnesComponent,
    UrnesDialogComponent,
   
    ResultComponent,
    PrivilegeComponent,


  ],
  exports: [
    AdminComponent,
    CandidatComponent,
    CandidatListComponent,
    ElecteurComponent,
    UrnesComponent,
    ResultComponent,
  ]

})

export class AdminLayoutModule {}
