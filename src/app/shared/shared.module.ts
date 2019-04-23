import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { HttpClientModule } from '@angular/common/http';

const SHARED = [
    MapComponent,
    OrderByPipe
];

@NgModule({
    declarations: [].concat(SHARED),
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [].concat(SHARED)
})
export class SharedModule {
}
