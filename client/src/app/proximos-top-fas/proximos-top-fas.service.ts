import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard'
import { firstValueFrom } from 'rxjs';

import { ProximosTopFasModel } from 'src/shared/models/proximos-top-fas.model'

@Injectable()
export class ProximosTopFasService {
  constructor(private http: HttpClient, private clipboard: Clipboard) {}

  consultaTopFas(topfa: string) {
    let params = new HttpParams().set('topfa', topfa);
    return this.http.get('/api/ProximosTopFas', { params: params});
  }

  copiarTexto(selecionados: ProximosTopFasModel[]) {
    var texto = "";
    selecionados.forEach(item => {      
        texto += item.nome + ": " + item.mensagem + "\n";
    });
    this.clipboard.copy(texto);
  }

  async remover(selecionados: ProximosTopFasModel[]) {
    const source$ = this.http.put('/api/TopFas', selecionados, { responseType: 'text' as 'text', withCredentials: false });
    const response = await firstValueFrom(source$);
    return response;
  }
}