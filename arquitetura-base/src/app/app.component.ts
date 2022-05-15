import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  valorIdade: number = 10

  /**
   * irá acionar os eventos ngOnChanges(), ngDoCheck(), ngAfterContentChecked(), 
   * ngAfterViewChecked no console do navegador
   */
  mudarValor(){
    this.valorIdade++
  }
}
