import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
