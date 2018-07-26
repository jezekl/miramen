import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseService } from '../../../models/base-service';
import { GuitarGroup } from '../models/guitar-group';

export const GUITAR_GROUPS: GuitarGroup[] = [
  {
    name: 'Akustické',
    guitars: [
      {
        name: 'Grand concert Cocobolo italian spruce',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Cocobolo'
          }, {
            name: 'Top',
            value: 'Italian smrk'
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
            name: 'Lak top',
            value: 'Šelak'
          }, {
            name: 'Lak tělo',
            value: 'Nitro gloss'
          }
        ],
        images: [
          {
            path: 'http://placehold.it/411x719', // 'assets/images/GRAND_CONCERT_COCOBOLO_ITALIAN_SMRK.png',
            width: 411,
            height: 719
          }
        ]
      }, {
        name: 'Grand concert Mahagon cedr',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Mahagon'
          }, {
            name: 'Top',
            value: 'Cedr'
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
            name: 'Lak top',
            value: 'Šelak'
          }, {
            name: 'Lak tělo',
            value: 'Nitro gloss'
          }, {
            name: 'Menzura',
            value: '650mm'
          }
        ],
        images: [
          {
            path: 'http://placehold.it/411x719', // 'assets/images/GRAND_CONCERT_MAHAGON_CEDR.png',
            width: 411,
            height: 719
          }
        ]
      }, {
        name: 'Grand concert Ovangkol Engelmann spruce',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Ovangkol'
          }, {
            name: 'Top',
            value: 'Engelmann smrk'
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
            value: 'Eben a Ziricote'
          }, {
            name: 'Lak',
            value: 'Nitro gloss'
          }
        ],
        images: [
          {
            path: 'http://placehold.it/411x719', // 'assets/images/GRAND_CONCERT_OVANGKOL_ENGELMANN_SMRK.png',
            width: 411,
            height: 719
          }
        ]
      }, {
        name: 'Jumbo 1',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Indiam palisandr'
          }, {
            name: 'Top',
            value: 'Cedr'
          }, {
            name: 'Krk',
            value: 'Mahagon'
          }, {
            name: 'Hmatník',
            value: 'Palisandr'
          }, {
            name: 'Mechanika',
            value: 'Gotoh'
          }, {
            name: 'Lemy',
            value: 'Javor'
          }, {
            name: 'Lak top',
            value: 'Šelak'
          }, {
            name: 'Lak tělo',
            value: 'Nitro gloss'
          }
        ],
        images: [
          {
            path: 'http://placehold.it/411x719', // 'assets/images/JUMBO1.png',
            width: 411,
            height: 719
          }
        ]
      }, {
        name: 'Jumbo 2',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Ovangkol'
          }, {
            name: 'Top',
            value: 'Cedr'
          }, {
            name: 'Krk',
            value: 'Mahagon'
          }, {
            name: 'Hmatník',
            value: 'Palisandr'
          }, {
            name: 'Mechanika',
            value: 'Gotoh'
          }, {
            name: 'Lemy',
            value: 'Palisandr'
          }, {
            name: 'Lak',
            value: 'Nitro gloss'
          }
        ],
        images: [
          {
            path: 'http://placehold.it/411x719', // 'assets/images/JUMBO2.png',
            width: 411,
            height: 719
          }
        ]
      }, {
        name: 'Jumbo 3',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Jasan'
          }, {
            name: 'Top',
            value: 'Javor'
          }, {
            name: 'Krk',
            value: 'Javor'
          }, {
            name: 'Hmatník',
            value: 'Palisandr'
          }, {
            name: 'Mechanika',
            value: 'Palisandr'
          }, {
            name: 'Lak',
            value: 'Nitro gloss'
          }, {
            name: 'Menzura',
            value: '650mm'
          }, {
            name: 'Snímače',
            value: 'Seymour Duncan'
          }, {
            name: 'RM',
            value: 'Pickup'
          }
        ],
        images: [
          {
            path: 'http://placehold.it/411x719', // 'assets/images/JUMBO3.png',
            width: 411,
            height: 719
          }
        ]
      }
    ]
  }, {
    name: 'Elektrické',
    guitars: [
      {
        name: 'Electric Guitar 1',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Olše'
          }, {
            name: 'Top',
            value: 'Mahagon'
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
            name: 'Lak',
            value: 'Nitro gloss'
          }, {
            name: 'Menzura',
            value: '650mm'
          }, {
            name: 'Snímače',
            value: 'RM-pickup'
          }
        ],
        images: [
          {
            path: 'http://placehold.it/411x719', // 'assets/images/ELECTRIC1.png',
            width: 411,
            height: 719
          }
        ]
      }, {
        name: 'Electric Guitar 2',
        description: '',
        params: [
          {
            name: 'Tělo',
            value: 'Jasan'
          }, {
            name: 'Top',
            value: 'Javor'
          }, {
            name: 'Krk',
            value: 'Javor'
          }, {
            name: 'Hmatník',
            value: 'Palisandr'
          }, {
            name: 'Mechanika',
            value: 'Gotoh'
          }, {
            name: 'Lak',
            value: 'Nitro gloss'
          }, {
            name: 'Menzura',
            value: '650mm'
          }, {
            name: 'Snímače',
            value: 'Seymour'
          }, {
            name: 'Duncan RM',
            value: 'Pickup'
          }
        ],
        images: [
          {
            path: 'http://placehold.it/411x719', // 'assets/images/ELECTRIC2.png',
            width: 411,
            height: 719
          }
        ]
      }
    ]
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
