import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Abdelaziz Ketti'},
  {id: 2, name: 'Leyla Hamrouni'},
  {id: 3, name: 'Hassan Omri'},
  {id: 4, name: 'Sabrine Guintini'},
  {id: 5, name: 'Abderrazek Ben Mahmoud'},
  {id: 6, name: 'Leyla Guezguez'},
  {id: 7, name: 'Kais Mathlouthi'},
  {id: 8, name: 'Amel Mazzeh'},
  ];
@Component({
  selector: 'app-votelist2',
  templateUrl: './votelist2.component.html',
  styleUrls: ['./votelist2.component.css']
})
export class Votelist2Component implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
