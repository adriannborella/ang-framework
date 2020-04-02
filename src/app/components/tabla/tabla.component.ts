import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  selected:boolean;
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { selected: false, position: 1, name: 'AFGANO'},
  { selected: false, position: 2, name: 'ALBINO'},
  { selected: false, position: 3, name: 'BALINES'},
  { selected: false, position: 4, name: 'BAVARO'},
  { selected: false, position: 5, name: 'BEAGLE'},
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'selected', 'name'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
