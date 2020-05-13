import {Component, OnInit} from '@angular/core';
import {HeaderNames, TableDataInterface} from '../../../table-data';
import {Observable} from 'rxjs';
import {TableService} from '../../table.service';

@Component({
  selector: 'app-cell-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css']
})
export class TableWrapperComponent implements OnInit {
  tableData$: Observable<TableDataInterface[]>;
  readonly cellKeysNames = Object.keys(HeaderNames);

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    this.tableData$ = this.tableService.getAllTableData();
    console.log(this.tableData$);
  }

  saveNewValueForCell(newValue: string, key: string, indx: number): void {

  }
}
