import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscaMarcasComponent } from './busca-marcas/busca-marcas.component';
import { BuscaModeloComponent } from './busca-modelo/busca-modelo.component';
import { BuscaAnomodeloComponent } from './busca-anomodelo/busca-anomodelo.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BuscaMarcasComponent,
    BuscaModeloComponent,
    BuscaAnomodeloComponent,
    InformacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
