import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule
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
