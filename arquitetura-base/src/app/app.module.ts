import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteInicialComponent } from './componente-inicial/componente-inicial.component';
import { TextoComponent } from './texto/texto.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms'; // para poder usar o ngModel
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteInicialComponent,
    TextoComponent,
    CicloComponent,
    DataBindingComponent,
    DiretivasComponent,
    DiretivasAtributosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
