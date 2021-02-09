import { IonicModule } from '@ionic/angular';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Page1PageModule } from '../pages/page1/page1.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    Page1PageModule,
    ComponentsModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
