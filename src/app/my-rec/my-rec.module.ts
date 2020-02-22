import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRecPageRoutingModule } from './my-rec-routing.module';

import { MyRecPage } from './my-rec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRecPageRoutingModule
  ],
  declarations: [MyRecPage]
})
export class MyRecPageModule {}
