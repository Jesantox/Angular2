import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  public condition: boolean = true
  public conditionClick: boolean = true
  public nome: string = 'teste1'

  public list: Array<{nome: string, idade: number}> = [
    { nome: "Teste01", idade: 20},
    { nome: "Teste02", idade: 10},
    { nome: "Teste03", idade: 30}
  ]
  constructor() { }

  ngOnInit(): void {

    // irá ocultar e exibir o elemento após 2 segundos 
    setInterval(() => {
      if (this.condition) {
        this.condition = false
      } else {
        this.condition = true
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  public addUserList() {
    this.list.push({ nome: 'carlos', idade: 25 })
  }

  public removeLastUserList() {
    this.list.splice(-1)
  }

  public removerComClick(event: number) {
    this.list.splice(event, 1)
  }

}