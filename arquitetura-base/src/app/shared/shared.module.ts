import { NgModule } from '@angular/core'; // importando funcionalidades do decorator NgModule
import { CommonModule } from '@angular/common'; // Importando as diretivas 
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component'; 



@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewComponentComponent,
    InputComponent
  ],
})
export class SharedModule { }
