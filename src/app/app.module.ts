import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import 'hammerjs';

export const WINDOW: InjectionToken<any> = new InjectionToken<any>('window');
export const API_URL: InjectionToken<string> = new InjectionToken<string>('API');

@Injectable()
export class HammerConfig extends HammerGestureConfig { }

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
    { provide: API_URL, useValue: environment.api },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
