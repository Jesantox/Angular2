import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  @Input() usuario: string = 'João'
  public idade: number = 19
  public checked: boolean = true
  public imgSRC: string = 'https://img.icons8.com/color/344/heart-rainbow.png'

  constructor() { }

  ngOnInit(): void {
  }

  public aumentarIdade(): void {
    this.idade++
  }

  public alertaInfo() {
    alert('notificaçãozinhaa')
  }

  public alertar(valor: string) {
    alert(valor)
  }

}
