import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmadurasPageRoutingModule } from './armaduras-routing.module';

import { ArmadurasPage } from './armaduras.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmadurasPageRoutingModule,
    MenuModule
  ],
  declarations: [ArmadurasPage]
})
export class ArmadurasPageModule {}
