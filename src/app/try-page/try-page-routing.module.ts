import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TryPagePage } from './try-page.page';

const routes: Routes = [
  {
    path: '',
    component: TryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TryPagePageRoutingModule {}
