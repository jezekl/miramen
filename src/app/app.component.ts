import { Component } from '@angular/core';

import { fadeInAnimation } from './utility/animation/fade-in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInAnimation
  ]
})
export class AppComponent { }
