import { Injectable, VERSION } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularVersionInformationService {
  public get versionFull(): string {
    if (!VERSION || typeof VERSION === 'undefined') {
      return 'undefined';
    } else {
      return VERSION.full;
    }
  }

  constructor() {}
}
