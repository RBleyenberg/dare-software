import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./static/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./static/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'modules-menu',
    loadChildren: () => import('./modules-menu/modules.module').then(m => m.ModulesMenuModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     useHash: true,
     scrollPositionRestoration: 'enabled' 
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
