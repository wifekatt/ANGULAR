import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'home',  icon: 'home', class: '' },
    { path: '/urnes', title: 'Ballot boxes',  icon:'dashboard', class: '' },
    { path: '/candidat-list', title: 'Candidate lists',  icon:'library_books', class: '' },
    { path: '/admin', title: 'Admins',  icon:'supervisor_account', class: '' },
    //{ path: '/privilege', title: 'admin privilege',  icon:'stars', class: '' },
    { path: '/electeur', title: 'Users',  icon:'people', class: '' },
   // { path: '/result', title: 'results',  icon:'print', class: '' },
    
    
  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems!: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
