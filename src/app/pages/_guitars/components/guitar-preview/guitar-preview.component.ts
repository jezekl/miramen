import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Guitar } from '../../models/guitar';

@Component({
  selector: 'miramen-guitar-preview',
  templateUrl: './guitar-preview.component.html',
  styleUrls: ['./guitar-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuitarPreviewComponent implements OnInit {

  @Input() guitar: Guitar;

  constructor() { }

  ngOnInit() {
  }

}
