import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoModule } from './logo/logo.module';
import { ButtonModule } from './button/button.module';
import { ContainerModule } from './container/container.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    LogoModule,
    ContainerModule,
  ],
  exports: [
    ButtonModule,
    LogoModule,
    ContainerModule,
  ]
})
export class SharedModule { }
