import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AccountRoutingModule, routedComponents } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [routedComponents]
})
export class AccountModule { }
