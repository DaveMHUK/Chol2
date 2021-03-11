import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPage } from '../landing/landing.page';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('../landing/landing.module').then(m => m.LandingPageModule)
      },
      {
        path: 'testresults',
        loadChildren: () => import('../testresults/testresults.module').then(m => m.TestresultsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
