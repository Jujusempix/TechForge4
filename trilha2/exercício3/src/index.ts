class Produto {
  private nome: string;
  private preco: number;
  private quantidade: number;
  private total: number;
  
  constructor(nome: string, preco: number, quantidade: number, total: number){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.total = total;
  }

  public valorEstoque(){
    this.total = this.quantidade * this.preco
    console.log(`Valor total no estoque ${this.total}`);
    
  }
}
const produto1 = new Produto("Queijo Minas", 60, 2, 0);
const produto2 = new Produto("Leite", 10, 5, 0);
produto1.valorEstoque();
produto2.valorEstoque();