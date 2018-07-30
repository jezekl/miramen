import { Component, Input, OnInit } from '@angular/core';

import { Guitar } from '../../../_guitars/models/guitar';

@Component({
  selector: 'miramen-guitar',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  @Input() activeGuitar: Guitar;

  constructor() { }

  ngOnInit() { }

}
