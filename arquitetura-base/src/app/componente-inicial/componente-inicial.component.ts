import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-inicial',
  templateUrl: './componente-inicial.component.html',
  styleUrls: ['./componente-inicial.component.scss']
})
export class ComponenteInicialComponent implements OnInit {

  public title: string = 'Você conseguiu gerar o primeiro componente !!'

  constructor() { }

  ngOnInit(): void {
  }

}
