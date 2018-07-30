import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { GuitarGroup } from '../../models/guitar-group';
import { fadeInStaggerAnimation } from '../../../../utility/animations/fade-in-stagger';
import { scaleAnimation } from '../../../../utility/animations/scale';
import { Guitar } from '../../models/guitar';

@Component({
  selector: 'miramen-guitars',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [
    fadeInStaggerAnimation,
    scaleAnimation
  ]
})
export class RootComponent implements OnInit, OnDestroy {
  private _destroy: Subject<null> = new Subject<null>();

  @ViewChild('page') page;
  @ViewChild('carousel') carousel;

  @Input() guitarGroups: GuitarGroup[];
  @Input() activeGuitarGroup: GuitarGroup;

  @Output() guitarChange: EventEmitter<Guitar> = new EventEmitter<Guitar>();
  @Output() activeGroupChange: EventEmitter<GuitarGroup> = new EventEmitter<GuitarGroup>();

  private _activeIndex: number = 0;

  get previewDimensions() {
    const guitar = this.activeGuitarGroup.guitars[0].images[0];
    const height = Math.round(this.page.nativeElement.offsetHeight - 270);
    const width = Math.round(height / guitar.height * guitar.width);

    return {
      width: width,
      height: height
    };
  }

  get guitarListStyles() {
    return {
      transition: 'transform 250ms cubic-bezier(.25, .8, .25, 1)',
      transform: `translateX(-${this.previewDimensions.width * this._activeIndex}px)`
    };
  }

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() {
    this._destroy.next();
  }

  public isFirst(): boolean {
    return this._activeIndex <= 0;
  }

  public isLast(): boolean {
    if (!this.carousel) {
      return true;
    }

    const visibleCount = this.carousel.nativeElement.offsetWidth / this.previewDimensions.width;
    const indexLimit = this.activeGuitarGroup.guitars.length - visibleCount;

    return this._activeIndex >= indexLimit;
  }

  public prev(): void {
    this._activeIndex = this._activeIndex >= 1 ? Math.floor(this._activeIndex - 1) : 0;
  }

  public next(): void {
    const visibleCount = this.carousel.nativeElement.offsetWidth / this.previewDimensions.width;
    const offset = parseFloat('0.' + visibleCount.toString().split('.')[1]);

    // @ts-ignore
    if (this._activeIndex === parseInt(this._activeIndex, 10) && offset > 0 && offset < 1) {
      this._activeIndex += 1 + (1 - offset);
    } else {
      this._activeIndex++;
    }
  }

  public onActiveGroupChange(event: GuitarGroup): void {
    this.activeGroupChange.emit(event);
    this._activeIndex = 0;
  }

}
