import { Component, Input, OnInit } from '@angular/core';

import { NavLink } from '../../../../models/nav-link';

@Component({
  selector: 'miramen-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() navigation: NavLink[];

  constructor() { }

  ngOnInit() { }

}
