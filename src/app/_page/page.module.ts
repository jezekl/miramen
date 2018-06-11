import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './components/_root/root.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [
    RootComponent
  ]
})
export class PageModule { }
