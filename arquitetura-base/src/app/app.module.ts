import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteInicialComponent } from './componente-inicial/componente-inicial.component';
import { TextoComponent } from './texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteInicialComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
