import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchooldetailsPage } from './schooldetails.page';

const routes: Routes = [
  {
    path: '',
    component: SchooldetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchooldetailsPageRoutingModule {}
