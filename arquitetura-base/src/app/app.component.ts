import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  valorIdade: number = 10

  deletarCiclo: boolean = false


  destruirCiclo() {
    this.deletarCiclo = true
    console.log('section destruida')
  }
  /**
   * irá acionar os eventos ngOnChanges(), ngDoCheck(), ngAfterContentChecked(), 
   * ngAfterViewChecked no console do navegador
   */
  mudarValor(){
    this.valorIdade++
  }
}
