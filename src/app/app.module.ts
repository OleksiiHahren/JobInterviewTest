import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TableFeatureModule} from './table.module/table.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FakeBackendInterceptorService} from './fake-backend-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableFeatureModule,
    HttpClientModule
      ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
