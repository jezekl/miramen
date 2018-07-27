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

  @HostBinding('@scale') state = 'inactive';

  @Input() guitar: Guitar;
  @Input() dimensions: { width: number, height: number };

  constructor() { }

  ngOnInit() { }

  @HostListener('mouseenter')
  public onEnter(): void {
    this.state = 'active';
  }

  @HostListener('mouseleave')
  public onLeave(): void {
    this.state = 'inactive';
  }

}
