import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

const SHARED = [
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatChipsModule,
    MatDividerModule,
    MatSidenavModule,
    MatTabsModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ].concat(SHARED),
    exports: [].concat(SHARED)
})
export class MaterialModule {
}
