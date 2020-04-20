import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { AnoModelo } from '../models/ano-modelo';

@Component({
  selector: 'app-busca-anomodelo',
  templateUrl: './busca-anomodelo.component.html',
  styleUrls: ['./busca-anomodelo.component.css']
})
export class BuscaAnomodeloComponent implements OnInit {

  public anoModelos: AnoModelo[] ;
  private carregando: boolean = false;
  
  constructor( public fipeService: FipeService ) { } 
  
  trocaAnoModelo(el): void {
    this.fipeService.mudaAnoModeloSelecionado(el);
  }

  ngOnInit(): void {

    try {
      this.fipeService.modeloId.subscribe({
        next: (modeloId) => this.fipeService.buscaAnoModelo().subscribe(response => this.anoModelos = response)
      });
    } catch (error) {
      console.log(error);
    }

  }

}
