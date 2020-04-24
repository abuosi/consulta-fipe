import { Component, OnInit } from '@angular/core';
import { InformacaoCarro } from '../models/informacao-carro';
import { FipeService } from '../services/fipe.service';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.css']
})
export class InformacaoComponent implements OnInit {

  public informacao: InformacaoCarro;
  
  constructor( public fipeService: FipeService ) { }

  ngOnInit(): void {

    try {
      this.fipeService.anoModeloId.subscribe({
        next: (anoModeloId) => this.fipeService.buscaInformacao().subscribe(response => this.informacao = response)
      });
    } catch (error) {
      console.log(error);
    }

  }

}
