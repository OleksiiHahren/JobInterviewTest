import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TableDataInterface} from '../table-data';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {
  }

  getAllTableData(): Observable<any> {
    return this.http.get('/get-data');
  }

  putTableItem() {

  }

  addTableItem() {

  }

  deleteTableItem(idnx: number) {

  }
}
