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
import { AdminCreateComponent } from '../../admin/admin-create/admin-create.component';
import { AdminUpdateComponent } from '../../admin/admin-update/admin-update.component';
import { CandidatComponent } from '../../candidat/candidat/candidat.component';
import { CandidatCreateComponent } from '../../candidat/candidat-create/candidat-create.component';
import { CandidatUpdateComponent } from '../../candidat/candidat-update/candidat-update.component';
import { CandidatListComponent } from '../../candidat-list/candidat-list/candidat-list.component';
import { CandidatListCreateComponent } from '../../candidat-list/candidat-list-create/candidat-list-create.component';
import { CandidatListUpdateComponent } from '../../candidat-list/candidat-list-update/candidat-list-update.component';
import { ElecteurComponent } from '../../electeur/electeur/electeur.component';
import { ElecteurCreateComponent } from '../../electeur/electeur-create/electeur-create.component';
import { ElecteurUpdateComponent } from '../../electeur/electeur-update/electeur-update.component';
import { UrnesComponent } from '../../urnes/urnes.component';
import { VoteComponent } from '../../vote/vote/vote.component';
import { VoteCreateComponent } from '../../vote/vote-create/vote-create.component';
import { VoteUpdateComponent } from '../../vote/vote-update/vote-update.component';


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
    AdminCreateComponent,
    AdminUpdateComponent,
    //candidat
    CandidatComponent,
    CandidatCreateComponent,
    CandidatUpdateComponent,
    //candidat-list
    CandidatListComponent,
    CandidatListCreateComponent,
    CandidatListUpdateComponent,
    //electeur
    ElecteurComponent,
    ElecteurCreateComponent,
    ElecteurUpdateComponent,
    //urnes
    UrnesComponent,
    //vote
    VoteComponent,
    VoteCreateComponent,
    VoteUpdateComponent,

  ]
})

export class AdminLayoutModule {}
