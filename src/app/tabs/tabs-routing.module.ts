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
        path: 'mydetails',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'testresults',
        children: [
          {
            path: '',
            loadChildren: () => import('../testresults/testresults.module').then(m => m.TestresultsPageModule)
          },
          {
            path: ':testresultId',
            loadChildren: () => import('../testresults/testresult-detail/testresult-detail.module').then(m => m.TestresultDetailPageModule)
          }
        ]
      },
      {
        path: 'chart',
        loadChildren: () => import('../chart/chart.module').then(m => m.ChartPageModule)
      },
      {
        path: 'ratio',
        loadChildren: () => import('../ratio/ratio.module').then(m => m.RatioPageModule)
      },

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
