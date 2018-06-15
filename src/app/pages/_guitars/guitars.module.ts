import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIButtonModule } from 'ui';

import { RootComponent } from './components/_root/root.component';
import { SelectGuitarGroupComponent } from './components/select-guitar-group/select-guitar-group.component';

@NgModule({
  imports: [
    CommonModule,
    McRAIButtonModule
  ],
  declarations: [
    RootComponent,
    SelectGuitarGroupComponent
  ],
  exports: [
    RootComponent
  ]
})
export class GuitarsModule { }
