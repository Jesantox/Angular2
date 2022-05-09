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

  ngOnInit(): void {
    setTimeout( () => {
      console.log('ngOnInit startado após 5 seg')
    }, 5000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
