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

  async atualizar() {
    // Usando async/await com promises
    try {
      this.carregando = true;
      this.modelos = await this.fipeService.buscaModelos().toPromise();
    } catch (error) {
      console.log(error);
    } finally {
      this.carregando = false;
    }
  }

  async ngOnInit(): Promise<void> {

    //this.fipeService.brandId.subscribe({
    //  next: (brandId) => this.fipeService.getModels().subscribe(response => this.models = response)
    //});

    await this.atualizar();
  }

}
