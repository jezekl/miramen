import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { Guitar } from '../../../_guitars/models/guitar';

@Component({
  selector: 'miramen-guitar',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnChanges {
  @ViewChild('page') page: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;

  @Input() activeGuitar: Guitar;

  get height() {
    return this.page ? Math.round(this.page.nativeElement.offsetHeight - 220) : 0;
  }

  get infoStyles() {
    const DEFAULT_WIDTH = 1000;

    if (this.page) {
      const width = this.page.nativeElement.offsetWidth - this.activeGuitar.images[1].width - 40;

      return {
        width: width + 'px',
        paddingRight: width - DEFAULT_WIDTH + 'px'
      };
    } else {
      return {
        width: DEFAULT_WIDTH + 'px',
        paddingRight: 0
      };
    }
  }

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('activeGuitar') && this.wrapper) {
      this.wrapper.nativeElement.scrollLeft = 0;
    }
  }

  public onPan(event): void {
    this.wrapper.nativeElement.scrollLeft -= (event.velocityX * 15);
  }

}
