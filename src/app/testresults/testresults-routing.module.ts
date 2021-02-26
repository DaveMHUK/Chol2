import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestresultsPage } from './testresults.page';

const routes: Routes = [
  {
    path: '',
    component: TestresultsPage
  },
  {
    path: 'testresult-detail',
    loadChildren: () => import('./testresult-detail/testresult-detail.module').then( m => m.TestresultDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestresultsPageRoutingModule {}
