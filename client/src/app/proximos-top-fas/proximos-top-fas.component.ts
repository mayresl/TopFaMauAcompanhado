import { Component } from '@angular/core';

import { OpcoesTopFa } from 'src/assets/opcoes-top-fa';
import { ProximosTopFasModel } from 'src/shared/models/proximos-top-fas.model';
import { ProximosTopFasService } from './proximos-top-fas.service';

@Component({
  selector: 'app-proximos-top-fas',
  templateUrl: './proximos-top-fas.component.html',
  providers: [ProximosTopFasService],
  styleUrls: ['./proximos-top-fas.component.css'],
})
export class ProximosTopFasComponent {
  constructor(private proximosTopFasService: ProximosTopFasService) {}

  listaProximos: ProximosTopFasModel[] = [];
  selecionados: ProximosTopFasModel[] = [];
  valoresSelecionados: number[] = [];
  feedback = '';
  opcoes = OpcoesTopFa;
  checkboxTodos = false;

  ngOnInit() {
    this.consultaTopFas('');
  }

  consultaTopFas(topfa: string) {
    this.proximosTopFasService.consultaTopFas(topfa).subscribe({
      next: (res) => {
        this.listaProximos = res as ProximosTopFasModel[];
        this.valoresSelecionados = [];
        this.checkboxTodos = false;
      },
      error: () => {
        this.feedback =
          'Erro ao consultar a lista. Por favor, tente novamente.';
      },
    });
  }

  copiaTexto() {
    this.selecionados = [];
    if (this.validaTabela()) {
      this.proximosTopFasService.copiaTexto(this.selecionados);
      this.feedback = 'Texto copiado.';
    }
  }

  async removeTopFas() {
    this.selecionados = [];
    if (this.validaTabela()) {
      this.proximosTopFasService.removeTopFas(this.selecionados).subscribe({
        next: (res) => {
          this.feedback = res.replaceAll('"', '');
          this.valoresSelecionados = [];
          this.checkboxTodos = false;
        },
        error: () => {
          this.feedback =
            'Erro ao remover top fã(s). Por favor, tente novamente.';
        },
      });
      this.consultaTopFas('');
    }
  }

  alternaCheckbox(id: number): void {
    this.feedback = '';
    if (this.valoresSelecionados.includes(id)) {
      this.valoresSelecionados = this.valoresSelecionados.filter(
        (item) => item !== id,
      );
    } else {
      this.valoresSelecionados.push(id);
    }
  }

  validaTabela() {
    if (this.valoresSelecionados.length > 0) {
      this.filtraSelecao();
      return true;
    } else {
      this.feedback = 'Nenhum item da lista foi selecionado.';
      return false;
    }
  }

  filtraSelecao() {
    this.valoresSelecionados.forEach((id) => {
      var aItem = this.listaProximos.filter((p) => p._id == id);
      if (aItem.length > 0) {
        this.selecionados.push(aItem[0]);
      }
    });
  }

  marcaDesmarcaTodas(evento: any) {
    this.feedback = '';
    if (evento.target.checked) {
      this.listaProximos.forEach((item) => {
        if (!this.valoresSelecionados.includes(item._id)) {
          this.valoresSelecionados.push(item._id);
        }
      });
    } else {
      this.valoresSelecionados = [];
    }
  }

  estaMarcado(id: number) {
    return this.valoresSelecionados.includes(id);
  }
}
