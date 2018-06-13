import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

export const WINDOW: InjectionToken<any> = new InjectionToken<any>('window');
export const API_URL: InjectionToken<string> = new InjectionToken<string>('API');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: WINDOW, useValue: window },
    { provide: API_URL, useValue: environment.api } //
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
