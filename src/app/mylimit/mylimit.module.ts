import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MylimitPageRoutingModule } from './mylimit-routing.module';

import { MylimitPage } from './mylimit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MylimitPageRoutingModule
  ],
  declarations: [MylimitPage]
})
export class MylimitPageModule {}
