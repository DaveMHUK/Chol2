import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestresultsPageRoutingModule } from './testresults-routing.module';

import { TestresultsPage } from './testresults.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestresultsPageRoutingModule
  ],
  declarations: [TestresultsPage]
})
export class TestresultsPageModule {}
