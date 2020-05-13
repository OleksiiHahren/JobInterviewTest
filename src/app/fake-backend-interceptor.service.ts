import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {TableDataInterface} from './table-data';
import {fakeDataTable} from './fake-table-data';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptorService implements HttpInterceptor {
  private tableData: TableDataInterface[] = fakeDataTable.result;

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    if (request.method === 'GET' && request.url.includes('get-data')) {
      debugger
      return of(new HttpResponse({status: 200, body: this.tableData}));
    }
    next.handle(request);
  }
}
