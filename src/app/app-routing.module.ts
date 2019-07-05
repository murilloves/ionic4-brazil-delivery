import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'demands', loadChildren: './demands/demands.module#DemandsPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'demand-detail', loadChildren: './demand-detail/demand-detail.module#DemandDetailPageModule' },
  { path: 'demand-action', loadChildren: './demand-action/demand-action.module#DemandActionPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
