import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VerticalSliderComponent,
    SlideComponent
  ],
  exports: [
    VerticalSliderComponent,
    SlideComponent
  ]
})
export class SliderModule { }
