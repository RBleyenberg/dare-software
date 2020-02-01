import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'HOME.TITLE' }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
