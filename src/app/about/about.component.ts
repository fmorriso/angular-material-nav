import { Component, OnInit, VERSION as ngv} from '@angular/core';
import { VERSION as matv } from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  angularVersion: string = ngv.full;
  materialVersion: string = matv.full;
  constructor() {}

  ngOnInit() {}
}
