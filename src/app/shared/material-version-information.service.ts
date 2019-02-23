import { Injectable } from '@angular/core';
import { VERSION } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialVersionInformationService {
  public get versionFull(): string {
    if (!VERSION || typeof VERSION === 'undefined') {
      return 'undefined';
    } else {
      return VERSION.full;
    }
  }

  constructor() {}
}
