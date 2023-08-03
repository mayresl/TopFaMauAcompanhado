import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NovoTopFaComponent } from './novo-top-fa/novo-top-fa.component';
import { ProximosTopFasComponent } from './proximos-top-fas/proximos-top-fas.component';
import { Pagina404Component } from './pagina404/pagina404.component';

@NgModule({
  declarations: [AppComponent, NovoTopFaComponent, ProximosTopFasComponent, Pagina404Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
