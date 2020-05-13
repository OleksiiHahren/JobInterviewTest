import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {TableDataInterface} from './table-data.interface';
import {fakeDataTable} from './fake-table-data';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptorService implements HttpInterceptor {
  private tableData: TableDataInterface[] = fakeDataTable.result;

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'GET' && request.url.includes('get-data')) {
      return of(new HttpResponse({status: 200, body: this.tableData}));
    } else if (request.method === 'POST' && request.url.includes('post-data')) {
      this.tableData = [request.body, ...this.tableData];
      return of(new HttpResponse({
        status: 200, body: this.tableData.push(request.body)
      }));
    } else if (request.method === 'PUT' && request.url.includes('put-data')) {
      this.tableData.find((el: TableDataInterface, index) => {
        if (el.animalId === request.body.id) {
          this.tableData[index] = request.body;
          return true;
        }
      });
      return of(new HttpResponse({
        status: 200, body: this.tableData
      }));
    } else if (request.method === 'DELETE' && request.url.includes('delete-data')) {
      const id = request.params.get('id');
      this.tableData = [...this.tableData.filter(el => el.cowId !== id)];
      return of(new HttpResponse({
        status: 200, body: this.tableData
      }));
    }
    next.handle(request);
  }
}
