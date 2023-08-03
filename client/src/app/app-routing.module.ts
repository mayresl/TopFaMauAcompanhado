import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovoTopFaComponent } from './novo-top-fa/novo-top-fa.component';
import { ProximosTopFasComponent } from './proximos-top-fas/proximos-top-fas.component';

const routes: Routes = [
  { path: '', component: NovoTopFaComponent },
  { path: 'listagem', component: ProximosTopFasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
