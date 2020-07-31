import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoemasPageRoutingModule } from './poemas-routing.module';

import { PoemasPage } from './poemas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoemasPageRoutingModule
  ],
  declarations: [PoemasPage]
})
export class PoemasPageModule {}
