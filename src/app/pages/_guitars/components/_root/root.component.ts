import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import { GuitarGroup } from '../../models/guitar-group';
import { fadeInStaggerAnimation } from '../../../../utility/animations/fade-in-stagger';

@Component({
  selector: 'miramen-guitars',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [
    fadeInStaggerAnimation
  ]
})
export class RootComponent implements OnInit, OnDestroy {
  private _destroy: Subject<null> = new Subject<null>();

  @ViewChild('page') page;

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

  get previewStyles() {
    const guitar = this._activeGuitarGroup.guitars[0].images[0];
    const height = Math.round(this.page.nativeElement.offsetHeight - 270);
    const width = Math.round(height / (guitar.height / 2) * guitar.width);

    return {
      width: width + 'px',
      height: height + 'px'
    };
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
