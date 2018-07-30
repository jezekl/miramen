import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NavLink } from '../../../models/nav-link';
import { BaseService } from '../../../models/base-service';

export const NAVIGATION: NavLink[] = [
  {
    name: 'Home',
    url: '/home'
  }, {
    name: 'O mně',
    url: '/o-mne'
  }, {
    name: 'Kytary',
    url: '/kytary'
  }, {
    name: 'Kontakt',
    url: '/kontakt'
  }
];

@Injectable({
  providedIn: 'root'
})
export class NavigationService extends BaseService {

  public getNavigation(): Observable<NavLink[]> {
    const endpoint = this.buildUrl([]);

    return of(NAVIGATION);
  }

}
