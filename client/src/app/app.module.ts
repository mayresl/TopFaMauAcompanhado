import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NovoTopFaComponent } from './novo-top-fa/novo-top-fa.component';

@NgModule({
  declarations: [
    NovoTopFaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NovoTopFaComponent]
})
export class AppModule { }
