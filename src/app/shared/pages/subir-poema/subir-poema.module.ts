import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirPoemaPageRoutingModule } from './subir-poema-routing.module';

import { SubirPoemaPage } from './subir-poema.page';
import { ImageUploadComponent } from '../../../components/image-upload/image-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirPoemaPageRoutingModule
  ],
  declarations: [SubirPoemaPage, ImageUploadComponent],
  exports: [ImageUploadComponent]
})
export class SubirPoemaPageModule {}
