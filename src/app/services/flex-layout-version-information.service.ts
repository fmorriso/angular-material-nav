import { Injectable } from '@angular/core';
//
import { VERSION } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class FlexLayoutVersionInformationService {
  constructor() {}

  public get versionFull(): string {
    if (!VERSION || typeof VERSION === 'undefined') {
      return 'undefined';
    } else {
      return VERSION.full;
    }
  }

  public get version(): any {
    return VERSION;
  }
}
