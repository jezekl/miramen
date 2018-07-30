import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RootComponent } from './components/_root/root.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    RootComponent
  ],
  exports: [
    RootComponent
  ]
})
export class GuitarModule { }
