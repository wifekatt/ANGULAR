import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Karim Hleli'},
  {id: 2, name: 'Kaouther Soualhi'},
  {id: 3, name: 'Selim Bohli'},
  {id: 4, name: 'Selima Arous'},
  {id: 5, name: 'JamelAbdennasser Ouardeine'},
  {id: 6, name: 'Manel Rhouma'},
  {id: 7, name: 'Mohammed Sabri Ben Maiz'},
  {id: 8, name: 'Amel Gargouri'},
  ];
@Component({
  selector: 'app-votelist3',
  templateUrl: './votelist3.component.html',
  styleUrls: ['./votelist3.component.css']
})
export class Votelist3Component implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
