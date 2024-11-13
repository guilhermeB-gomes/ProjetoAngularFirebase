import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspadasPageRoutingModule } from './espadas-routing.module';

import { EspadasPage } from './espadas.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspadasPageRoutingModule,
    MenuModule
  ],
  declarations: [EspadasPage]
})
export class EspadasPageModule {}
