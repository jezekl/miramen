import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'miramen-page',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    timer(1000).subscribe(() => this.activeIndex = 1);
  }

}
