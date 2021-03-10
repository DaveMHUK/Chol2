import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatioPage } from './ratio.page';

const routes: Routes = [
  {
    path: '',
    component: RatioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatioPageRoutingModule {}
