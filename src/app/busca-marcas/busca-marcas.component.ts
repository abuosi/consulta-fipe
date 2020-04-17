import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { Marca } from '../models/marca';

@Component({
  selector: 'app-busca-marcas',
  templateUrl: './busca-marcas.component.html',
  styleUrls: ['./busca-marcas.component.css']
})

export class BuscaMarcasComponent implements OnInit {

  public marcas: Marca[] ;
  private carregando: boolean = false;

  constructor( private fipeService: FipeService ) { } 

  trocaMarca(el): void {
    this.fipeService.mudaMarcaSelecionada(el);
  }

  async atualizar() {
    // Usando async/await com promises
    try {
      this.carregando = true;
      this.marcas = await this.fipeService.buscaMarcas().toPromise();

      // Exibe Marcas no Console
      console.log(`Lista de Marcas`);
      console.log(`---------------`);
      console.table(this.marcas);

    } catch (error) {
      console.log(error);
    } finally {
      this.carregando = false;
    }
  }

  async ngOnInit(): Promise<void> {
    await this.atualizar();
  }

}
