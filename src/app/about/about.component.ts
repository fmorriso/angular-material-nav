import { Component, OnInit } from '@angular/core';
import { AngularVersionInformationService } from '../shared/angular-version-information.service';
import { MaterialVersionInformationService } from '../shared/material-version-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private _angularVersion: string;
  private _materialVersion: string;

  constructor(
    private ngVersionService: AngularVersionInformationService,
    private matVersionService: MaterialVersionInformationService
  ) {}

  ngOnInit() {
    this._angularVersion = this.ngVersionService.version.full;
    this._materialVersion = this.matVersionService.version.full;
  }

  public get angularVersion(): string {
    return this._angularVersion;
  }

  public get materialVersion(): string {
    return this._materialVersion;
  }
}
