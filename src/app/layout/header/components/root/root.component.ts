import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NavigationService } from '../../services/navigation.service';
import { NavLink } from '../../../../models/nav-link';

@Component({
  selector: 'miramen-header',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  private _navigation$: Observable<NavLink[]>;
  get navigation$(): Observable<NavLink[]> {
    return this._navigation$;
  }

  constructor(
    private _navigationService: NavigationService
  ) { }

  ngOnInit() {
    this._navigation$ = this._navigationService.getNavigation();
  }

}
