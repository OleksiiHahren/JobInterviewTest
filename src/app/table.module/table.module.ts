import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './components/form/form.component';
import {CellComponent} from './components/cell/cell.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FormComponent, CellComponent, TableWrapperComponent],
  exports: [FormComponent, CellComponent, TableWrapperComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    ReactiveFormsModule
  ]
})
export class TableFeatureModule {
}
