import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TryPagePageRoutingModule } from './try-page-routing.module';

import { TryPagePage } from './try-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TryPagePageRoutingModule
  ],
  declarations: [TryPagePage]
})
export class TryPagePageModule {}
