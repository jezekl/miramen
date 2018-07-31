import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Guitar } from '../../../_guitars/models/guitar';

@Component({
  selector: 'miramen-guitar',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  @ViewChild('page') page;

  @Input() activeGuitar: Guitar;

  get height() {
    return this.page ? Math.round(this.page.nativeElement.offsetHeight - 220) : 0;
  }

  constructor() { }

  ngOnInit() { }

}
