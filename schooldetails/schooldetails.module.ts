import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchooldetailsPageRoutingModule } from './schooldetails-routing.module';

import { SchooldetailsPage } from './schooldetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchooldetailsPageRoutingModule
  ],
  declarations: [SchooldetailsPage]
})
export class SchooldetailsPageModule {}
