import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsContainerComponent } from './web/settings-container.component';


const routes: Routes = [
  {
    path: '',
    component: SettingsContainerComponent,
    data: { title: 'menu.settings' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}