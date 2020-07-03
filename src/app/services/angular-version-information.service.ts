import { Injectable, VERSION } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularVersionInformationService {
  get versionFull(): string {
    if (!VERSION || typeof VERSION === 'undefined') {
      return 'undefined';
    } else {
      return VERSION.full;
    }
  }

  get version(): any {
    return VERSION;
  }

  constructor() { }
}
