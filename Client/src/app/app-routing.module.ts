import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VoteFrontpageComponent } from './vote/vote-frontpage/vote-frontpage.component';
import { VoteListComponent } from './vote/vote-list/vote-list.component';
import { VotePersonDetailsComponent } from './vote/vote-person-details/vote-person-details.component';
import { VoteSuccessComponent } from './vote/vote-success/vote-success.component';
import { VoteType1Component } from './vote/vote-type1/vote-type1.component';
import { VoteType2Component } from './vote/vote-type2/vote-type2.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full',},
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"votefront", component: VoteFrontpageComponent},
  {path:"vote1", component: VoteType1Component},
  {path:"vote2", component: VoteType2Component},
  {path:"votelist", component: VoteListComponent},
  {path:"voteperson", component: VotePersonDetailsComponent},
  {path:"votesuccess", component: VoteSuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
