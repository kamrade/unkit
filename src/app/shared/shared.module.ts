import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoModule } from './logo/logo.module';
import { ButtonModule } from './button/button.module';
import { ContainerModule } from './container/container.module';
import { PanelModule } from './panel/panel.module';
import {IconsModule} from './icons/icons.module';
import {PageModule} from './page/page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    LogoModule,
    ContainerModule,
    PanelModule,
    IconsModule,
    PageModule,
  ],
  exports: [
    ButtonModule,
    LogoModule,
    ContainerModule,
    PanelModule,
    IconsModule,
    PageModule,
  ]
})
export class SharedModule { }
