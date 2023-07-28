import { Component } from '@angular/core';

import { ProximosTopFasModel } from 'src/shared/models/proximos-top-fas.model'
import { ProximosTopFasService } from './proximos-top-fas.service'
import { OpcoesTopFa } from 'src/assets/opcoes-top-fa'

@Component({
  selector: 'app-proximos-top-fas',
  templateUrl: './proximos-top-fas.component.html',
  providers: [ProximosTopFasService],
  styleUrls: ['./proximos-top-fas.component.css']
})
export class ProximosTopFasComponent {
  constructor(private proximosTopFasService: ProximosTopFasService) {}

  listaProximos: ProximosTopFasModel[] = [];
  selecionados: ProximosTopFasModel[] = [];
  valoresSelecionados: number[] = [];
  feedback = "";
  opcoes = OpcoesTopFa;
  checkboxTodos = false;

  ngOnInit() {
    this.consultaTopFas("");
  }

  consultaTopFas(topfa: string) {
    this.proximosTopFasService.consultaTopFas(topfa).subscribe(response => {
      this.listaProximos = response as ProximosTopFasModel[];
      this.valoresSelecionados = [];
      this.checkboxTodos = false;
    });
  }

  copiarTexto() {
    this.selecionados = [];
    if (this.validarTabela()) {
      this.proximosTopFasService.copiarTexto(this.selecionados);
      this.feedback = ""
    }
  }

  async remover() {
    this.selecionados = [];
    if (this.validarTabela()) {
      var r = await this.proximosTopFasService.remover(this.selecionados);
      this.feedback = r.replaceAll("\"", ""); 
      this.consultaTopFas("");     
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

  validarTabela() {
    if (this.valoresSelecionados.length > 0) {
      this.filtrarSelecao();
      return true;
    }
    else {
      this.feedback = "Nenhum item da lista foi selecionado.";
      return false;
    }
  }

  filtrarSelecao() {    
    this.valoresSelecionados.forEach(id => {
      var aItem = this.listaProximos.filter(p => p._id == id);
      if (aItem.length > 0) {
        this.selecionados.push(aItem[0]);
      }
    });
  }

  marcarDesmarcarTodas(evento: any) {
    if (evento.target.checked) {
      this.listaProximos.forEach(item => {
        if (!this.valoresSelecionados.includes(item._id)) {
          this.valoresSelecionados.push(item._id);
        }
      });
    }
    else {
      this.valoresSelecionados = [];
    }
  }

  estaMarcado(id: number) {
    return this.valoresSelecionados.includes(id);
  }
}
