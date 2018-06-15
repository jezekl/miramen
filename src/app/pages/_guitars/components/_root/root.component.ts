import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../../services/data.service';
import { filter, takeUntil } from 'rxjs/operators';
import { GuitarGroup } from '../../models/guitar-group';

@Component({
  selector: 'miramen-guitars',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  private _destroy: Subject<null> = new Subject<null>();

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

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this._dataService.getGuitars()
      .pipe(
        takeUntil(this._destroy),
        filter((value: GuitarGroup[] | null) => Array.isArray(value))
      )
      .subscribe((value: GuitarGroup[]) => {
        this._guitarGroups = value;
        this._activeGuitarGroup = value[0];
      });
  }

  ngOnDestroy() {
    this._destroy.next();
  }

}
