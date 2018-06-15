import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseService } from '../../../models/base-service';
import { GuitarGroup } from '../models/guitar-group';

export const GUITAR_GROUPS: GuitarGroup[] = [
  {
    name: 'Steel guitar',
    guitars: [
      {
        name: 'Guitar 1',
        description: '',
        params: []
      }, {
        name: 'Guitar 2',
        description: '',
        params: []
      }, {
        name: 'Guitar 3',
        description: '',
        params: []
      }, {
        name: 'Guitar 4',
        description: '',
        params: []
      }, {
        name: 'Guitar 5',
        description: '',
        params: []
      }, {
        name: 'Guitar 6',
        description: '',
        params: []
      }, {
        name: 'Guitar 7',
        description: '',
        params: []
      }, {
        name: 'Guitar 8',
        description: '',
        params: []
      }, {
        name: 'Guitar 9',
        description: '',
        params: []
      }
    ]
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
