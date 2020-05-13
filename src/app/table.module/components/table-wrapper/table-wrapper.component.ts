import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {TableDataInterface} from '../../../table-data.interface';
import {Observable, Subject} from 'rxjs';
import {TableService} from '../../table.service';
import {takeUntil, tap} from 'rxjs/operators';
import {HeaderNames} from '../../../header.const';

@Component({
  selector: 'app-cell-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableWrapperComponent implements OnInit, OnDestroy {
  tableData$: Observable<TableDataInterface[]>;
  destroySubject$: Subject<boolean> = new Subject<boolean>();
  addNewItemMode: boolean = false;
  readonly cellKeysNames = HeaderNames;

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    this.tableData$ = this.getAllTableData();
  }

  toggleAddItemMode() {
    this.addNewItemMode = !this.addNewItemMode;
  }

  getAllTableData(): Observable<TableDataInterface[]> {
    return this.tableService.getAllTableData();
  }

  addNewItemForTable(data) {
    if (data === null) {
      this.addNewItemMode = false;
      return;
    }
    this.tableService.addTableItem(data).pipe(
      takeUntil(this.destroySubject$),
      tap(() => {
          this.tableData$ = this.tableService.getAllTableData();
          console.log(this.tableData$);
        }
      )
    ).subscribe();
  }

  updateCellInTable(data, newValue, key) {
    data[key] = newValue;
    this.updateItemInTable(data);
  }

  updateItemInTable(data: TableDataInterface) {
    this.tableService.putTableItem(data.cowId, data).pipe(
      takeUntil(this.destroySubject$),
      tap(() => {
          this.tableData$ = this.tableService.getAllTableData();
          console.log(this.tableData$);
        }
      )
    ).subscribe();
  }

  deleteItem(id: string) {
    this.tableService.deleteTableItem(id).pipe(
      takeUntil(this.destroySubject$),
      tap(() => {
          this.tableData$ = this.tableService.getAllTableData();
        }
      )
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }
}
