import { Routes } from '@angular/router';

import { CandidatComponent } from '../../candidat/candidat/candidat.component';
import { CandidatListComponent } from '../../candidat-list/candidat-list/candidat-list.component';
import { UrnesComponent } from '../../urnes/urnes/urnes.component';
import { ElecteurComponent } from '../../electeur/electeur/electeur.component';
import { AdminComponent } from '../../admin/admin/admin.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CandidatList1Component } from '../../candidat/candidat-list/candidat-list1/candidat-list1.component';
import { CandidatList2Component } from '../../candidat/candidat-list/candidat-list2/candidat-list2.component';
import { CandidatList3Component } from '../../candidat/candidat-list/candidat-list3/candidat-list3.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'candidatvote', component: CandidatComponent },
    { path: 'candidat-list', component: CandidatListComponent },
    { path: 'electeur', component: ElecteurComponent },
    { path: 'urnes', component: UrnesComponent },
    
    {path: 'candidat1', component: CandidatList1Component},
    {path: 'candidat2', component: CandidatList2Component},
    {path: 'candidat3', component: CandidatList3Component},
];
