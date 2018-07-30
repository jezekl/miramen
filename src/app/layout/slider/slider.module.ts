import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';
import { SlideComponent } from './components/slide/slide.component';
import { HorizontalSliderComponent } from './components/horizontal-slider/horizontal-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VerticalSliderComponent,
    SlideComponent,
    HorizontalSliderComponent
  ],
  exports: [
    VerticalSliderComponent,
    SlideComponent,
    HorizontalSliderComponent
  ]
})
export class SliderModule { }
