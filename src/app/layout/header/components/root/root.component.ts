import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
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
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this._navigation$ = this._dataService.getNavigation();
  }

}
