import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoemasPage } from './poemas.page';

const routes: Routes = [
  {
    path: '',
    component: PoemasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoemasPageRoutingModule {}
