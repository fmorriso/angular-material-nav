import { Component, OnInit } from '@angular/core';
//
import { Tile } from './tile';

@Component({
    selector: 'app-picture-grid',
    templateUrl: './picture-grid.component.html',
    styleUrls: ['./picture-grid.component.scss'],
    standalone: false
})
export class PictureGridComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
