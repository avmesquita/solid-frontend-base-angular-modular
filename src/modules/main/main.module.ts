import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { WINDOW_PROVIDERS } from './factory/window-token.factory';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [MainComponent]
})
export class MainModule { }
