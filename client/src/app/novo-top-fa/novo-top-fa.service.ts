import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NovoTopFaService {
  constructor(private http: HttpClient) {}

  //const options: {} = { responseType: 'text' as 'text', withCredentials: false };

  async incluirTopFa(obj: Object) {
    const source$ = this.http.post('/api/TopFa', obj, { responseType: 'text' as 'text', withCredentials: false });
    const response = await firstValueFrom(source$);
    return response;
  }

  consultaTopFas () {
    return this.http.get('/api/ProximosTopFas');
  }
}