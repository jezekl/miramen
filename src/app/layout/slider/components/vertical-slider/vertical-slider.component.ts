import {
  AfterContentInit,
  Component,
  ContentChildren, ElementRef,
  EventEmitter,
  Inject,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList, Renderer2, SimpleChanges
} from '@angular/core';

import { SlideComponent } from '../slide/slide.component';
import { WINDOW } from '../../../../app.module';
import { fromEvent, Subject } from 'rxjs';
import { startWith, takeUntil, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'miramen-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss']
})
export class VerticalSliderComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges {
  private _destroy: Subject<null> = new Subject<null>();

  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent> = new QueryList<SlideComponent>();

  @Input() activeIndex: number;

  @Output() activeIndexChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    @Inject(WINDOW) private _window: Window,
    private _renderer: Renderer2,
    private _elRef: ElementRef
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this._destroy.next();
  }

  ngAfterContentInit() {
    fromEvent(this._window, 'resize')
      .pipe(
        takeUntil(this._destroy),
        startWith(null),
        throttleTime(100)
      )
      .subscribe(() => {
        const width = this._window.innerWidth + 'px';
        const height = this._window.innerHeight + 'px';

        this._resizeSlides(width, height);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('activeIndex')) {
      this._setSliderOffset(this._calculateSliderOffset());
    }
  }

  private _resizeSlides(width: string, height: string): void {
    this.slides.forEach(slide => this._resizeSlide(slide.hostElement, width, height));
  }

  private _resizeSlide(slide: HTMLElement, width: string, height: string): void {
    this._renderer.setStyle(slide, 'width', width);
    this._renderer.setStyle(slide, 'height', height);
  }

  private _setSliderOffset(offset: number): void {
    this._renderer.setStyle(this._elRef.nativeElement, 'transform', `translateY(${ offset }px)`);
  }

  private _calculateSliderOffset(): number {
    return -this._window.innerHeight * this.activeIndex;
  }

}
