import { Component, OnInit } from '@angular/core';
// services
import { AngularVersionInformationService } from '../services/angular-version-information.service';
import { MaterialVersionInformationService } from '../services/material-version-information.service';
import { FlexLayoutVersionInformationService } from '../services/flex-layout-version-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(
    private readonly ngVersionService: AngularVersionInformationService,
    private readonly matVersionService: MaterialVersionInformationService,
    private readonly fxLayoutVersionService: FlexLayoutVersionInformationService
  ) {
  }

  get angularVersion(): string {
    return this.ngVersionService.version.full;
  }

  get materialVersion(): string {
    return this.matVersionService.version.full;
  }

  get flexLayoutVersion(): string {
    return this.fxLayoutVersionService.versionFull;
  }

  ngOnInit(): void {
  }
}
