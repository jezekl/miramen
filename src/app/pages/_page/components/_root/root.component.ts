import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { debounceTime, filter, map, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

import { NavLink } from '../../../../models/nav-link';
import { NavigationService } from '../../../../layout/header/services/navigation.service';
import { Guitar } from '../../../_guitars/models/guitar';
import { GuitarService } from '../../../_guitars/services/guitar.service';
import { GuitarGroup } from '../../../_guitars/models/guitar-group';

@Component({
  selector: 'miramen-page',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  private _destroy: Subject<null> = new Subject<null>();

  private _navigation: NavLink[] = [];

  private _verticalActiveIndex = 0;
  get verticalActiveIndex(): number {
    return this._verticalActiveIndex;
  }

  private _horizontalActiveIndex = 0;
  get horizontalActiveIndex(): number {
    return this._horizontalActiveIndex;
  }

  private _guitarGroups: GuitarGroup[];
  get guitarGroups(): GuitarGroup[] {
    return this._guitarGroups;
  }

  private _activeGuitarGroup: GuitarGroup;
  set activeGuitarGroup(value: GuitarGroup) {
    this._activeGuitarGroup = value;
  }
  get activeGuitarGroup(): GuitarGroup {
    return this._activeGuitarGroup;
  }

  private _activeGuitar: Guitar;
  set activeGuitar(value: Guitar) {
    this._activeGuitar = value;
  }
  get activeGuitar(): Guitar {
    return this._activeGuitar;
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _navigationService: NavigationService,
    private _guitarsService: GuitarService,
    private _elRef: ElementRef,
    private _router: Router
  ) { }

  ngOnInit() {
    this._navigationService.getNavigation()
      .pipe(
        takeUntil(this._destroy)
      )
      .subscribe(value => this._navigation = value);

    this._guitarsService.getGuitars()
      .pipe(
        takeUntil(this._destroy),
        filter((value: GuitarGroup[] | null) => Array.isArray(value))
      )
      .subscribe((value: GuitarGroup[]) => {
        this._guitarGroups = value;
        this._activeGuitarGroup = value[0];
      });

    this._activatedRoute.params
      .pipe(
        takeUntil(this._destroy),
        filter((value: Params) => value.hasOwnProperty('verticalRoute')),
        map((value: Params) => value.verticalRoute)
      )
      .subscribe(value => {
        const index = this._navigation.findIndex(link => link.url.replace('/', '') === value);

        this._verticalActiveIndex = index === -1 ? 0 : index;
      });

    this._activatedRoute.params
      .pipe(
        takeUntil(this._destroy),
        filter((value: Params) => value.hasOwnProperty('horizontalRoute')),
        map((value: Params) => value.horizontalRoute)
      )
      .subscribe(value => {
        if (value) {
          this._horizontalActiveIndex = 1;
          this._activeGuitar = this._activeGuitarGroup.guitars.find(guitar => guitar.url === value);
        } else {
          this._horizontalActiveIndex = 0;
        }
      });

    fromEvent(this._elRef.nativeElement, 'mousewheel')
      .pipe(
        takeUntil(this._destroy),
        debounceTime(100)
      )
      .subscribe((event: any) => {
        let nextIndex = this._verticalActiveIndex;
        switch (true) {
          case event.deltaY > 0 && this._verticalActiveIndex < this._navigation.length - 1:
            nextIndex = this._verticalActiveIndex + 1;
            break;
          case event.deltaY < 0 && this._verticalActiveIndex > 0:
            nextIndex = this._verticalActiveIndex - 1;
            this._verticalActiveIndex--;
            break;
        }

        this._router.navigateByUrl(this._navigation[nextIndex].url);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
  }

}
