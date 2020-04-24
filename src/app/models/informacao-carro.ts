export class InformacaoCarro {
    constructor( public preco: string, 
                 public marca: string,
                 public modelo: string, 
                 public anoModelo: number,
                 public combustivel: string, 
                 public fipeId: string,
                 public mesReferencia: string,
                 public tipoCarro: number, 
                 public combustivelId: string,

    ) { }
}
