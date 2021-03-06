import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true
  public heightPX: string = '20px'
  public backgroundColor: string = 'red'
  public nome: string = ''
  public list: Array<{nome: string}> = [
    {nome: 'José'}
  ]
  public date:Date = new Date()

  public title = "Pequeno teste para os títulos e pipes";
  public pi = 3.14159265359;
 
  public jsonObj = {
    nome: 'Dener',
    sobrenome: 'Troquatte',
    idade: 30,
    endereco: {
      a1: 'São Paulo',
      a2: 'Brasil'
    }
  };
 
  public diasSemana = ['Segunda','Terça','Quarta','Quinta','Sexta','Sabado','Domingo'];

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.valor) {
        this.valor = false
      } else {
        this.valor = true
      }

      if(this.heightPX == '20px') {
        this.heightPX = '50px';
        this.backgroundColor = 'blue'
      } else {
        this.heightPX = '20px';
        this.backgroundColor = 'red'
      }
    }, 2000)
  }

  public salvar() {
      this.list.push( {nome: this.nome} )
      this.nome = ''
  }
}
