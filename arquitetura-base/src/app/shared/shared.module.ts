import { NgModule } from '@angular/core'; // importando funcionalidades do decorator NgModule
import { CommonModule } from '@angular/common'; // Importando as diretivas 
import { NewComponentComponent } from './new-component/new-component.component'; 



@NgModule({
  declarations: [
    NewComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewComponentComponent
  ],
})
export class SharedModule { }
