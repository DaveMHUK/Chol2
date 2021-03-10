import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: '', redirectTo: 'testresults', pathMatch: 'full' },
  { path: 'recipes',
    children: [
      { path: '', loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)},
      { path: ':recipeId', loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule) }
    ]},
  { path: 'testresults',
    children: [
      { path: '', loadChildren: () => import('./testresults/testresults.module').then( m => m.TestresultsPageModule) },
      { path: ':testresultId', loadChildren: () => import('./testresults/testresult-detail/testresult-detail.module').then( m => m.TestresultDetailPageModule) }
    ]},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule) },
  { path: 'chart', loadChildren: () => import('./chart/chart.module').then( m => m.ChartPageModule) },
  { path: 'ratio', loadChildren: () => import('./ratio/ratio.module').then( m => m.RatioPageModule) },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
