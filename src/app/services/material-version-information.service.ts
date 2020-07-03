import { Injectable } from '@angular/core';
import { VERSION } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialVersionInformationService {
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
