import { Component, OnInit } from '@angular/core';
import { AngularVersionInformationService } from '../shared/angular-version-information.service';
import { MaterialVersionInformationService } from '../shared/material-version-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  constructor(
    private ngVersionService: AngularVersionInformationService,
    private matVersionService: MaterialVersionInformationService
  ) {}

  ngOnInit() { }

  public get angularVersion(): string {
    return this.ngVersionService.version.full;
  }

  public get materialVersion(): string {
    return this.matVersionService.version.full;
  }
}
