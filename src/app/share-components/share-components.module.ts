import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './components/form/form.component';
import {CellComponent} from './components/cell/cell.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { HeaderCellComponent } from './components/header-cell/header-cell.component';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [FormComponent, CellComponent, TableWrapperComponent, HeaderCellComponent],
  exports: [FormComponent, CellComponent, TableWrapperComponent],
  imports: [
    CommonModule,
    ScrollingModule
  ]
})
export class TableFeatureModule {
}
