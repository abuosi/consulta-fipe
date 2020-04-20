import { Component, OnInit } from '@angular/core';
import { Modelo } from '../models/modelo';
import { FipeService } from '../services/fipe.service';


@Component({
  selector: 'app-busca-modelo',
  templateUrl: './busca-modelo.component.html',
  styleUrls: ['./busca-modelo.component.css']
})
export class BuscaModeloComponent implements OnInit {

  public modelos: Modelo[] ;
  private carregando: boolean = false;

  constructor( public fipeService: FipeService ) { } 

  trocaModelo(el): void {
    this.fipeService.mudaModeloSelecionado(el);
  }

  async ngOnInit(): Promise<void> {

    try {
      this.fipeService.marcaId.subscribe({
        next: (marcaId) => this.fipeService.buscaModelos().subscribe(response => this.modelos = response)
      });
    } catch (error) {
      console.log(error);
    }
  }

}
