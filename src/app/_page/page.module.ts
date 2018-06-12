import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/_root/root.component';
import { PageRoutingModule } from './page-routing.module';
import { SliderModule } from '../slider/slider.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    SliderModule
  ],
  declarations: [
    RootComponent
  ]
})
export class PageModule { }
