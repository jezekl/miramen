import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { debounceTime, filter, map, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

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
    private _dataService: DataService,
    private _elRef: ElementRef,
    private _router: Router
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

    fromEvent(this._elRef.nativeElement, 'mousewheel')
      .pipe(
        takeUntil(this._destroy),
        debounceTime(100)
      )
      .subscribe((event: any) => {
        let nextIndex = this._activeIndex;
        switch (true) {
          case event.deltaY > 0 && this._activeIndex < this._navigation.length - 1:
            nextIndex = this._activeIndex + 1;
            break;
          case event.deltaY < 0 && this._activeIndex > 0:
            nextIndex = this._activeIndex - 1;
            this._activeIndex--;
            break;
        }

        this._router.navigateByUrl(this._navigation[nextIndex].url);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
  }

}
