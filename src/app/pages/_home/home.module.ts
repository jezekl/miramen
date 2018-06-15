import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { McRAIButtonModule } from 'ui';

import { RootComponent } from './components/_root/root.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    McRAIButtonModule
  ],
  declarations: [
    RootComponent
  ],
  exports: [
    RootComponent
  ]
})
export class HomeModule { }
