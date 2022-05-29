import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';


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
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatGridListModule,
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
