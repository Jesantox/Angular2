import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.scss']
})
export class TextoComponent implements OnInit, OnChanges {

  @Input() public title: string = 'ngOnChanges'; // Valor padrão da variável
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Título alterado com sucesso !')
  }

}
