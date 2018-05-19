import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import {AccountsService} from "./accounts.service";
import {LoggingService} from "./logging.service";

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
