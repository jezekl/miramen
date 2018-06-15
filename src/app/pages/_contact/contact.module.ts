import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIListModule } from 'ui';

import { RootComponent } from './components/_root/root.component';

@NgModule({
  imports: [
    CommonModule,
    McRAIListModule
  ],
  declarations: [
    RootComponent
  ],
  exports: [
    RootComponent
  ]
})
export class ContactModule { }
