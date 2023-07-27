import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { NovoTopFaService } from './novo-top-fa.service';

@Component({
  selector: 'app-novo-top-fa',
  templateUrl: './novo-top-fa.component.html',
  providers: [NovoTopFaService],
  styleUrls: ['./novo-top-fa.component.css']
})
export class NovoTopFaComponent {
  constructor(private httpClient: HttpClient, private topFaService: NovoTopFaService) {}
  formInvalid = false;
  feedback = "";
  opcoes: any = [];

  ngOnInit(){
    this.httpClient.get("assets/opcoes-top-fa.json").subscribe(data =>{
      this.opcoes = (data as any).opcoes;
    })
  }

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
}
