import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovoTopFaComponent } from './novo-top-fa/novo-top-fa.component';
import { ProximosTopFasComponent } from './proximos-top-fas/proximos-top-fas.component';
import { Pagina404Component } from './pagina404/pagina404.component'
import { urlLista} from '../assets/listagemConfig'

const routes: Routes = [
  { path: '', component: NovoTopFaComponent },
  { path: urlLista, component: ProximosTopFasComponent },
  { path: '**', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
