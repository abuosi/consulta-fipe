import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscaMarcasComponent } from './busca-marcas/busca-marcas.component';
import { BuscaModeloComponent } from './busca-modelo/busca-modelo.component';
// import { BuscaAnoModeloComponent } from './busca-ano-modelo/busca-ano-modelo.component';
// import { InformacaoComponent } from './informacao/informacao.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscaMarcasComponent,
    BuscaModeloComponent
//    BuscaAnoModeloComponent,
//    InformacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
