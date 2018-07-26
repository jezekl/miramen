import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

import { Guitar } from '../../models/guitar';
import { scaleAnimation } from '../../../../utility/animations/scale';

@Component({
  selector: 'miramen-guitar-preview',
  templateUrl: './guitar-preview.component.html',
  styleUrls: ['./guitar-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    scaleAnimation
  ]
})
export class GuitarPreviewComponent implements OnInit {

  @HostBinding('style.background-image') image;
  @HostBinding('@scale') state = 'inactive';

  @Input() guitar: Guitar;

  constructor() { }

  ngOnInit() {
    this.image = `url(${this.guitar.images[0].path})`;
  }

  @HostListener('mouseenter')
  public onEnter(): void {
    this.state = 'active';
  }

  @HostListener('mouseleave')
  public onLeave(): void {
    this.state = 'inactive';
  }

}
