import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Marca } from '../models/marca';
import { Modelo } from '../models/modelo';

@Injectable({ providedIn: 'root' })
export class FipeService {

  private marcaId:number = 0;
  private modeloId: number = 0;

  public marcaSelecionada: boolean = false;
  public modeloSelecionado: boolean = false;
  public anoModeloSelecionado: boolean = false;

  constructor( private httpClient: HttpClient ) { }

  mudaMarcaSelecionada(modeloId: number) {
    this.marcaId = modeloId;
  }

  mudaModeloSelecionado(marcaId: number) {
    this.modeloId = marcaId;
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

  buscaModelos(): Observable<Modelo[]> {
  
    try {

      console.log(`MarcaID Selecionada: ${this.marcaId.toString()}`);

       if (this.marcaId == 0) {
        return of([]);
      }

      return this.httpClient.get<Marca[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.modeloId.toString()}/modelos`);
    } catch (error) {
      console.log(error);
    } finally {
      this.modeloSelecionado = true;
    }

  }

}
