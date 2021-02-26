import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestresultPageRoutingModule } from './testresult-routing.module';

import { TestresultPage } from './testresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestresultPageRoutingModule
  ],
  declarations: [TestresultPage]
})
export class TestresultPageModule {}
