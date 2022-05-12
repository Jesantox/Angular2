import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente-inicial',
  templateUrl: './componente-inicial.component.html',
  styleUrls: ['./componente-inicial.component.scss']
})
export class ComponenteInicialComponent implements OnInit, OnChanges {

  public title: string = 'texto padrão do componente-inicial';
  @Input() public idade: string = '12'

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

}
