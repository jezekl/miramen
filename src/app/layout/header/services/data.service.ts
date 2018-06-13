import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NavLink } from '../../../models/nav-link';
import { BaseService } from '../../../models/base-service';

export const NAVIGATION: NavLink[] = [
  {
    name: 'Home',
    url: '/home'
  }, {
    name: 'Kytary',
    url: '/kytary'
  }, {
    name: 'O mně',
    url: '/o-mne'
  }, {
    name: 'Kontakt',
    url: '/kontakt'
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  public getNavigation(): Observable<NavLink[]> {
    const endpoint = this.buildUrl([]);

    return of(NAVIGATION);
  }

}
