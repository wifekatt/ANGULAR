import { Component, OnInit } from '@angular/core';

export interface Transaction {
  name: string;
  id: number;
}

const ELEMENT_DATA: Transaction[] = [
  {id: 1, name: 'Sahbi Atig'},
  {id: 2, name: 'Mahdi Ben Ayed'},
  {id: 3, name: 'Yosra Bou Selmi'},
  {id: 4, name: 'Abderrazek Hsin'},
  {id: 5, name: 'Wasila Barouni'},
  {id: 6, name: 'Fathi Haj Hamouda'},
  {id: 7, name: 'Jamila Debch'},
  {id: 8, name: 'Ameni Dridri'},
];
@Component({
  selector: 'app-votelist1',
  templateUrl: './votelist1.component.html',
  styleUrls: ['./votelist1.component.css']
})
export class Votelist1Component implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {id: 1, name: 'Sahbi Atig'},
  {id: 2, name: 'Mahdi Ben Ayed'},
  {id: 3, name: 'Yosra Bou Selmi'},
  {id: 4, name: 'Abderrazek Hsin'},
  {id: 5, name: 'Wasila Barouni'},
  {id: 6, name: 'Fathi Haj Hamouda'},
  {id: 7, name: 'Jamila Debch'},
  {id: 8, name: 'Ameni Dridri'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
