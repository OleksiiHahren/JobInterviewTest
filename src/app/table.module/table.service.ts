import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TableDataInterface} from '../table-data.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {
  }

  getAllTableData(): Observable<any> {
    return this.http.get('/get-data');
  }

  putTableItem(id: number, data: TableDataInterface) {
    return this.http.put('/put-data', data);
  }

  addTableItem(data: TableDataInterface): Observable<any> {
    return this.http.post('/post-data', data);
  }

  deleteTableItem(id: string) {
    return this.http.delete(`/delete-data`, {params: {id: id}});
  }
}
