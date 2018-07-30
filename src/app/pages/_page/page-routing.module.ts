import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './components/_root/root.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/',
    pathMatch: 'full'
  }, {
    path: ':verticalRoute',
    redirectTo: ':verticalRoute/',
    pathMatch: 'full'
  }, {
    path: ':verticalRoute/:horizontalRoute',
    component: RootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PageRoutingModule { }
