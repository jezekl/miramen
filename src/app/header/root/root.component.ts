import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'miramen-header',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  @Output() activeChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
