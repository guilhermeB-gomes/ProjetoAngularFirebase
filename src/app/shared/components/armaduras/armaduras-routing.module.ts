import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmadurasPage } from './armaduras.page';

const routes: Routes = [
  {
    path: '',
    component: ArmadurasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmadurasPageRoutingModule {}
