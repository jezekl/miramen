import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/_root/root.component';
import { PageRoutingModule } from './page-routing.module';
import { SliderModule } from '../../layout/slider/slider.module';
import { HeaderModule } from '../../layout/header/header.module';
import { HomeModule } from '../_home/home.module';
import { AboutMeModule } from '../_about-me/about-me.module';
import { ContactModule } from '../_contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    SliderModule,
    HeaderModule,
    HomeModule,
    AboutMeModule,
    ContactModule
  ],
  declarations: [
    RootComponent
  ]
})
export class PageModule { }
