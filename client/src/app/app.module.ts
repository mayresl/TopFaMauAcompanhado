import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NovoTopFaComponent } from './novo-top-fa/novo-top-fa.component';
import { ProximosTopFasComponent } from './proximos-top-fas/proximos-top-fas.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoTopFaComponent,
    ProximosTopFasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
