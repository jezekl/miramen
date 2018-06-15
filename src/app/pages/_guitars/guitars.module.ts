import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIButtonModule, McRAICarouselModule, McRAIIconModule } from 'ui';

import { RootComponent } from './components/_root/root.component';
import { SelectGuitarGroupComponent } from './components/select-guitar-group/select-guitar-group.component';
import { GuitarPreviewComponent } from './components/guitar-preview/guitar-preview.component';

@NgModule({
  imports: [
    CommonModule,
    McRAIButtonModule,
    McRAICarouselModule,
    McRAIIconModule
  ],
  declarations: [
    RootComponent,
    SelectGuitarGroupComponent,
    GuitarPreviewComponent
  ],
  exports: [
    RootComponent
  ]
})
export class GuitarsModule { }
