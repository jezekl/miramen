import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const NAVIGATION = [
  {
    name: 'page 1'
  }, {
    name: 'page 2'
  }, {
    name: 'page 3'
  }, {
    name: 'page 4'
  }
];

@Component({
  selector: 'miramen-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigation = NAVIGATION;

  @Output() activeChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

}
