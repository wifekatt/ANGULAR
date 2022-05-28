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


import { CandidatComponent } from '../../candidat/candidat/candidat.component';
import { CandidatListComponent } from '../../candidat-list/candidat-list/candidat-list.component';
import { UrnesComponent } from '../../urnes/urnes.component';
import { VoteComponent } from '../../vote/vote/vote.component';
import { ElecteurComponent } from '../../electeur/electeur/electeur.component';
import { AdminComponent } from '../../admin/admin/admin.component';


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
    AdminComponent,
    CandidatComponent,
    CandidatListComponent,
    ElecteurComponent,
    UrnesComponent,
    VoteComponent,

  ]
})

export class AdminLayoutModule {}
