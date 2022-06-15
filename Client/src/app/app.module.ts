import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VoteType1Component } from './vote/vote-type1/vote-type1.component';
import { VoteType2Component } from './vote/vote-type2/vote-type2.component';
import { VoteListComponent } from './vote/vote-list/vote-list.component';
import { VoteSuccessComponent } from './vote/vote-success/vote-success.component';
import { VotePersonDetailsComponent } from './vote/vote-person-details/vote-person-details.component';
import { VoteFrontpageComponent } from './vote/vote-frontpage/vote-frontpage.component';


import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VoteType3Component } from './vote/vote-type3/vote-type3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VoteType1Component,
    VoteType2Component,
    VoteListComponent,
    VoteSuccessComponent,
    VotePersonDetailsComponent,
    VoteFrontpageComponent,
    VoteType3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

     // * MATERIAL IMPORTS

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
     MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatTableModule]
})
export class AppModule { }
