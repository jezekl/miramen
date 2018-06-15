import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/_root/root.component';
import { PageRoutingModule } from './page-routing.module';
import { SliderModule } from '../../layout/slider/slider.module';
import { HeaderModule } from '../../layout/header/header.module';
import { HomeModule } from '../_home/home.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    SliderModule,
    HeaderModule,
    HomeModule
  ],
  declarations: [
    RootComponent
  ]
})
export class PageModule { }
