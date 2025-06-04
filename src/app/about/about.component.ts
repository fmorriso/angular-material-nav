import { Component, OnInit } from '@angular/core';
// services
import { AngularVersionInformationService } from '../services/angular-version-information.service';
import { MaterialVersionInformationService } from '../services/material-version-information.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [MatGridListModule]
})
export class AboutComponent implements OnInit {
  constructor(
    private readonly ngVersionService: AngularVersionInformationService,
    private readonly matVersionService: MaterialVersionInformationService
  ) {
  }

  get angularVersion(): string {
    return this.ngVersionService.version.full;
  }

  get materialVersion(): string {
    return this.matVersionService.version.full;
  }

  ngOnInit(): void {
  }
}
