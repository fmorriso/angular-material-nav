import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
//
// DEPRECATED: import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

//DEPRECATED import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonModule } from '@angular/material/button';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

// DEPRECATED: import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';c
import { MatCardModule } from '@angular/material/card';

// DEPRECATED: import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

// DEPRECATED: import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatChipsModule } from '@angular/material/chips';

import { MatDatepickerModule } from '@angular/material/datepicker';

// DEPRECATED import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import {MatDialogModule} from '@angular/material/dialog'

import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

// DEPRECATED: import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
// import { MatIconRegistry } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatTreeModule } from '@angular/material/tree';

//
import { MAT_LEGACY_FORM_FIELD_DEFAULT_OPTIONS as MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/legacy-form-field';
//
import { CommonModule } from '@angular/common';
import { PlatformModule } from '@angular/cdk/platform';
import { CdkTableModule } from '@angular/cdk/table';
import { ObserversModule } from '@angular/cdk/observers';

const materialModules = [
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules, CdkTableModule, ObserversModule, PlatformModule],
  exports: [...materialModules, CdkTableModule, ObserversModule, PlatformModule],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }],
})
export class CustomMaterialModule {}
