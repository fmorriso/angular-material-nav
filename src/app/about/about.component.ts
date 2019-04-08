import { Component, OnInit } from '@angular/core';
import { AngularVersionInformationService } from '../shared/angular-version-information.service';
import { MaterialVersionInformationService } from '../shared/material-version-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  angularVersion: string;
  materialVersion: string;

  constructor(
    private ngVersionService: AngularVersionInformationService,
    private matVersionService: MaterialVersionInformationService
  ) {}

  ngOnInit() {
    console.log(this.ngVersionService.versionFull);
    this.angularVersion = this.ngVersionService.version.full;//  this.ngVersionService.versionFull;
    //this.ngVersionService.version.full;


    this.materialVersion = this.matVersionService.versionFull;
  }
}
