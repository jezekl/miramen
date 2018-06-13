import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NavLink } from '../../../../models/nav-link';
import { DataService } from '../../../../layout/header/services/data.service';

@Component({
  selector: 'miramen-page',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  private _destroy: Subject<null> = new Subject<null>();

  private _navigation: NavLink[] = [];

  private _activeIndex = 0;
  get activeIndex(): number {
    return this._activeIndex;
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this._dataService.getNavigation()
      .pipe(
        takeUntil(this._destroy)
      )
      .subscribe(value => this._navigation = value);

    this._activatedRoute.params
      .pipe(
        takeUntil(this._destroy),
        filter((value: Params) => value.hasOwnProperty('verticalRoute')),
        map((value: Params) => value.verticalRoute)
      )
      .subscribe(value => {
        const index = this._navigation.findIndex(link => link.url.replace('/', '') === value);

        this._activeIndex = index === -1 ? 0 : index;
      });
  }

  ngOnDestroy() {
    this._destroy.next();
  }

}
