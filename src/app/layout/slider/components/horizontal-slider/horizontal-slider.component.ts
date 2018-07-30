import { Component, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { WINDOW } from '../../../../app.module';

@Component({
  selector: 'miramen-horizontal-slider',
  templateUrl: './horizontal-slider.component.html',
  styleUrls: ['./horizontal-slider.component.scss']
})
export class HorizontalSliderComponent implements OnInit, OnChanges {

  @Input() activeIndex: number;

  constructor(
    @Inject(WINDOW) private _window: Window,
    private _renderer: Renderer2,
    private _elRef: ElementRef
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('activeIndex')) {
      this._setSliderOffset(this._calculateSliderOffset());
    }
  }

  private _setSliderOffset(offset: number): void {
    this._renderer.setStyle(this._elRef.nativeElement, 'transform', `translateX(${ offset }px)`);
  }

  private _calculateSliderOffset(): number {
    return -this._window.innerWidth * this.activeIndex;
  }

}
