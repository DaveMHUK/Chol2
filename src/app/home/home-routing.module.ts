import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: "landing",
        children: [
          {
            path: '',
            loadChildren: () =>
              import("../landing/landing.module").then((m) =>
              m.LandingPageModule),
          },
        ],
      },
      {
        path: "testresults",
        children: [
          {
            path: '',
            loadChildren: () =>
              import("../testresults/testresults.module").then((m) =>
              m.TestresultsPageModule),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/testresults',
    pathMatch: 'full,'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
