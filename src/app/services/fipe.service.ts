import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Marca } from '../models/marca';
import { Modelo } from '../models/modelo';
import { AnoModelo } from '../models/ano-modelo';

@Injectable({ providedIn: 'root' })
export class FipeService {


  public marcaId = new BehaviorSubject<number>(0);
  public modeloId = new BehaviorSubject<number>(0);
  public anoModeloId = new BehaviorSubject<number>(0);

  public marcaSelecionada: boolean = false;
  public modeloSelecionado: boolean = false;
  public anoModeloSelecionado: boolean = false;

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

      console.log(`MarcaID Selecionada: ${this.marcaId.value}`);

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
  }

  buscaAnoModelo(): Observable<AnoModelo[]> {
  
    try {

      console.log(`ModeloID Selecionada: ${this.modeloId.value}`);

      if (this.modeloId.value == 0) {
        return of([]);
      }

      return this.httpClient.get<AnoModelo[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.marcaId.value}/modelos/${this.modeloId.value}/anos`);
//        .pipe( map(p => p['anoModelos'].map(anoModelo => new AnoModelo(anoModelo['codigo'], anoModelo['nome']))));
    
    } catch (error) {

      console.log(error);

    } finally {

      this.anoModeloSelecionado = true;

    }

  }

}