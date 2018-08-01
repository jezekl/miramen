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
        url: 'grand-concert-cocobolo-italian-spruce',
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
            path: 'assets/images/GRAND_CONCERT_COCOBOLO_ITALIAN_SMRK.png',
            width: 411,
            height: 719 // 1438
          }, {
            path: 'assets/images/GRAND_CONCERT_COCOBOLO_ITALIAN_SMRK_1.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/GRAND_CONCERT_COCOBOLO_ITALIAN_SMRK_2.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/GRAND_CONCERT_COCOBOLO_ITALIAN_SMRK_3.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/GRAND_CONCERT_COCOBOLO_ITALIAN_SMRK_4.jpg',
            width: 450,
            height: 690
          }
        ]
      }, {
        name: 'Grand concert Mahagon cedr',
        url: 'grand-concert-mahagon-cedr',
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
            path: 'assets/images/GRAND_CONCERT_MAHAGON_CEDR.png',
            width: 411,
            height: 719
          }, {
            path: 'assets/images/GRAND_CONCERT_MAHAGON_CEDR_1.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/GRAND_CONCERT_MAHAGON_CEDR_2.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/GRAND_CONCERT_MAHAGON_CEDR_3.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/GRAND_CONCERT_MAHAGON_CEDR_4.jpg',
            width: 450,
            height: 690
          }
        ]
      }, {
        name: 'Grand concert Ovangkol Engelmann spruce',
        url: 'grand-concert-ovangkol-engelmann-spruce',
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
            path: 'assets/images/GRAND_CONCERT_OVANGKOL_ENGELMANN_SMRK.png',
            width: 411,
            height: 719
          }, {
            path: 'assets/images/GRAND_CONCERT_OVANGKOL_ENGELMANN_SMRK_1.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/GRAND_CONCERT_OVANGKOL_ENGELMANN_SMRK_2.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/GRAND_CONCERT_OVANGKOL_ENGELMANN_SMRK_3.jpg',
            width: 450,
            height: 690
          }
        ]
      }, {
        name: 'Jumbo 1',
        url: 'jumbo-1',
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
            path: 'assets/images/JUMBO1.png',
            width: 411,
            height: 719
          }, {
            path: 'assets/images/JUMBO1_1.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/JUMBO1_2.jpg',
            width: 570,
            height: 690
          }, {
            path: 'assets/images/JUMBO1_3.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/JUMBO1_4.jpg',
            width: 450,
            height: 690
          }
        ]
      }, {
        name: 'Jumbo 2',
        url: 'jumbo-2',
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
            path: 'assets/images/JUMBO2.png',
            width: 411,
            height: 719
          }, {
            path: 'assets/images/JUMBO2_1.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/JUMBO2_2.jpg',
            width: 450,
            height: 690
          }
        ]
      }, {
        name: 'Jumbo 3',
        url: 'jumbo-3',
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
            path: 'assets/images/JUMBO3.png',
            width: 411,
            height: 719
          }, {
            path: 'assets/images/JUMBO3_1.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/JUMBO3_2.jpg',
            width: 570,
            height: 690
          }, {
            path: 'assets/images/JUMBO3_3.jpg',
            width: 450,
            height: 690
          }
        ]
      }
    ]
  }, {
    name: 'Elektrické',
    guitars: [
      {
        name: 'Electric Guitar 1',
        url: 'electric-guitar-1',
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
            path: 'assets/images/ELECTRIC1.png',
            width: 411,
            height: 719
          }, {
            path: 'assets/images/ELECTRIC1_1.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/ELECTRIC1_2.jpg',
            width: 570,
            height: 690
          }
        ]
      }, {
        name: 'Electric Guitar 2',
        url: 'electric-guitar-2',
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
            path: 'assets/images/ELECTRIC2.png',
            width: 411,
            height: 719
          }, {
            path: 'assets/images/ELECTRIC2_1.jpg',
            width: 450,
            height: 690
          }, {
            path: 'assets/images/ELECTRIC2_2.jpg',
            width: 570,
            height: 690
          }
        ]
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class GuitarService extends BaseService {

  public getGuitars(): Observable<GuitarGroup[]> {
    return of(GUITAR_GROUPS);
  }

}
