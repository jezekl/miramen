import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIButtonModule } from 'mcrai-ui';
import { RouterModule } from '@angular/router';

import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    McRAIButtonModule
  ],
  declarations: [
    RootComponent,
    NavigationComponent
  ],
  exports: [
    RootComponent
  ]
})
export class HeaderModule { }
