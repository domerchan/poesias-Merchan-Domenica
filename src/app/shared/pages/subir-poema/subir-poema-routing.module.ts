import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirPoemaPage } from './subir-poema.page';

const routes: Routes = [
  {
    path: '',
    component: SubirPoemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirPoemaPageRoutingModule {}
