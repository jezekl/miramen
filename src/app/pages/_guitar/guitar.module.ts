import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { McRAIButtonModule, McRAIGridModule, McRAIIconModule, McRAIListModule, McRAIMediaModule } from 'mcrai-ui';

import { RootComponent } from './components/_root/root.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    McRAIListModule,
    McRAIButtonModule,
    McRAIIconModule,
    McRAIGridModule,
    McRAIMediaModule
  ],
  declarations: [
    RootComponent
  ],
  exports: [
    RootComponent
  ]
})
export class GuitarModule { }
