import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIButtonModule, McRAICarouselModule, McRAIIconModule, McRAIMediaModule } from 'mcrai-ui';
import { RouterModule } from '@angular/router';

import { RootComponent } from './components/_root/root.component';
import { SelectGuitarGroupComponent } from './components/select-guitar-group/select-guitar-group.component';
import { GuitarPreviewComponent } from './components/guitar-preview/guitar-preview.component';

@NgModule({
  imports: [
    CommonModule,
    McRAIButtonModule,
    McRAICarouselModule,
    McRAIIconModule,
    McRAIMediaModule,
    RouterModule
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
