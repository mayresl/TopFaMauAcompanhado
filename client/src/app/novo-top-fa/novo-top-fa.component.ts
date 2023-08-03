import { Component } from '@angular/core';

import { NovoTopFaService } from './novo-top-fa.service';
import { OpcoesTopFa } from 'src/assets/opcoes-top-fa';

@Component({
  selector: 'app-novo-top-fa',
  templateUrl: './novo-top-fa.component.html',
  providers: [NovoTopFaService],
  styleUrls: ['./novo-top-fa.component.css'],
})
export class NovoTopFaComponent {
  constructor(private topFaService: NovoTopFaService) {}
  formInvalid = false;
  feedback = '';
  opcoes = OpcoesTopFa;
  formulario = {
    nome: '',
    topfa: '',
    mensagem: '',
  };

  incluiTopFa() {
    if (
      this.formulario.nome == '' ||
      this.formulario.topfa == '' ||
      this.formulario.mensagem == ''
    ) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      var obj = {
        nome: this.formulario.nome,
        topfa: this.formulario.topfa,
        mensagem: this.formulario.mensagem,
      };
      this.topFaService.incluiTopFa(obj).subscribe({
        next: (res) => {
          this.feedback = res.replaceAll('"', '');
        },
        error: () => {
          this.feedback = 'Erro ao inserir top fã. Por favor, tente novamente.';
        },
      });
      this.limpaFormulario();
    }
  }

  limpaFeedback() {
    this.formInvalid = false;
  }

  limpaFormulario() {
    this.formulario = {
      nome: '',
      topfa: '',
      mensagem: '',
    };
  }
}
