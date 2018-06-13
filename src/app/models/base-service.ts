import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { API_URL } from '../app.module';

export abstract class BaseService {

  constructor(
    private _http: HttpClient,
    @Inject(API_URL) private _apiUrl: string
  ) { }

  private _handleError(response: HttpErrorResponse, url: string) {
    console.error(response, url);

    return throwError(response); // TODO extract message
  }

  private _buildPath(path: string | string[]): string {
    return typeof path === 'string' ? path : path.join('/');
  }

  private _processGetParams(get: Object): string {
    const parts = [];

    Object.keys(get).forEach((prop) => {
      const val = get[prop];
      if (val) {
        if (val instanceof Array) {
          let string = val.reduce((sum, value) => {
            sum.push(`${prop}[]=` + encodeURI(value));
            return sum;
          }, []);
          parts.push(string.join('&'));
        } else {
          parts.push(`${prop}=` + encodeURI(get[prop]));
        }
      }
    });

    return parts.length ? '?' + parts.join('&') : '';
  }

  protected buildUrl(path: string | string[], params: Object = {}): string {
    return this._apiUrl + this._buildPath(path) + this._processGetParams(params);
  }

  protected get<T>(url: string): Observable<T> {
    return this._http
      .get<T>(url)
      .pipe(
        catchError(response => this._handleError(response, url))
      );
  }

  protected post<T>(url: string, body: any | null): Observable<T> {
    return this._http
      .post<T>(url, body)
      .pipe(
        catchError(response => this._handleError(response, url))
      );
  }

  protected patch<T>(url: string, body: any): Observable<T> {
    return this._http
      .patch<T>(url, body)
      .pipe(
        catchError(response => this._handleError(response, url))
      );
  }

  protected del<T>(url: string): Observable<T> {
    return this._http
      .delete<T>(url)
      .pipe(
        catchError(response => this._handleError(response, url))
      );
  }

}
