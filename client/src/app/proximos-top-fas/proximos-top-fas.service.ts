import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard'

import { ProximosTopFasModel } from 'src/shared/models/proximos-top-fas.model'

@Injectable()
export class ProximosTopFasService {
  constructor(private http: HttpClient, private clipboard: Clipboard) {}

  consultaTopFas () {
    return this.http.get('/api/ProximosTopFas');
  }

  copiarTexto (valoresSelecionados: number[], listaProximos: ProximosTopFasModel[]) {
    var texto = "";
    valoresSelecionados.forEach(id => {
      var aItem = listaProximos.filter(p => p._id == id);
      if (aItem.length > 0) {
        var item = aItem[0];
        texto += item.nome + ": " + item.mensagem + "\n";
      }
    });
    this.clipboard.copy(texto);
  }
}