import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Marca } from '../models/marca';
import { Modelo } from '../models/modelo';
import { AnoModelo } from '../models/ano-modelo';
import { InformacaoCarro } from '../models/informacao-carro';

@Injectable({ providedIn: 'root' })
export class FipeService {


  public marcaId = new BehaviorSubject<number>(0);
  public modeloId = new BehaviorSubject<number>(0);
  public anoModeloId = new BehaviorSubject<number>(0);

  public marcaSelecionada: boolean = false;
  public modeloSelecionado: boolean = false;
  public anoModeloSelecionado: boolean = false;
  public carroInformacaoSelecionado: boolean = false;

  constructor( private httpClient: HttpClient ) { }

  // Marcas
  
  mudaMarcaSelecionada(marcaId: number) {
    this.marcaId.next(marcaId);
  }

  buscaMarcas(): Observable<Marca[]> {

    try {

      // Variaveis de controle de tela
      this.marcaSelecionada = false;
      this.modeloSelecionado = false;
      this.anoModeloSelecionado = false;

      return this.httpClient.get<Marca[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas');

    } catch (error) {
      console.log(error);
    } 

  }

  // Modelos
  
  mudaModeloSelecionado(modeloId: number) {
    this.modeloId.next(modeloId);
  }

  buscaModelos(): Observable<Modelo[]> {
  
    try {

       if (this.marcaId.value == 0) {
        return of([]);
      }

      return this.httpClient.get<Modelo[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.marcaId.value}/modelos`)
        .pipe( map(p => p['modelos'].map(modelo => new Modelo(modelo['codigo'], modelo['nome']))));
    } catch (error) {
      console.log(error);
    } finally {
      this.modeloSelecionado = true;
    }

  }

  // ano-modelo

  mudaAnoModeloSelecionado(anoModeloId: number) {
    this.anoModeloId.next(anoModeloId);
    console.log('ano modelo selecionado:'+this.anoModeloId.value);
  }

  buscaAnoModelo(): Observable<AnoModelo[]> {
  
    try {

      if (this.modeloId.value == 0) {
        return of([]);
      }

      return this.httpClient.get<AnoModelo[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.marcaId.value}/modelos/${this.modeloId.value}/anos`);
    
    } catch (error) {

      console.log(error);

    } finally {

      this.anoModeloSelecionado = true;

    }

  }

  // Informação do Veículo 

  buscaInformacao(): Observable<InformacaoCarro> {

  try {
    this.carroInformacaoSelecionado = false;

    console.log(`AnoModeloID Selecionada: ${this.anoModeloId.value}`);

    if (this.anoModeloId.value == 0) {
      return of(null);
    }
    
    return this.httpClient.get<InformacaoCarro>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.marcaId.value}/modelos/${this.modeloId.value}/anos/${this.anoModeloId.value}`)

  } catch (error) {

    console.log(error);

  } finally {

    this.carroInformacaoSelecionado = true;

  }


    /** 
      .pipe(
        map(p => new InformacaoCarro(
          p["Valor"],
          p["Marca"],
          p["Modelo"],
          p["AnoModelo"],
          p["Combustivel"],
          p["CodigoFipe"],
          p["MesReferencia"],
          p["TipoVeiculo"],
          p["SiglaCombustivel"]
        )),
        tap(p => this.carroInformacaoselecionado = true),
        catchError((e) => {
          console.log(e);
          return throwError
        })
      );
*/
  } 

}
