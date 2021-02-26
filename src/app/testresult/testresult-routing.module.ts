import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestresultPage } from './testresult.page';

const routes: Routes = [
  {
    path: '',
    component: TestresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestresultPageRoutingModule {}
