import { Component } from '@angular/core';

import { NovoTopFaService } from './novo-top-fa.service';
import { OpcoesTopFa } from 'src/assets/opcoes-top-fa'

@Component({
  selector: 'app-novo-top-fa',
  templateUrl: './novo-top-fa.component.html',
  providers: [NovoTopFaService],
  styleUrls: ['./novo-top-fa.component.css']
})
export class NovoTopFaComponent {
  constructor(private topFaService: NovoTopFaService) {}
  formInvalid = false;
  feedback = "";
  opcoes = OpcoesTopFa;

  async incluiTopFa(nome: string, topfa: string, mensagem: string) {
    if (nome == "" || topfa == "" || mensagem == "") {
      this.formInvalid = true;
    }
    else {
      this.formInvalid = false;
      var obj = {
        nome: nome,
        topfa: topfa,
        mensagem: mensagem
      }
      var r = await this.topFaService.incluirTopFa(obj);
      this.feedback = r.replaceAll("\"", "");
    }   
  }

  limpaFeedback() {
    this.formInvalid = false;
  }
}
