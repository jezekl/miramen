import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseService } from '../../../models/base-service';
import { GuitarGroup } from '../models/guitar-group';

export const GUITAR_GROUPS: GuitarGroup[] = [
  {
    name: 'Steel guitar',
    guitars: [
      {
        name: 'Grand concert Cocobolo italian spruce',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Cocobolo'
          }, {
            name: 'Krk',
            value: 'Mahagon'
          }, {
            name: 'Hmatník',
            value: 'Eben'
          }, {
            name: 'Mechanika',
            value: 'Gotoh'
          }, {
            name: 'Lemy',
            value: 'Eben'
          }, {
            name: 'Lak-Top',
            value: 'Šelak'
          }, {
            name: 'Lak-Tělo',
            value: 'Nitro gloss'
          }
        ],
        images: [
          {
            path: 'assets/images/JUMBO1.png',
            width: 411,
            height: 1438
          }
        ]
      }, {
        name: 'Grand concert Mahagon cedr',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: ''
          }, {
            name: 'Krk',
            value: ''
          }, {
            name: 'Hmatník',
            value: ''
          }, {
            name: 'Mechanika',
            value: ''
          }, {
            name: 'Lemy',
            value: ''
          }, {
            name: 'Lak-Top',
            value: ''
          }, {
            name: 'Lak-Tělo',
            value: ''
          }
        ],
        images: [
          {
            path: 'assets/images/JUMBO3.png',
            width: 411,
            height: 1438
          }
        ]
      }, {
        name: 'Grand concert Mahagon cedr',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: ''
          }, {
            name: 'Krk',
            value: ''
          }, {
            name: 'Hmatník',
            value: ''
          }, {
            name: 'Mechanika',
            value: ''
          }, {
            name: 'Lemy',
            value: ''
          }, {
            name: 'Lak-Top',
            value: ''
          }, {
            name: 'Lak-Tělo',
            value: ''
          }
        ],
        images: [
          {
            path: 'assets/images/ELECTRIC1.png',
            width: 411,
            height: 1438
          }
        ]
      }, {
        name: 'Grand concert Mahagon cedr',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: ''
          }, {
            name: 'Krk',
            value: ''
          }, {
            name: 'Hmatník',
            value: ''
          }, {
            name: 'Mechanika',
            value: ''
          }, {
            name: 'Lemy',
            value: ''
          }, {
            name: 'Lak-Top',
            value: ''
          }, {
            name: 'Lak-Tělo',
            value: ''
          }
        ],
        images: [
          {
            path: 'assets/images/ELECTRIC2.png',
            width: 411,
            height: 1438
          }
        ]
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
