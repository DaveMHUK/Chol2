import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestresultDetailPageRoutingModule } from './testresult-detail-routing.module';

import { TestresultDetailPage } from './testresult-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestresultDetailPageRoutingModule
  ],
  declarations: [TestresultDetailPage]
})
export class TestresultDetailPageModule {}
