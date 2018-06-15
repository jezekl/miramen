import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseService } from '../../../models/base-service';
import { GuitarGroup } from '../models/guitar-group';

export const GUITAR_GROUPS: GuitarGroup[] = [
  {
    name: 'Steel guitar',
    guitars: []
  }, {
    name: 'Nylon guitar',
    guitars: []
  }, {
    name: 'Electric guitar',
    guitars: []
  }, {
    name: 'Jazz guitar',
    guitars: []
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  public getGuitars(): Observable<GuitarGroup[]> {
    return of(GUITAR_GROUPS);
  }

}
