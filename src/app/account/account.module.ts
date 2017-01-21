import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule, routedComponents } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [routedComponents]
})
export class AccountModule { }
