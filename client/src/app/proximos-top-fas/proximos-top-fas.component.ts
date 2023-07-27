import { Component } from '@angular/core';

import { ProximosTopFasModel } from 'src/shared/models/proximos-top-fas.model'
import { ProximosTopFasService } from './proximos-top-fas.service'

@Component({
  selector: 'app-proximos-top-fas',
  templateUrl: './proximos-top-fas.component.html',
  providers: [ProximosTopFasService],
  styleUrls: ['./proximos-top-fas.component.css']
})
export class ProximosTopFasComponent {
  constructor(private proximosTopFasService: ProximosTopFasService) {}

  listaProximos: ProximosTopFasModel[] = [];
  valoresSelecionados: number[] = [];
  feedback = "";

  ngOnInit() {
    this.consultaTopFas();
  }

  consultaTopFas() {
    this.proximosTopFasService.consultaTopFas().subscribe(response => {
      this.listaProximos = response as ProximosTopFasModel[];
    });
  }

  remover() {

  }

  copiarTexto() {
    if (this.valoresSelecionados.length > 0) {
      this.proximosTopFasService.copiarTexto(this.valoresSelecionados, this.listaProximos);
    }
    else {
      this.feedback = "Nenhum item da lista foi selecionado.";
    }
  }

  alternarCheckbox(id: number): void {
    this.feedback = ""
    if (this.valoresSelecionados.includes(id)) {
      this.valoresSelecionados = this.valoresSelecionados.filter((item) => item !== id);
    } else {
      this.valoresSelecionados.push(id);
    }
  }
}
